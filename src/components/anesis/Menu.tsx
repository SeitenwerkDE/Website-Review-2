import { useState } from "react";
import { MENU_PDF } from "@/data/menu";
import { Reveal, RevealLines } from "./Reveal";

const PAGES = Array.from({ length: 16 }, (_, k) => `/menu/seite-${String(k + 1).padStart(2, "0")}.jpg`);

export function Menu() {
  const [page, setPage] = useState(0);
  const go = (d: number) => setPage((p) => Math.min(PAGES.length - 1, Math.max(0, p + d)));

  return (
    <section id="speisekarte" className="scroll-mt-16 bg-ink py-24 text-cream md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal variant="fade"><p className="eyebrow-light">Unsere Speisekarte</p></Reveal>
            <RevealLines className="display-lg mt-6 max-w-lg" lines={["Unsere Karte –", "im Original."]} />
          </div>
          <Reveal variant="up" delay={140} className="lg:col-span-5">
            <p className="max-w-md text-[0.98rem] text-cream/80">
              Blättern Sie durch unsere vollständige Speisekarte oder laden Sie sie als PDF herunter.
            </p>
            <a href={MENU_PDF} target="_blank" rel="noreferrer" className="btn-base btn-glass mt-6">
              Speisekarte als PDF <span className="arrow">→</span>
            </a>
          </Reveal>
        </div>

        <Reveal variant="scale" className="mx-auto mt-14 max-w-[640px]">
          <a href={PAGES[page]} target="_blank" rel="noreferrer" className="block bg-card">
            <img
              key={page}
              src={PAGES[page]}
              alt={`Speisekarte Seite ${page + 1} von ${PAGES.length}`}
              width={910}
              height={1287}
              className="w-full"
              style={{ animation: "anesis-fade-up 600ms var(--ease-editorial) both" }}
              loading="lazy"
            />
          </a>
          <div className="mt-6 flex items-center justify-between">
            <button type="button" onClick={() => go(-1)} disabled={page === 0} className="btn-base btn-gold px-3 disabled:opacity-30 sm:px-6">
              ← Zurück
            </button>
            <span className="font-display text-lg">
              {page + 1} / {PAGES.length}
            </span>
            <button type="button" onClick={() => go(1)} disabled={page === PAGES.length - 1} className="btn-base btn-gold px-3 disabled:opacity-30 sm:px-6">
              Weiter <span className="arrow">→</span>
            </button>
          </div>
        </Reveal>

        <div className="-mx-5 mt-10 flex gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:justify-center md:px-0">
          {PAGES.map((src, k) => (
            <button
              key={src}
              type="button"
              aria-label={`Seite ${k + 1}`}
              onClick={() => setPage(k)}
              className="w-14 shrink-0"
              style={{
                outline: k === page ? "1px solid var(--cream)" : "none",
                outlineOffset: 3,
                opacity: k === page ? 1 : 0.55,
                transition: "opacity 400ms var(--ease-soft)",
              }}
            >
              <img src={src} alt="" width={56} height={79} loading="lazy" className="w-full" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
