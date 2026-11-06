import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/content";
import { pageMetadata } from "@/lib/site";
import {
  Breadcrumbs,
  ContactButtons,
  FaqList,
  FinalCta,
  Icon,
  ServiceCard,
} from "@/components/ui";
import { BreadcrumbSchema } from "@/components/schema";
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const item = services.find((s) => s.slug === service);
  return item
    ? pageMetadata(item.title, item.description, `/${item.slug}`)
    : {};
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const item = services.find((s) => s.slug === service);
  if (!item) notFound();
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: item.name }]} />
        <section className="inner-hero">
          <div>
            <h1>{item.title}</h1>
            <p>{item.intro}</p>
            <ContactButtons message={item.message} source={item.slug} />
          </div>
          <div className="service-emblem">
            <Icon name={item.icon} size={100} />
            <span>{item.name}</span>
            <small>Freguesia do Ó · São Paulo</small>
          </div>
        </section>
      </div>
      <section className="content-section container content-grid">
        <div>
          <h2>
            Quando procurar
            <br />
            esse atendimento?
          </h2>
          <ul className="check-list">
            {item.situations.map((s) => (
              <li key={s}>
                <Check size={19} aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="prose">
          <h2>Entenda o serviço.</h2>
          <p>{item.explanation}</p>
          <p>
            O Rodnei atende na Freguesia do Ó, Vila Albertina, Vila Palmeiras,
            Vila Siqueira e Limão. Consulte a disponibilidade para seu endereço
            e combine os detalhes diretamente pelo WhatsApp ou telefone.
          </p>
          <Link href="/regioes-atendidas" className="text-link">
            Veja a área de atendimento{" "}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="prepare-section">
        <div className="container content-grid">
          <div>
            <h2>
              Um primeiro contato
              <br />
              mais simples.
            </h2>
            <p>
              Tenha estas informações à mão
              <br />
              para ajudar na avaliação.
            </p>
          </div>
          <ul className="prepare-list">
            {item.prepare.map((text, i) => (
              <li key={text}>
                <span>{i + 1}</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="faq-section container">
        <div>
          <h2>
            Dúvidas sobre
            <br />
            {item.name.toLocaleLowerCase("pt-BR")}.
          </h2>
        </div>
        <FaqList items={item.faq} />
      </section>
      <section className="section container related-section">
        <h2>
          Outros serviços
          <br />
          que podem ajudar.
        </h2>
        <div className="related-grid">
          {item.related.map((slug) => (
            <ServiceCard
              key={slug}
              service={services.find((s) => s.slug === slug)!}
            />
          ))}
        </div>
      </section>
      <FinalCta message={item.message} source={`${item.slug}_final`} />
      <BreadcrumbSchema name={item.name} path={`/${item.slug}`} />
    </>
  );
}
