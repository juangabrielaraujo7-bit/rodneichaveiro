import Link from "next/link";
import { ContactButtons } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="container text-hero not-found">
      <span className="error-code">404</span>
      <h1>
        Essa porta não
        <br />
        leva a uma página.
      </h1>
      <p>
        O endereço pode ter mudado. Volte ao início ou fale com o Rodnei para
        pedir atendimento.
      </p>
      <Link className="text-link" href="/">
        Voltar para o início →
      </Link>
      <ContactButtons source="404" />
    </section>
  );
}
