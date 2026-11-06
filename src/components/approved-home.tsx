import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  CarFront,
  House,
  MapPin,
  Phone,
} from "lucide-react";
import { ContactButtons, Icon, FaqList } from "./ui";
import { Reviews } from "./reviews";
import { company, homeFaq, regions, services } from "@/lib/content";
function Wave({ fill }: { fill: string }) {
  return (
    <svg
      className="section-wave"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path fill={fill} d="M0 30C380-35 950 110 1440 22V60H0Z" />
    </svg>
  );
}
export default function ApprovedHome() {
  const primary = [
    "abertura-de-portas",
    "chaveiro-automotivo",
    "chaves-codificadas",
    "troca-de-fechaduras",
  ];
  return (
    <div className="approved-home">
      <section className="concept-hero dark-surface">
        <div className="concept-container concept-hero-grid">
          <div className="concept-hero-copy">
            <h1>
              Chaveiro <span>24h</span> na
              <br className="wide-break" /> Freguesia do Ó.
            </h1>
            <p>
              Atendimento residencial e automotivo
              <br className="wide-break" /> na Freguesia do Ó e região.
            </p>
            <ContactButtons />
            <div className="concept-trust">
              <span>
                <Clock3 />
                24 horas
              </span>
              <span>
                <CarFront />
                Automotivo
              </span>
              <span>
                <House />
                Residencial
              </span>
            </div>
          </div>
          <div className="concept-person">
            <span className="person-circle" />
            <Image
              src="/images/approved/hero-professional.webp"
              alt="Profissional ilustrativo de chaveiro, gerado por IA"
              width={800}
              height={1000}
              sizes="(max-width:640px) 90vw, 480px"
              priority
            />
          </div>
        </div>
        <Wave fill="#f7f7f7" />
      </section>
      <section className="concept-services light-surface" id="servicos">
        <div className="concept-container">
          <h2>Serviços para casa e carro.</h2>
          <div className="editorial-services">
            {primary.map((slug) => {
              const s = services.find((x) => x.slug === slug)!;
              return (
                <Link key={slug} href={`/${slug}`}>
                  <Icon name={s.icon} size={30} />
                  <h3>
                    {s.name}
                    <ArrowRight size={17} />
                  </h3>
                  <p>{s.short}</p>
                </Link>
              );
            })}
          </div>
          <nav className="more-services" aria-label="Outros serviços">
            {services
              .filter((s) => !primary.includes(s.slug))
              .map((s) => (
                <Link key={s.slug} href={`/${s.slug}`}>
                  {s.name}
                  <ArrowRight size={14} />
                </Link>
              ))}
          </nav>
        </div>
        <Wave fill="#202020" />
      </section>
      <section className="concept-emergency dark-surface">
        <div className="concept-container emergency-grid">
          <span className="outline-hours" aria-hidden="true">
            24H
          </span>
          <div>
            <h2>Imprevistos não escolhem hora.</h2>
            <p>Consulte o atendimento para sua localização.</p>
            <ContactButtons compact source="home_emergency" />
          </div>
        </div>
        <Wave fill="#f7f7f7" />
      </section>
      <section className="concept-feature light-surface">
        <div className="feature-yellow" aria-hidden="true" />
        <div className="concept-container feature-grid">
          <div className="automotive-photo">
            <Image
              src="/images/approved/automotive-work.webp"
              alt="Imagem ilustrativa de atendimento em fechadura automotiva"
              width={700}
              height={700}
              sizes="(max-width:640px) 80vw, 370px"
            />
          </div>
          <div>
            <h2>
              Cuidado com a<br /> chave do seu carro.
            </h2>
            <p>
              Informe o modelo do veículo
              <br className="wide-break" /> e fale com o Rodnei.
            </p>
            <Link href="/chaveiro-automotivo" className="button button-primary">
              Conhecer o serviço
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <Wave fill="#202020" />
      </section>
      <section className="concept-about dark-surface" id="sobre">
        <div className="concept-container about-grid">
          <div>
            <h2>
              Um contato aqui
              <br /> no bairro.
            </h2>
            <p>
              <strong>Rodnei Chaveiro — Freguesia do Ó.</strong>
              <br />
              {company.address} · Vila Albertina
            </p>
            <Link href="/sobre" className="text-link">
              Sobre o Rodnei
              <ArrowRight size={16} />
            </Link>
          </div>
          <figure className="about-portrait">
            <div className="about-portrait-circle">
              <Image
                src="/images/approved/about-professional.webp"
                alt="Retrato de profissional ilustrativo, gerado por IA"
                width={800}
                height={800}
                sizes="(max-width:640px) 80vw, 360px"
              />
            </div>
            <figcaption>Profissional ilustrativo</figcaption>
          </figure>
        </div>
        <Wave fill="#f7f7f7" />
      </section>
      <div className="concept-reviews light-surface">
        <Reviews />
        <Wave fill="#202020" />
      </div>
      <section className="concept-regions dark-surface">
        <div className="concept-container">
          <h2>Na Freguesia do Ó e por perto.</h2>
          <ul>
            {regions.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <Link className="text-link" href="/regioes-atendidas">
            Consultar regiões atendidas
            <ArrowRight size={16} />
          </Link>
        </div>
        <Wave fill="#f7f7f7" />
      </section>
      <section className="concept-location light-surface" id="localizacao">
        <div className="concept-container">
          <MapPin size={25} />
          <h2>{company.address}</h2>
          <p>Vila Albertina · São Paulo · CEP {company.zip}</p>
          <a
            className="button button-primary"
            href={company.maps}
            target="_blank"
            rel="noopener noreferrer"
            data-conversion="maps_click"
            data-source="home_location"
          >
            Ver localização
            <ArrowRight size={16} />
          </a>
        </div>
        <Wave fill="#202020" />
      </section>
      <section className="concept-faq dark-surface">
        <div className="concept-container">
          <h2>Antes de chamar, tire suas dúvidas.</h2>
          <FaqList items={homeFaq} />
        </div>
      </section>
      <section className="concept-final dark-surface">
        <div className="final-circle" aria-hidden="true" />
        <div className="concept-container">
          <h2>Precisa de um chaveiro?</h2>
          <div className="closing-contacts">
            <ContactButtons source="home_final" compact />
            <a
              className="closing-phone"
              href={company.tel}
              data-conversion="phone_click"
              data-source="home_final_number"
            >
              <Phone size={23} />
              {company.phone}
            </a>
          </div>
          <p>Imagens ilustrativas. Profissional gerado por IA.</p>
        </div>
      </section>
    </div>
  );
}
