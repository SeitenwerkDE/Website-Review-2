import lunchImg from "@/assets/lunch.jpg";
import { LUNCH_PDF, lunchDishes } from "@/data/menu";
import { Reveal } from "./Reveal";
import { useParallax } from "@/hooks/use-reveal";

export function Lunch() {
  const px = useParallax<HTMLDivElement>(0.07);
  return (
    <section id="mittagstisch" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-20">
        <Reveal variant="clip-side" className="img-zoom lg:col-span-5">
          <div ref={px.ref} style={{ transform: `translate3d(0, ${px.offset}px, 0) scale(1.1)` }}>
          <img
            src={lunchImg}
            alt="Gyros mit Tzatziki, Pommes und Salat, dahinter Bifteki"
            className="w-full object-cover"
            style={{ aspectRatio: "3 / 2" }}
            width={600}
            height={400}
            loading="lazy"
          />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal variant="up" delay={200}>
            <p className="eyebrow">Mittagstisch</p>
            <h2 className="display-md mt-6">Montag &amp; Mittwoch–Freitag, 11:30 – 14:30</h2>
          </Reveal>


          <Reveal variant="up" delay={340} className="mt-9">
            <ul>
              {lunchDishes.map((dish) => (
                <li key={dish.name} className="hairline py-5">
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="font-display text-[1.4rem]">{dish.name}</h3>
                    <span className="whitespace-nowrap font-display text-[1.2rem]">{dish.price} €</span>
                  </div>
                  <p className="mt-1 max-w-lg text-[0.9rem] text-muted-foreground">{dish.desc}</p>
                </li>
              ))}
            </ul>
            <a href={LUNCH_PDF} target="_blank" rel="noreferrer" className="btn-base btn-outline-ink mt-8">
              Mittagskarte als PDF <span className="arrow">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
