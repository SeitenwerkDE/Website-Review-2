import { services } from "@/data/menu";
import { Accessibility, CarFront, ChefHat, Dog, HandPlatter, Heart, PartyPopper, ShoppingBag, Sun, Wifi } from "lucide-react";
import { Reveal } from "./Reveal";

const icons = [Accessibility, ChefHat, Sun, CarFront, PartyPopper, HandPlatter, ShoppingBag, Heart, Wifi, Dog];

export function Services() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal variant="up" className="lg:col-span-4">
            <p className="eyebrow">Services</p>
            <h2 className="display-md mt-6 max-w-xs">Gut zu wissen.</h2>

          </Reveal>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-2 gap-2 sm:gap-3">
              {services.map((service, i) => (
                <Reveal
                  as="li"
                  key={service}
                  variant="left"
                  delay={i * 70}
                  className="flex min-h-32 flex-col justify-between border border-border bg-card p-4 sm:min-h-36 sm:p-5"
                >
                  {(() => {
                    const Icon = icons[i];
                    return Icon ? <Icon size={25} strokeWidth={1.5} className="text-pomegranate" aria-hidden="true" /> : null;
                  })()}
                  <span className="text-sm leading-snug text-foreground sm:text-base">{service}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
