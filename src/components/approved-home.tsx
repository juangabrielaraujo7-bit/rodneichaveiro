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
import { ContactButtons, FaqList } from "./ui";
import { Reviews } from "./reviews";
import { ServiceCarousel } from "./service-carousel";
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
  return (
    <div className="approved-home">
      <section className="concept-hero dark-surface">
        <div className="concept-container concept-hero-grid">
          <div className="concept-hero-copy">
            <h1>
              Chaveiro <span>24 horas</span> na
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
              alt="Imagem ilustrativa de um chaveiro, gerada por IA"
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
          <ServiceCarousel>
            {services.map((s) => {
              return (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="home-service-card"
                >
                  <div className="home-service-card-image">
                    <Image
                      src={`/images/services/${s.slug}-card-v2.webp`}
                      alt=""
                      width={640}
                      height={426}
                      sizes="(max-width:640px) 80vw, (max-width:1100px) 40vw, 240px"
                    />
                  </div>
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                  <span className="home-service-card-action">
                    Conhecer o serviço
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </ServiceCarousel>
        </div>
        <Wave fill="#202020" />
      </section>
      <section className="concept-emergency dark-surface">
        <div className="concept-container emergency-grid">
          <span className="outline-hours" aria-hidden="true">
            <span className="neon-hours-sign">24H</span>
          </span>
          <div>
            <h2>Imprevistos não escolhem hora.</h2>
            <p>
              Informe sua localização e consulte a disponibilidade de
              atendimento.
            </p>
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
              alt="Imagem ilustrativa de um veículo estacionado"
              width={700}
              height={700}
              sizes="(max-width:640px) 80vw, 370px"
            />
          </div>
          <div>
            <h2>
              Chaves automotivas
              <br /> para o seu veículo.
            </h2>
            <p>
              Informe a marca, o modelo e o ano
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
              Seu chaveiro na
              <br /> Freguesia do Ó.
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
          <h2>Atendimento na Freguesia do Ó e região.</h2>
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
        <div className="concept-container home-location-grid">
          <div>
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
              Abrir rota no Google Maps
              <ArrowRight size={16} />
            </a>
          </div>
          <iframe
            className="home-google-map"
            title="Localização do Rodnei Chaveiro no Google Maps"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(`${company.address}, ${company.district}, São Paulo - SP, ${company.zip}`)}&z=16&output=embed`}
            width="640"
            height="360"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
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
