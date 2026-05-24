// Thin wrapper around the Upstash Redis REST API. We deliberately avoid the
// `@upstash/redis` npm package to keep the dependency surface tiny - the REST
// API is one fetch call per command.

const URL = import.meta.env.UPSTASH_REDIS_REST_URL;
const TOKEN = import.meta.env.UPSTASH_REDIS_REST_TOKEN;

export const isUpstashConfigured = Boolean(URL && TOKEN);

async function upstash<T = unknown>(command: (string | number)[]): Promise<T | null> {
  if (!isUpstashConfigured) return null;
  const path = command.map((c) => encodeURIComponent(String(c))).join('/');
  const res = await fetch(`${URL}/${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  if (!res.ok) {
    throw new Error(`Upstash error ${res.status}: ${await res.text()}`);
  }
  const data = (await res.json()) as { result: T };
  return data.result;
}

export async function incr(key: string): Promise<number> {
  const result = await upstash<number>(['incr', key]);
  return result ?? 0;
}

export async function mget(keys: string[]): Promise<(string | null)[]> {
  if (!keys.length) return [];
  const result = await upstash<(string | null)[]>(['mget', ...keys]);
  return result ?? keys.map(() => null);
}

/**
 * SET key value EX seconds NX - atomic "first writer wins" with a TTL.
 * Returns true if the key was set (acquired), false if it already existed.
 * Used as a per-IP rate-limiter token.
 */
export async function setIfAbsent(key: string, ttlSeconds: number): Promise<boolean> {
  const result = await upstash<string | null>(['set', key, '1', 'EX', ttlSeconds, 'NX']);
  return result === 'OK';
}
