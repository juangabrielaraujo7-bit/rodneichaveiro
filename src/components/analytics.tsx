"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  const valid = !!id && /^G-[A-Z0-9]+$/.test(id);
  const [consent, setConsent] = useState<"pending" | "yes" | "no">("pending");
  const pathname = usePathname();
  useEffect(() => {
    const t = window.setTimeout(() => {
      const saved = localStorage.getItem("rodnei-analytics");
      if (saved === "yes" || saved === "no") setConsent(saved);
    }, 0);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (valid && consent === "yes" && window.gtag)
      window.gtag("event", "page_view", { page_path: pathname });
  }, [pathname, valid, consent]);
  useEffect(() => {
    if (!valid || consent !== "yes") return;
    function click(event: MouseEvent) {
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>("a[data-conversion]")
          : null;
      if (target)
        window.gtag?.("event", target.dataset.conversion, {
          page_path: window.location.pathname,
          conversion_origin: target.dataset.source ?? "body",
          transport_type: "beacon",
        });
    }
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, [valid, consent]);
  useEffect(() => {
    function reset() {
      setConsent("pending");
      localStorage.removeItem("rodnei-analytics");
    }
    window.addEventListener("rodnei-privacy", reset);
    return () => window.removeEventListener("rodnei-privacy", reset);
  }, []);
  if (!valid) return null;
  function choose(value: "yes" | "no") {
    localStorage.setItem("rodnei-analytics", value);
    setConsent(value);
    if (window.gtag)
      window.gtag("consent", "update", {
        analytics_storage: value === "yes" ? "granted" : "denied",
      });
  }
  return (
    <>
      {consent === "yes" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga-init"
            strategy="afterInteractive"
          >{`window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('js',new Date());gtag('config',${JSON.stringify(id)},{send_page_view:false});gtag('event','page_view',{page_path:location.pathname});`}</Script>
        </>
      )}
      {consent === "pending" && (
        <aside className="consent" aria-label="Preferências de privacidade">
          <p>
            Podemos usar estatísticas de navegação para melhorar o site? Sua
            escolha não interfere no atendimento.
          </p>
          <div>
            <button onClick={() => choose("no")}>Recusar</button>
            <button onClick={() => choose("yes")}>Aceitar estatísticas</button>
          </div>
        </aside>
      )}
    </>
  );
}
export function PrivacySettings() {
  if (!/^G-[A-Z0-9]+$/.test(process.env.NEXT_PUBLIC_GA_ID ?? "")) {
    return <p>As estatísticas de navegação não estão ativas neste site.</p>;
  }
  return (
    <button
      className="text-button"
      onClick={() => window.dispatchEvent(new Event("rodnei-privacy"))}
    >
      Preferências de cookies
    </button>
  );
}
