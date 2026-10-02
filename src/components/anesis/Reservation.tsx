import { openingHours } from "@/data/menu";
import { ReservationForm } from "./ReservationForm";
import { Reveal, RevealLines } from "./Reveal";

export function Reservation() {
  return (
    <section id="reservierung" style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal variant="up">
            <p className="eyebrow-light">Reservierung</p>
          </Reveal>
          <RevealLines className="display-lg mt-7" lines={["Ihr Tisch", "wartet auf Sie."]} />
          <Reveal variant="up" delay={200}>
            <div className="mt-10 max-w-xl">
              <ReservationForm />
            </div>
          </Reveal>

        </div>

        <div className="lg:col-span-5">
          <Reveal variant="up" delay={120}>
            <p className="eyebrow-light">Öffnungszeiten</p>
            <ul className="mt-8">
              {openingHours.map((entry) => {
                const closed = entry.times[0] === "Geschlossen";
                return (
                  <li
                    key={entry.day}
                    className="hairline-light flex items-baseline justify-between gap-6 py-4"
                    style={{ opacity: closed ? 0.45 : 1 }}
                  >
                    <span className="font-display text-xl">{entry.day}</span>
                    <span className="text-right text-[0.85rem] leading-relaxed" style={{ letterSpacing: "0.04em" }}>
                      {entry.times.map((t) => (
                        <span key={t} className="block">
                          {t}
                        </span>
                      ))}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
