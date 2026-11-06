import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { guides } from "@/lib/guides";
import { Breadcrumbs, FinalCta } from "@/components/ui";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Orientações sobre chaves e fechaduras",
  "Informações úteis para solicitar um chaveiro: perda de chave, chaves codificadas e troca de fechaduras. Orientações do site Rodnei Chaveiro.",
  "/orientacoes",
);
export default function Guides() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: "Orientações" }]} />
        <section className="text-hero">
          <h1>
            Informação para
            <br />
            <span>o próximo passo.</span>
          </h1>
          <p>
            Entenda o que observar e quais informações preparar antes de pedir
            atendimento.
          </p>
        </section>
        <div className="guide-list">
          {guides.map((g) => (
            <Link key={g.slug} href={`/orientacoes/${g.slug}`}>
              <div>
                <h2>{g.title}</h2>
                <p>{g.description}</p>
              </div>
              <ArrowUpRight size={26} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
      <FinalCta source="guides" />
    </>
  );
}
