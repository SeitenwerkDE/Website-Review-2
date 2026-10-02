import interior from "@/assets/interior.jpg";
import olives from "@/assets/olives.jpg";
import { Reveal, RevealLines } from "./Reveal";
import { useParallax } from "@/hooks/use-reveal";

export function Welcome() {
  const main = useParallax<HTMLDivElement>(0.06);
  const small = useParallax<HTMLDivElement>(-0.1);
  return (
    <section id="ueber-uns" className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6 lg:pr-6">
          <Reveal variant="clip" className="img-zoom">
            <div ref={main.ref} style={{ transform: `translate3d(0, ${main.offset}px, 0) scale(1.08)` }}>
            <img
              src={interior}
              alt="Warm beleuchteter Gastraum mit gedeckten Tischen und Olivenzweigen"
              className="w-full object-cover"
              style={{ aspectRatio: "4 / 5" }}
              width={1408}
              height={1760}
              loading="lazy"
            />
            </div>
          </Reveal>

          <Reveal variant="fade" delay={260} className="mt-6 hidden max-w-[62%] lg:block lg:-mt-24 lg:ml-[62%]">
            <div ref={small.ref} className="img-zoom" style={{ transform: `translate3d(0, ${small.offset}px, 0)`, boxShadow: "0 24px 60px -40px color-mix(in oklab, var(--ink) 60%, transparent)" }}>
              <img
                src={olives}
                alt="Oliven, Feta und Olivenöl auf einer Steinplatte"
                className="w-full object-cover"
                style={{ aspectRatio: "3 / 4" }}
                width={1008}
                height={1408}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:pt-10">
          <Reveal variant="up">
            <p className="eyebrow">Willkommen im Anesis</p>
            <span className="rule-gold mt-5" />
          </Reveal>

          <RevealLines
            className="display-lg mt-7"
            lines={["Ein Stück Griechenland", "mitten in Soltau."]}
          />

          <Reveal variant="up" delay={180} className="mt-8 max-w-xl text-[0.98rem] text-muted-foreground">
            <p>Traditionelle Rezepte und herzliche Gastfreundschaft.</p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
