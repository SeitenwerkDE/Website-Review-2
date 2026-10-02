import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { PHONE, PHONE_HREF } from "@/data/menu";

const schema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an.").max(100),
  phone: z.string().trim().min(5, "Bitte geben Sie eine Telefonnummer an.").max(30),
  email: z.string().trim().email("Bitte prüfen Sie die E-Mail-Adresse.").max(255).optional().or(z.literal("")),
  reservation_date: z.string().min(1, "Bitte wählen Sie ein Datum."),
  reservation_time: z.string().regex(/^\d{2}:\d{2}$/, "Bitte wählen Sie eine Uhrzeit."),
  guests: z.coerce.number().int().min(1).max(30),
  message: z.string().trim().max(1000).optional(),
});

const field =
  "w-full bg-transparent border-0 border-b py-3 text-[1rem] outline-none transition-colors focus-visible:border-[var(--gold)]";
const fieldStyle = { borderColor: "color-mix(in oklab, var(--cream) 28%, transparent)", color: "var(--cream)", colorScheme: "dark" as const };
const label = "block text-[0.66rem] uppercase";
const labelStyle = { letterSpacing: "0.2em", color: "color-mix(in oklab, var(--cream) 60%, transparent)" };

export function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const today = new Date().toISOString().slice(0, 10);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Bitte prüfen Sie Ihre Angaben.");
      return;
    }
    setError("");
    setStatus("sending");
    const d = parsed.data;
    const { error: dbError } = await supabase.from("reservations").insert({
      ...d,
      email: d.email || null,
      message: d.message || null,
    });
    if (dbError) {
      setStatus("error");
      setError(`Das hat leider nicht geklappt. Bitte rufen Sie uns an: ${PHONE}`);
      return;
    }
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="py-6" role="status">
        <p className="font-display text-3xl">Vielen Dank.</p>
        <p className="mt-4 max-w-md text-[0.98rem]" style={{ color: "color-mix(in oklab, var(--cream) 72%, transparent)" }}>
          Ihre Reservierungsanfrage ist bei uns eingegangen. Bei Rückfragen melden wir uns telefonisch bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-7 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="r-name" className={label} style={labelStyle}>Name</label>
        <input id="r-name" name="name" required autoComplete="name" className={field} style={fieldStyle} />
      </div>
      <div>
        <label htmlFor="r-phone" className={label} style={labelStyle}>Telefon</label>
        <input id="r-phone" name="phone" type="tel" required autoComplete="tel" className={field} style={fieldStyle} />
      </div>
      <div>
        <label htmlFor="r-email" className={label} style={labelStyle}>E-Mail (optional)</label>
        <input id="r-email" name="email" type="email" autoComplete="email" className={field} style={fieldStyle} />
      </div>
      <div>
        <label htmlFor="r-date" className={label} style={labelStyle}>Datum</label>
        <input id="r-date" name="reservation_date" type="date" min={today} required className={field} style={fieldStyle} />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="r-time" className={label} style={labelStyle}>Uhrzeit</label>
          <input id="r-time" name="reservation_time" type="time" step={900} required className={field} style={fieldStyle} />
        </div>
        <div>
          <label htmlFor="r-guests" className={label} style={labelStyle}>Personen</label>
          <input id="r-guests" name="guests" type="number" min={1} max={30} defaultValue={2} required className={field} style={fieldStyle} />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="r-msg" className={label} style={labelStyle}>Anmerkung (optional)</label>
        <textarea id="r-msg" name="message" rows={2} maxLength={1000} className={`${field} resize-none`} style={fieldStyle} />
      </div>
      {error && (
        <p className="sm:col-span-2 text-[0.9rem]" role="alert" style={{ color: "var(--gold)" }}>{error}</p>
      )}
      <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === "sending"} className="btn-base btn-gold justify-center disabled:opacity-60">
          {status === "sending" ? "Wird gesendet …" : "Reservierung anfragen"} <span className="arrow">→</span>
        </button>
        <a href={PHONE_HREF} className="text-[0.85rem]" style={{ color: "color-mix(in oklab, var(--cream) 72%, transparent)" }}>
          Oder telefonisch: {PHONE}
        </a>
      </div>
    </form>
  );
}
