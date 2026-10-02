import qualityImg from "@/assets/quality.jpg";
import { useParallax } from "@/hooks/use-reveal";
import { Reveal } from "./Reveal";

export function Quality() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.09);

  return (
    <section className="relative isolate overflow-hidden" style={{ background: "var(--ink)" }}>
      <div ref={ref} className="absolute inset-0 -z-10">
        <img
          src={qualityImg}
          alt="Gegrillte Lammkoteletts und Fisch mit mediterranem Gemüse"
          className="h-[125%] w-full object-cover"
          style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform", marginTop: "-12%" }}
          width={1920}
          height={1200}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, color-mix(in oklab, var(--ink) 88%, transparent) 0%, color-mix(in oklab, var(--ink) 55%, transparent) 55%, color-mix(in oklab, var(--ink) 35%, transparent) 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-32 md:px-10 md:py-48">
        <Reveal variant="up" className="max-w-xl">
          <p className="eyebrow-light">Qualität</p>
          <h2 className="display-lg mt-6" style={{ color: "var(--cream)" }}>
            Beste Qualität, die man schmeckt.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
