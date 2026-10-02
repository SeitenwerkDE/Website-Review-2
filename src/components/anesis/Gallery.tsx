import { useCallback, useEffect, useRef, useState } from "react";
import mezze from "@/assets/mezze.jpg";
import souvlaki from "@/assets/lunch.jpg";
import interior from "@/assets/interior.jpg";
import olives from "@/assets/olives.jpg";
import quality from "@/assets/quality.jpg";
import wine from "@/assets/wine.jpg";
import { Reveal } from "./Reveal";

type Shot = { src: string; alt: string; ratio: string; span: string };

const shots: Shot[] = [
  { src: interior, alt: "Gastraum am Abend mit Kerzenlicht", ratio: "4 / 5", span: "md:col-span-5 md:row-span-2" },
  { src: mezze, alt: "Griechische Vorspeisen auf dem Tisch", ratio: "3 / 2", span: "md:col-span-7" },
  { src: olives, alt: "Oliven, Feta und Olivenöl", ratio: "3 / 4", span: "md:col-span-3" },
  { src: wine, alt: "Zwei Gläser griechischer Rotwein an der Weinbar", ratio: "4 / 3", span: "md:col-span-4" },
  { src: quality, alt: "Lammkoteletts und Fisch vom Grill", ratio: "16 / 10", span: "md:col-span-7" },
  { src: souvlaki, alt: "Gyros und Bifteki mit Beilagen", ratio: "3 / 2", span: "md:col-span-5" },
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % shots.length)), []);
  const prev = useCallback(() => setIndex((i) => (i === null ? i : (i - 1 + shots.length) % shots.length)), []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, next, prev]);

  return (
    <section id="galerie" className="py-24 md:py-32" style={{ background: "color-mix(in oklab, var(--sand) 28%, var(--cream))" }}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal variant="up" className="max-w-xl">
          <p className="eyebrow">Galerie</p>
          <h2 className="display-md mt-6">Abende im Anesis.</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {shots.map((shot, i) => (
            <Reveal
              key={shot.alt}
              variant="clip"
              delay={(i % 3) * 120}
              className={`${shot.span}`}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${shot.alt} vergrößern`}
                className="img-zoom group relative block w-full"
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full object-cover"
                  style={{ aspectRatio: shot.ratio }}
                  decoding="async"
                />
                <span
                  className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: "color-mix(in oklab, var(--ink) 32%, transparent)" }}
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full text-lg"
                    style={{ border: "1px solid color-mix(in oklab, var(--cream) 70%, transparent)", color: "var(--cream)" }}
                  >
                    +
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {index !== null ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          style={{ background: "color-mix(in oklab, var(--ink) 95%, transparent)" }}
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0]!.clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0]!.clientX - touchX.current;
            if (dx < -50) next();
            if (dx > 50) prev();
            touchX.current = null;
          }}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Schließen"
            onClick={close}
            className="absolute right-5 top-5 p-2 text-3xl leading-none"
            style={{ color: "var(--cream)" }}
          >
            ×
          </button>
          <button
            type="button"
            aria-label="Vorheriges Bild"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 p-4 text-2xl md:left-8"
            style={{ color: "color-mix(in oklab, var(--cream) 75%, transparent)" }}
          >
            ←
          </button>
          <img
            key={index}
            src={shots[index]!.src}
            alt={shots[index]!.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[82vh] max-w-full object-contain"
            style={{ animation: "anesis-fade-up 600ms var(--ease-editorial) both" }}
          />
          <button
            type="button"
            aria-label="Nächstes Bild"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 p-4 text-2xl md:right-8"
            style={{ color: "color-mix(in oklab, var(--cream) 75%, transparent)" }}
          >
            →
          </button>
        </div>
      ) : null}
    </section>
  );
}
