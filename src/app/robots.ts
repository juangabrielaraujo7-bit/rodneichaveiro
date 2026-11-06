import type { MetadataRoute } from "next";
import { indexable, origin } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: indexable
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    ...(indexable && origin ? { sitemap: `${origin}/sitemap.xml` } : {}),
  };
}
