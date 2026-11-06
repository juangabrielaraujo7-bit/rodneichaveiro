"use client";
import { WhatsAppIcon } from "./whatsapp-icon";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { company } from "@/lib/content";
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    ["Serviços", "/#servicos"],
    ["Sobre o Rodnei", "/sobre"],
    ["Avaliações", "/#avaliacoes"],
    ["Regiões atendidas", "/regioes-atendidas"],
    ["Contato", "/contato"],
  ];
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>
            <span className="status-dot" />
            Atendimento 24 horas
          </span>
          <span>Freguesia do Ó · São Paulo</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link
            href="/"
            aria-label="Rodnei Chaveiro — início"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/brand/logo-horizontal-marfim-web.svg"
              width={224}
              height={80}
              alt="Rodnei Chaveiro — Freguesia do Ó"
              priority
              className="header-logo"
            />
          </Link>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
          <a
            className="header-phone whatsapp-button"
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Olá, encontrei o Rodnei Chaveiro pelo site e gostaria de um atendimento.")}`}
            data-conversion="whatsapp_click"
            data-source="header"
          >
            <WhatsAppIcon size={17} aria-hidden="true" />
            WhatsApp
          </a>
          <button
            className="menu-button"
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Navegação móvel"
          >
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
