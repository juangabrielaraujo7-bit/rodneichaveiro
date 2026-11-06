import { company, regions } from "@/lib/content";
import { origin } from "@/lib/site";
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export function BusinessSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["Locksmith", "LocalBusiness"],
        name: company.name,
        telephone: "+5511960877257",
        ...(origin
          ? {
              "@id": `${origin}/#business`,
              url: origin,
              logo: `${origin}/brand/logo-horizontal-grafite.svg`,
            }
          : {}),
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address,
          addressLocality: company.city,
          addressRegion: company.state,
          postalCode: company.zip,
          addressCountry: "BR",
        },
        areaServed: regions.map((name) => ({ "@type": "Place", name })),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        sameAs: [company.instagram, company.maps],
      }}
    />
  );
}
export function BreadcrumbSchema({
  name,
  path,
}: {
  name: string;
  path: string;
}) {
  if (!origin) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: origin },
          { "@type": "ListItem", position: 2, name, item: `${origin}${path}` },
        ],
      }}
    />
  );
}
