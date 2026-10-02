import { useEffect, useState } from "react";
import { RESERVATION_URL } from "@/data/menu";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Speisekarte", href: "#speisekarte" },
  { label: "Mittagstisch", href: "#mittagstisch" },
  { label: "Galerie", href: "#galerie" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50"
        style={{
          backgroundColor: scrolled ? "color-mix(in oklab, var(--cream) 88%, transparent)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 0 color-mix(in oklab, var(--ink) 10%, transparent)" : "none",
          transition: "background-color 700ms var(--ease-soft), box-shadow 700ms var(--ease-soft)",
        }}
      >
        <div
          className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10"
          style={{
            height: scrolled ? 68 : 96,
            transition: "height 700ms var(--ease-soft)",
            color: scrolled ? "var(--ink)" : "var(--cream)",
          }}
        >
          <a
            href="#home"
            className="font-display leading-none"
            style={{
              fontSize: scrolled ? "1.45rem" : "1.75rem",
              letterSpacing: "0.14em",
              opacity: scrolled ? 1 : 0,
              pointerEvents: scrolled ? "auto" : "none",
              transition: "font-size 700ms var(--ease-soft), opacity 400ms var(--ease-soft)",
            }}
            aria-hidden={!scrolled}
            tabIndex={scrolled ? 0 : -1}
          >
            ANESIS
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={RESERVATION_URL}
              className={`btn-base hidden md:inline-flex ${scrolled ? "btn-outline-ink" : "btn-gold"}`}
              style={{ paddingBlock: "0.7rem" }}
            >
              Tisch reservieren <span className="arrow">→</span>
            </a>
            <button
              type="button"
              aria-label="Menü öffnen"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen-Navigation */}
      <div
        className="fixed inset-0 z-[60] lg:hidden"
        style={{
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transition: "opacity 600ms var(--ease-soft)",
        }}
        aria-hidden={!open}
      >
        <div className="absolute inset-0" style={{ background: "var(--ink)" }} />
        <div className="relative flex h-full flex-col px-6 py-7">
          <div className="flex items-center justify-between" style={{ color: "var(--cream)" }}>
            <span className="font-display text-2xl" style={{ letterSpacing: "0.14em" }}>
              ANESIS
            </span>
            <button type="button" aria-label="Menü schließen" onClick={() => setOpen(false)} className="p-2 text-2xl leading-none">
              ×
            </button>
          </div>

          <nav className="mt-16 flex flex-col gap-5">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-[2.1rem] leading-tight"
                style={{
                  color: "var(--cream)",
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(14px)",
                  transition: `opacity 700ms var(--ease-editorial) ${140 + i * 80}ms, transform 700ms var(--ease-editorial) ${140 + i * 80}ms`,
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto hairline-light pt-6">
            <a
              href={RESERVATION_URL}
              onClick={() => setOpen(false)}
              className="btn-base btn-gold w-full justify-center"
            >
              Tisch reservieren <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
