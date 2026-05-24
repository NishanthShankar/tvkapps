import type { APIRoute } from 'astro';
import { apps } from '../../data/apps';
import { mget, isUpstashConfigured } from '../../lib/upstash';

export const prerender = false;

export const GET: APIRoute = async () => {
  if (!isUpstashConfigured) {
    return Response.json({ error: 'Upstash not configured' }, { status: 503 });
  }

  const slugs = apps.map((a) => a.slug);
  const keys = slugs.flatMap((s) => [`vote:${s}:up`, `vote:${s}:down`]);
  const values = await mget(keys);

  const counts: Record<string, { up: number; down: number }> = {};
  slugs.forEach((slug, i) => {
    counts[slug] = {
      up: parseInt(values[i * 2] ?? '0', 10) || 0,
      down: parseInt(values[i * 2 + 1] ?? '0', 10) || 0,
    };
  });

  return new Response(JSON.stringify(counts), {
    headers: {
      'content-type': 'application/json',
      // 10-second public cache: votes don't need real-time accuracy, and this
      // keeps load on Upstash trivial even if traffic spikes.
      'cache-control': 'public, max-age=10, stale-while-revalidate=30',
    },
  });
};
