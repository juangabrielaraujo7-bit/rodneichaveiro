import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, FinalCta } from "@/components/ui";
import { BreadcrumbSchema } from "@/components/schema";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Sobre o Rodnei Chaveiro na Freguesia do Ó",
  "Conheça o Rodnei Chaveiro, na Vila Albertina, Freguesia do Ó. Atendimento 24 horas para serviços residenciais, automotivos e chaves codificadas.",
  "/sobre",
);
export default function About() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: "Sobre o Rodnei" }]} />
        <section className="inner-hero">
          <div>
            <h1>
              Um contato local.
              <br />
              <span>
                Para cuidar do
                <br />
                seu acesso.
              </span>
            </h1>
            <p>
              Rodnei Chaveiro - Freguesia do Ó. Atendimento residencial e
              automotivo, com contato por WhatsApp e telefone, 24 horas.
            </p>
          </div>
          <div className="about-brand">
            <Image
              src="/brand/logo-vertical-grafite.svg"
              width={360}
              height={360}
              alt="Rodnei Chaveiro — identidade oficial"
            />
          </div>
        </section>
        <section className="content-section content-grid">
          <h2>
            Na Vila Albertina.
            <br />
            Presente na sua rotina.
          </h2>
          <div className="prose">
            <p>
              O Rodnei Chaveiro está na Rua Dr. Elviro Carrilho, 309, Vila
              Albertina, São Paulo. Os serviços incluem atendimento residencial,
              automotivo, chaves codificadas e serviços tradicionais de
              chaveiro.
            </p>
            <p>
              Para consultar uma solução, descreva o problema e informe a
              localização. Quando possível, envie uma foto da chave ou da
              fechadura. Para veículos, marca, modelo e ano ajudam a verificar a
              compatibilidade.
            </p>
            <p>
              O atendimento abrange Freguesia do Ó, Vila Albertina, Vila
              Palmeiras, Vila Siqueira e Limão. A disponibilidade, o orçamento e
              o deslocamento são combinados caso a caso.
            </p>
            <Link href="/contato" className="text-link">
              Entre em contato <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
      <FinalCta source="about" />
      <BreadcrumbSchema name="Sobre o Rodnei" path="/sobre" />
    </>
  );
}
