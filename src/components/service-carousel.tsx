"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ServiceCarousel({ children }: { children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  function updateEdges() {
    const element = track.current;
    if (!element) return;
    setEdges({
      start: element.scrollLeft <= 2,
      end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
    });
  }

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const observer = new ResizeObserver(updateEdges);
    observer.observe(element);
    updateEdges();
    return () => observer.disconnect();
  }, []);

  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
    element.scrollBy({
      left: direction * ((card?.offsetWidth ?? element.clientWidth) + gap),
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  return (
    <div
      className="service-carousel"
      role="region"
      aria-label="Serviços"
      aria-roledescription="carrossel"
    >
      <div
        className="home-service-cards"
        id="service-carousel-track"
        ref={track}
        onScroll={updateEdges}
      >
        {children}
      </div>
      <button
        type="button"
        className="service-carousel-arrow service-carousel-prev"
        aria-label="Ver serviços anteriores"
        aria-controls="service-carousel-track"
        disabled={edges.start}
        onClick={() => move(-1)}
      >
        <ArrowLeft size={20} aria-hidden="true" />
      </button>
      <button
        type="button"
        className="service-carousel-arrow service-carousel-next"
        aria-label="Ver próximos serviços"
        aria-controls="service-carousel-track"
        disabled={edges.end}
        onClick={() => move(1)}
      >
        <ArrowRight size={20} aria-hidden="true" />
      </button>
    </div>
  );
}
