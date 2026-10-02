import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type Variant = "up" | "fade" | "clip" | "clip-side" | "scale" | "left";

const variantClass: Record<Variant, string> = {
  up: "reveal-up",
  fade: "reveal-fade",
  clip: "reveal-clip",
  "clip-side": "reveal-clip-side",
  scale: "reveal-scale",
  left: "reveal-left",
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "figure" | "span" | "p";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={`${variantClass[variant]} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Zeilenweiser Text-Reveal für wichtige Headlines. */
export function RevealLines({
  lines,
  className = "",
  delayStep = 140,
}: {
  lines: string[];
  className?: string;
  delayStep?: number;
}) {
  const { ref, visible } = useReveal<HTMLHeadingElement>();
  return (
    <h2 ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <span
            className="block will-change-transform"
            style={{
              transform: visible ? "none" : "translateY(105%)",
              opacity: visible ? 1 : 0,
              transition: `transform 1100ms var(--ease-editorial) ${i * delayStep}ms, opacity 900ms var(--ease-editorial) ${i * delayStep}ms`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </h2>
  );
}
