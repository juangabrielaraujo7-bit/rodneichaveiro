import { writeFile } from "node:fs/promises";
const urls = [
  "https://chaveiroalmeidamaringa.com.br/",
  "https://chaveiroalmeidamaringa.com.br/chaves-automotivas-em-maringa/",
  "https://chaveiroalmeidamaringa.com.br/copia-de-chaves-em-maringa/",
  "https://chaveiroalmeidamaringa.com.br/enderecos/",
  "https://chaveiroalmeidamaringa.com.br/blog/",
  "https://chaveirodopaulista.com.br/chaveiro-freguesia-do-o/",
  "https://www.gsmchaveiro.com.br/chaveiro-24horas-na-freguesia-do-o.php",
  "https://chaveiroautomotivosp.com.br/freguesia-do-o/",
];
const strip = (s) =>
  s
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const observations = await Promise.all(
  urls.map(async (url) => {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(25000) });
      const html = await r.text();
      const tags = Array.from(html.matchAll(/<meta\b[^>]*>/gi), (m) => m[0]);
      const links = Array.from(
        html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi),
        (m) => ({ href: m[1], label: strip(m[2]).slice(0, 90) }),
      );
      return {
        url,
        status: r.status,
        title: strip(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || ""),
        descriptionPresent: tags.some((t) => /name=["']description/i.test(t)),
        canonical: html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i)?.[0],
        h1: Array.from(html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi), (m) =>
          strip(m[1]),
        ),
        h2Count: [...html.matchAll(/<h2\b/gi)].length,
        jsonLdTypes: [
          ...new Set(
            Array.from(html.matchAll(/"@type"\s*:\s*"([^"]+)"/g), (m) => m[1]),
          ),
        ],
        internalLinks: [
          ...new Map(
            links
              .filter((l) => {
                try {
                  return new URL(l.href, url).host === new URL(url).host;
                } catch {
                  return false;
                }
              })
              .map((l) => [l.href, l.href]),
          ).values(),
        ].slice(0, 40),
        imageCount: [...html.matchAll(/<img\b/gi)].length,
      };
    } catch (e) {
      return { url, error: e.message };
    }
  }),
);
await writeFile(
  "docs/seo-observations.json",
  JSON.stringify(
    {
      checkedAt: new Date().toISOString(),
      method:
        "HTTP HTML inspection; organic discovery through web search, not a rank tracker or live Google Maps grid",
      observations,
    },
    null,
    2,
  ),
);
console.log(
  observations.map((o) => ({
    url: o.url,
    status: o.status,
    title: o.title,
    h1: o.h1,
    h2Count: o.h2Count,
    types: o.jsonLdTypes,
    error: o.error,
  })),
);
