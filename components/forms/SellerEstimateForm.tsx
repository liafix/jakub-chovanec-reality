"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

type ErrorMap = Partial<Record<string, string>>;

type LeadResponse =
  | {
      ok: true;
      leadId?: number;
      demo?: boolean;
      message?: string;
    }
  | {
      ok: false;
      error?: string;
    };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\s().-]{7,24}$/;
const attributionFields = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

const propertyTypeOptions = ["Byt", "Rodinný dom", "Pozemok", "Komerčný priestor", "Iné"];
const conditionOptions = [
  "Pôvodný stav",
  "Čiastočná rekonštrukcia",
  "Kompletná rekonštrukcia",
  "Novostavba",
  "Neviem posúdiť"
];
const plannedSellingDateOptions = ["Čo najskôr", "Do 3 mesiacov", "Do 6 mesiacov", "Tento rok", "Zatiaľ len zisťujem cenu"];

function readAttributionPayload() {
  if (typeof window === "undefined") return {};

  const searchParams = new URLSearchParams(window.location.search);
  const payload: Record<string, string> = {
    landing_page: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer
  };

  for (const field of attributionFields) {
    const value = searchParams.get(field);
    if (value) payload[field] = value;
  }

  return payload;
}

export function SellerEstimateForm() {
  const [errors, setErrors] = useState<ErrorMap>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const nextErrors: ErrorMap = {};
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();

    if (!String(data.get("name") || "").trim()) nextErrors.name = "Zadajte meno a priezvisko.";
    if (!phone && !email) nextErrors.contact = "Zadajte telefón alebo e-mail.";
    if (phone && !phoneRegex.test(phone)) nextErrors.phone = "Zadajte platné telefónne číslo.";
    if (email && !emailRegex.test(email)) nextErrors.email = "Zadajte platný e-mail.";
    if (!String(data.get("propertyType") || "")) nextErrors.propertyType = "Vyberte typ nehnuteľnosti.";
    if (!String(data.get("location") || "").trim()) nextErrors.location = "Zadajte lokalitu.";
    if (!data.get("consent")) nextErrors.consent = "Potvrďte súhlas so spracovaním údajov.";

    return nextErrors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setSubmitError("");
    setSubmitSuccess("");

    if (Object.keys(nextErrors).length > 0) return;

    const data = new FormData(form);
    const payload = {
      ...readAttributionPayload(),
      leadType: "seller_estimate",
      service: "odhad-ceny-nehnutelnosti",
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      propertyType: String(data.get("propertyType") || ""),
      location: String(data.get("location") || ""),
      size: String(data.get("size") || ""),
      condition: String(data.get("condition") || ""),
      plannedSellingDate: String(data.get("plannedSellingDate") || ""),
      message: String(data.get("message") || ""),
      consent: data.get("consent") === "on"
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as LeadResponse;

      if (!response.ok || !result.ok) {
        throw new Error(result.ok ? "Formulár sa nepodarilo odoslať." : result.error || "Formulár sa nepodarilo odoslať.");
      }

      form.reset();
      setSubmitSuccess(
        result.demo
          ? "Demo režim: formulár prešiel validáciou, ale lead nebol uložený do produkčného úložiska."
          : "Ďakujem, údaje mám. Ozvem sa vám s ďalším krokom k odhadu ceny nehnuteľnosti."
      );
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Formulár sa nepodarilo odoslať.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 rounded-lg border border-black/10 bg-white/88 p-5 shadow-[0_28px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-6">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#D99A2B]">Odhad ceny zdarma</p>
        <h3 className="mt-2 text-2xl font-black">Pošlite základné údaje o nehnuteľnosti</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field id="seller-name" label="Meno a priezvisko" error={errors.name}>
          <input className="field-input" id="seller-name" name="name" autoComplete="name" />
        </Field>
        <Field id="seller-phone" label="Telefón" error={errors.phone || errors.contact}>
          <input className="field-input" id="seller-phone" name="phone" inputMode="tel" autoComplete="tel" />
        </Field>
      </div>

      <Field id="seller-email" label="E-mail" error={errors.email || (!errors.phone ? errors.contact : undefined)}>
        <input className="field-input" id="seller-email" name="email" type="email" autoComplete="email" />
      </Field>

      <div className="grid gap-4 md:grid-cols-2">
        <Field id="seller-property-type" label="Typ nehnuteľnosti" error={errors.propertyType}>
          <select className="field-input" id="seller-property-type" name="propertyType" defaultValue="">
            <option value="" disabled>
              Vyberte typ
            </option>
            {propertyTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field id="seller-location" label="Lokalita" error={errors.location}>
          <input className="field-input" id="seller-location" name="location" placeholder="Mesto alebo časť mesta" />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field id="seller-size" label="Výmera / úžitková plocha">
          <input className="field-input" id="seller-size" name="size" placeholder="Napr. 74 m2" />
        </Field>
        <Field id="seller-condition" label="Stav nehnuteľnosti">
          <select className="field-input" id="seller-condition" name="condition" defaultValue="">
            <option value="" disabled>
              Vyberte stav
            </option>
            {conditionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="seller-planned-selling-date" label="Kedy plánujete predaj?">
        <select className="field-input" id="seller-planned-selling-date" name="plannedSellingDate" defaultValue="">
          <option value="" disabled>
            Vyberte horizont
          </option>
          {plannedSellingDateOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field id="seller-message" label="Čo by mal Jakub vedieť?">
        <textarea className="field-input min-h-28 resize-y" id="seller-message" name="message" />
      </Field>

      <label className="flex gap-3 rounded-md border border-black/10 bg-white/70 p-4 text-sm leading-6">
        <input className="mt-1 size-5 accent-[#e44f22]" type="checkbox" name="consent" />
        <span>Súhlasím so spracovaním údajov za účelom spätného kontaktovania.</span>
      </label>
      {errors.consent ? <p className="-mt-3 text-sm font-bold text-[#b42318]">{errors.consent}</p> : null}

      {submitError ? <FormAlert tone="error" message={submitError} /> : null}
      {submitSuccess ? <FormAlert tone="success" message={submitSuccess} /> : null}

      <button className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="animate-spin" size={18} aria-hidden="true" />
            Odosielam údaje
          </span>
        ) : (
          "Zisti cenu nehnuteľnosti zdarma"
        )}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-black">
        {label}
      </label>
      {children}
      {error ? <p className="mt-2 text-sm font-bold text-[#b42318]">{error}</p> : null}
    </div>
  );
}

function FormAlert({ tone, message }: { tone: "error" | "success"; message: string }) {
  const isSuccess = tone === "success";
  const Icon = isSuccess ? CheckCircle2 : AlertCircle;

  return (
    <p
      className={`flex items-start gap-2 rounded-md border p-4 text-sm font-bold leading-6 ${
        isSuccess ? "border-[#257a57]/20 bg-[#effaf4] text-[#1f6b4d]" : "border-[#b42318]/20 bg-[#fff4f2] text-[#b42318]"
      }`}
      role={isSuccess ? "status" : "alert"}
    >
      <Icon className="mt-0.5 shrink-0" size={18} aria-hidden="true" />
      <span>{message}</span>
    </p>
  );
}
