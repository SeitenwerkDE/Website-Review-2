import { reviews } from "@/data/reviews";
import { Reveal } from "./Reveal";

function ReviewGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="flex shrink-0 gap-4 pr-4" aria-hidden={duplicate || undefined}>
      {reviews.map((review, i) => (
        <article key={`${review.name}-${i}`} className="flex h-72 w-[280px] shrink-0 flex-col border border-border bg-card p-5 sm:w-[330px]">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-pomegranate" aria-label={`${review.rating} von 5 Sternen`}>
              {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
            </span>
            <span className="text-[0.7rem] text-muted-foreground">Google</span>
          </div>
          {review.text && <p className="mt-4 max-h-52 overflow-y-auto text-sm leading-relaxed text-foreground">„{review.text}“</p>}
          <p className="mt-auto pt-5 font-display text-lg text-foreground">{review.name}</p>
        </article>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal variant="up">
          <p className="eyebrow">Google-Rezensionen</p>
          <h2 id="reviews-title" className="display-md mt-4">Das sagen unsere Gäste.</h2>
        </Reveal>
      </div>
      <div className="reviews-viewport mt-10 overflow-hidden md:mt-12" aria-label="Google-Rezensionen, nach rechts laufend">
        <div className="reviews-track flex w-max">
          <ReviewGroup />
          <ReviewGroup duplicate />
        </div>
      </div>
    </section>
  );
}