import type { APIRoute } from 'astro';
import { apps } from '../../data/apps';
import { incr, setIfAbsent, isUpstashConfigured } from '../../lib/upstash';

export const prerender = false;

const VALID_SLUGS = new Set(apps.map((a) => a.slug));
const VALID_DIRS = new Set(['up', 'down']);

// Per-IP rate limit: a single IP can only register one vote every 10 seconds.
// Combined with localStorage dedup on the client (one vote per browser per app,
// permanent), this stops casual scripted abuse without blocking legit users
// who want to vote on multiple apps in a row.
const IP_THROTTLE_SECONDS = 10;

function getIp(request: Request, fallback: string): string {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  const real = request.headers.get('x-real-ip');
  if (real) return real;
  return fallback || 'unknown';
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (!isUpstashConfigured) {
    return Response.json({ error: 'Upstash not configured' }, { status: 503 });
  }

  let body: { slug?: unknown; dir?: unknown } | null = null;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const slug = typeof body?.slug === 'string' ? body.slug : '';
  const dir = typeof body?.dir === 'string' ? body.dir : '';

  if (!VALID_SLUGS.has(slug) || !VALID_DIRS.has(dir)) {
    return Response.json({ error: 'Invalid slug or direction' }, { status: 400 });
  }

  const ip = getIp(request, clientAddress ?? 'unknown');
  const acquired = await setIfAbsent(`vote:rl:${ip}`, IP_THROTTLE_SECONDS);
  if (!acquired) {
    return Response.json({ error: 'Slow down a moment.' }, { status: 429 });
  }

  const count = await incr(`vote:${slug}:${dir}`);
  return Response.json({ ok: true, count });
};
