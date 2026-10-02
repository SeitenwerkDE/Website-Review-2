import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/anesis/Contact";
import { Footer } from "@/components/anesis/Footer";
import { Gallery } from "@/components/anesis/Gallery";
import { Header } from "@/components/anesis/Header";
import { Hero } from "@/components/anesis/Hero";
import { Lunch } from "@/components/anesis/Lunch";
import { Menu } from "@/components/anesis/Menu";
import { Quality } from "@/components/anesis/Quality";
import { Reservation } from "@/components/anesis/Reservation";
import { Reviews } from "@/components/anesis/Reviews";
import { Services } from "@/components/anesis/Services";
import { Welcome } from "@/components/anesis/Welcome";
import { EMAIL, PHONE, RESERVATION_URL } from "@/data/menu";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "ANESIS – Griechisches Restaurant",
  servesCuisine: "Griechisch",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wilhelmstraße 4",
    postalCode: "29614",
    addressLocality: "Soltau",
    addressCountry: "DE",
  },
  telephone: "+4951911 8700",
  email: EMAIL,
  url: "https://anesis-griechisches-restaurant.eatbu.com/",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday"], opens: "11:30", closes: "14:30" },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:00",
      closes: "22:00",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ANESIS – Griechisches Restaurant in Soltau" },
      {
        name: "description",
        content:
          "ANESIS – Griechisches Restaurant in Soltau. Genießen Sie griechische Spezialitäten, herzliche Gastfreundschaft und mediterrane Küche in der Wilhelmstraße 4.",
      },
      { property: "og:title", content: "ANESIS – Griechisches Restaurant in Soltau" },
      {
        property: "og:description",
        content:
          "Griechische Tradition, Genuss und Gastfreundschaft in Soltau. Speisekarte, Mittagstisch und Reservierung im Restaurant Anesis.",
      },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(structuredData) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Menu />
        <Lunch />
        <Quality />
        <Services />
        <Reviews />
        <Gallery />
        <Reservation />
        <Contact />
      </main>
      <div className="pb-20 md:pb-0">
        <Footer />
      </div>

      {/* Mobiler Reservierungs-Button */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 md:hidden"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={RESERVATION_URL}
          className="btn-base btn-glass w-full justify-center"
          style={{ boxShadow: "0 12px 30px -16px color-mix(in oklab, var(--ink) 80%, transparent)" }}
          aria-label={`Tisch reservieren – ${PHONE}`}
        >
          Tisch reservieren <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
}
