import type { Metadata } from "next";
import { definitiveOrigin, canIndex } from "./publishing.mjs";
export const origin = definitiveOrigin();
export const indexable = canIndex();
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: origin ? { canonical: `${origin}${path}` } : undefined,
    robots: { index: indexable, follow: indexable },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pt_BR",
      siteName: "Rodnei Chaveiro",
      ...(origin
        ? { url: `${origin}${path}`, images: [`${origin}/opengraph-image`] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(origin ? { images: [`${origin}/opengraph-image`] } : {}),
    },
  };
}
