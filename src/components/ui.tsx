import Link from "next/link";
import { WhatsAppIcon } from "./whatsapp-icon";
import Image from "next/image";
import {
  ArrowUpRight,
  Phone,
  Clock3,
  CarFront,
  Cpu,
  House,
  DoorOpen,
  LockKeyhole,
  KeyRound,
  MapPin,
} from "lucide-react";
import { company, type Faq, type Service } from "@/lib/content";
export function Icon({
  name,
  size = 24,
}: {
  name: Service["icon"] | "pin";
  size?: number;
}) {
  const Component = {
    clock: Clock3,
    car: CarFront,
    chip: Cpu,
    home: House,
    door: DoorOpen,
    lock: LockKeyhole,
    key: KeyRound,
    pin: MapPin,
  }[name];
  return <Component size={size} strokeWidth={1.5} aria-hidden="true" />;
}
export function ContactButtons({
  message = "Olá, encontrei o Rodnei Chaveiro pelo site e gostaria de um atendimento.",
  source = "home",
  compact = false,
}: {
  message?: string;
  source?: string;
  compact?: boolean;
}) {
  return (
    <div className="contact-buttons">
      <a
        className="button button-primary whatsapp-button"
        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`}
        data-conversion="whatsapp_click"
        data-source={source}
      >
        <WhatsAppIcon size={19} aria-hidden="true" />
        {compact ? "Falar com o Rodnei" : "Chamar no WhatsApp"}
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
      <a
        className="button button-outline"
        href={company.tel}
        data-conversion="phone_click"
        data-source={source}
      >
        <Phone size={18} aria-hidden="true" />
        Ligar agora
      </a>
    </div>
  );
}
export function ServiceCard({
  service,
  featured = false,
}: {
  service: Service;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/${service.slug}`}
      className={`service-card${featured ? " featured" : ""}`}
    >
      <div className="service-image-wrap" aria-hidden="true">
        <Image
          className="service-image"
          src={`/images/services/${service.slug}.webp`}
          alt=""
          width={640}
          height={640}
          sizes="(max-width: 640px) 80vw, (max-width: 1150px) 40vw, 340px"
        />
      </div>
      <div className="service-card-copy">
        <h3>{service.name}</h3>
        <p>{service.short}</p>
      </div>
      <ArrowUpRight className="card-arrow" size={22} aria-hidden="true" />
      <span className="service-link">Conhecer o serviço</span>
    </Link>
  );
}
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question}>
          <summary>
            {item.question}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="Caminho da página">
      <ol>
        <li>
          <Link href="/">Início</Link>
        </li>
        {items.map((item, i) => (
          <li key={item.name}>
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href}>{item.name}</Link>
            ) : (
              <span aria-current={i === items.length - 1 ? "page" : undefined}>
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
export function FinalCta({
  message,
  source = "final",
}: {
  message?: string;
  source?: string;
}) {
  return (
    <section className="final-cta">
      <div className="container final-inner">
        <div>
          <h2>
            Precisa de um chaveiro?
            <br />
            <span>Fale com o Rodnei.</span>
          </h2>
          <p>Conte o que aconteceu e informe sua localização.</p>
        </div>
        <ContactButtons message={message} source={source} compact />
      </div>
    </section>
  );
}
