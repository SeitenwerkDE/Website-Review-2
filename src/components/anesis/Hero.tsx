import { useEffect, useState } from "react";
import poster from "@/assets/anesis-poster.jpg.asset.json";
import { RESERVATION_URL } from "@/data/menu";

export function Hero() {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolledPast(y > 80);
      if (!reduce) setOffset(y * 0.12);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex flex-col overflow-hidden md:min-h-[100svh]"
      style={{ background: "var(--ink)" }}
    >
      {/* Bild: mobil oben, ab Tablet rechte Hälfte */}
      <div className="relative h-[46svh] overflow-hidden md:absolute md:inset-y-0 md:left-auto md:right-0 md:h-auto md:w-[46%]">
        <div
          className="h-full w-full"
          style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform" }}
        >
          <img
            src={poster.url}
            alt="Anesis – Griechisches Restaurant: Weinflasche und Weinglas vor griechischem Abendhimmel"
            className="h-full w-full object-cover object-top md:object-[85%_center]"
            fetchPriority="high"
          />
        </div>
        {/* Weiche Überblendung in das Dunkelblau */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 52%, var(--ink) 100%)" }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: "linear-gradient(to right, var(--ink), transparent 18%)" }}
        />
      </div>

      {/* Text: mobil unter dem Bild, ab Tablet linke Hälfte */}
      <div className="mx-auto flex w-full max-w-[1440px] items-start px-5 pb-28 pt-10 md:flex-1 md:items-center md:px-10 md:pb-28 md:pt-40 lg:w-[54%]">
        <div>
          <p className="eyebrow-light hero-in" style={{ animationDelay: "250ms" }}>
            Wilhelmstraße 4 · Soltau
          </p>

          <h1
            className="display-xl hero-in mt-5 sr-only md:not-sr-only"
            style={{ color: "var(--cream)", animationDelay: "450ms", letterSpacing: "0.02em" }}
          >
            Anesis
          </h1>

          <p
            className="hero-in mt-4 hidden text-[0.72rem] font-medium uppercase md:block"
            style={{ color: "color-mix(in oklab, var(--cream) 82%, transparent)", letterSpacing: "0.3em", animationDelay: "700ms" }}
          >
            Griechisches Restaurant
          </p>

          <div className="hero-in mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "1250ms" }}>
            <a href={RESERVATION_URL} className="btn-base btn-gold justify-center sm:justify-start">
              Tisch reservieren <span className="arrow">→</span>
            </a>
            <a
              href="#speisekarte"
              className="nav-link self-center sm:ml-6"
              style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}
            >
              Speisekarte ansehen
            </a>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:left-[27%]"
        style={{
          opacity: scrolledPast ? 0 : 1,
          transition: "opacity 700ms var(--ease-soft)",
        }}
      >
        <span
          className="scroll-line block h-10 w-px"
          style={{ background: "color-mix(in oklab, var(--cream) 55%, transparent)" }}
        />
        <span
          className="text-[0.6rem] uppercase"
          style={{ letterSpacing: "0.32em", color: "color-mix(in oklab, var(--cream) 65%, transparent)" }}
        >
          Entdecken
        </span>
      </div>
    </section>
  );
}
