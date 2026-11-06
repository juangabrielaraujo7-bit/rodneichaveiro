import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/inter";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";
import { BusinessSchema } from "@/components/schema";
import { origin, pageMetadata } from "@/lib/site";
export const metadata: Metadata = {
  ...pageMetadata(
    "Chaveiro na Freguesia do Ó 24 horas | Rodnei Chaveiro",
    "Rodnei Chaveiro na Freguesia do Ó: atendimento 24 horas, residencial, automotivo e chaves codificadas. Fale pelo WhatsApp (11) 96087-7257.",
    "/",
  ),
  title: {
    default: "Chaveiro na Freguesia do Ó 24 horas | Rodnei Chaveiro",
    template: "%s | Rodnei Chaveiro",
  },
  metadataBase: new URL(
    origin ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://127.0.0.1:3000"),
  ),
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
  icons: { icon: "/brand/favicon.svg", apple: "/brand/apple-touch-icon.png" },
};
export const viewport: Viewport = {
  themeColor: "#1E1E22",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <BusinessSchema />
        <Analytics />
      </body>
    </html>
  );
}
