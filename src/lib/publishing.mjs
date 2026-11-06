export function definitiveOrigin(env = process.env) {
  const value = env.SITE_URL?.trim();
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || /(^|\.)(vercel\.app|localhost)$/.test(url.hostname) || url.hostname === '127.0.0.1' || url.pathname !== '/' || url.search || url.hash || url.username || url.password) return undefined;
    return url.origin;
  } catch { return undefined; }
}
export function canIndex(env = process.env) {
  return env.INDEXING_ENABLED === 'true' && !!definitiveOrigin(env) && env.VERCEL_ENV !== 'preview';
}
