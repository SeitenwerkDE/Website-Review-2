import logo from "@/assets/anesis-logo.jpg.asset.json";
import { EMAIL, PHONE, PHONE_HREF } from "@/data/menu";
import { Reveal } from "./Reveal";

const MAPS = "https://www.google.com/maps/dir/?api=1&destination=Wilhelmstra%C3%9Fe+4,+29614+Soltau";
const MAP_EMBED =
  "https://www.openstreetmap.org/export/embed.html?bbox=9.836%2C52.981%2C9.848%2C52.988&layer=mapnik&marker=52.9845%2C9.8419";

export function Contact() {
  return (
    <section id="kontakt" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal variant="up">
            <p className="eyebrow">Kontakt</p>
            <h2 className="display-md mt-6">Kommen Sie vorbei.</h2>

            <address className="mt-9 not-italic text-[1.02rem] leading-loose">
              <span className="font-display text-2xl">ANESIS</span>
              <br />
              Wilhelmstraße 4
              <br />
              29614 Soltau, Deutschland
            </address>

            <div className="mt-6 space-y-1 text-[0.98rem]">
              <p>
                <a href={PHONE_HREF} className="nav-link" style={{ textTransform: "none", letterSpacing: "0.02em", fontSize: "0.98rem" }}>
                  {PHONE}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="nav-link"
                  style={{ textTransform: "none", letterSpacing: "0.02em", fontSize: "0.98rem" }}
                >
                  {EMAIL}
                </a>
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={MAPS} target="_blank" rel="noreferrer" className="btn-base btn-solid">
                Route planen <span className="arrow">→</span>
              </a>
              <a href={PHONE_HREF} className="btn-base btn-outline-ink">
                Anrufen
              </a>
              <a href={`mailto:${EMAIL}`} className="btn-base btn-outline-ink">
                E-Mail schreiben
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal variant="clip">
            <iframe
              title="Standort Anesis, Wilhelmstraße 4, 29614 Soltau"
              src={MAP_EMBED}
              className="w-full"
              style={{ aspectRatio: "16 / 11", border: "1px solid var(--border)", filter: "grayscale(0.35) sepia(0.12)" }}
              loading="lazy"
            />
          </Reveal>
          <Reveal variant="fade" delay={200} className="mt-6 flex items-center gap-5">
            <img src={logo.url} alt="Logo des Restaurants Anesis" className="h-16 w-16 object-cover" loading="lazy" />
            <p className="max-w-sm text-[0.88rem] text-muted-foreground">
              Sommergarten · Wintergarten · Weinbar
            </p>

          </Reveal>
        </div>
      </div>
    </section>
  );
}
