import { EMAIL, MENU_PDF, PHONE, PHONE_HREF, RESERVATION_URL } from "@/data/menu";

export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "color-mix(in oklab, var(--cream) 82%, transparent)" }}>
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:grid-cols-4 md:px-10">
        <div className="md:col-span-1">
          <p className="font-display text-3xl" style={{ color: "var(--cream)", letterSpacing: "0.12em" }}>
            ANESIS
          </p>
          <p className="mt-3 text-[0.72rem] uppercase" style={{ letterSpacing: "0.26em" }}>
            Griechisches Restaurant
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-[0.9rem]">
          <span className="eyebrow-light">Navigation</span>
          <a href="#speisekarte" className="w-fit nav-link" style={{ textTransform: "none", letterSpacing: "0.02em", fontSize: "0.9rem" }}>
            Speisekarte
          </a>
          <a
            href={RESERVATION_URL}
            className="w-fit nav-link"
            style={{ textTransform: "none", letterSpacing: "0.02em", fontSize: "0.9rem" }}
          >
            Reservierung
          </a>
          <a href="#kontakt" className="w-fit nav-link" style={{ textTransform: "none", letterSpacing: "0.02em", fontSize: "0.9rem" }}>
            Kontakt
          </a>
          <a href={MENU_PDF} target="_blank" rel="noreferrer" className="w-fit nav-link" style={{ textTransform: "none", letterSpacing: "0.02em", fontSize: "0.9rem" }}>
            Speisekarte (PDF)
          </a>
        </nav>

        <div className="text-[0.9rem] leading-relaxed">
          <span className="eyebrow-light">Adresse</span>
          <p className="mt-3">
            Wilhelmstraße 4
            <br />
            29614 Soltau
          </p>
        </div>

        <div className="text-[0.9rem] leading-relaxed">
          <span className="eyebrow-light">Kontakt</span>
          <p className="mt-3">
            <a href={PHONE_HREF}>{PHONE}</a>
            <br />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </div>
      </div>

      <div className="hairline-light">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-6 text-[0.72rem] md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Anesis Griechisches Restaurant · Inhaber: Savas Karabulut</p>
          <p>Wilhelmstraße 4, 29614 Soltau · {PHONE}</p>
        </div>
      </div>
    </footer>
  );
}
