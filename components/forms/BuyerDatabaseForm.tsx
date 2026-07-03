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
const financingOptions = ["Hotovosť", "Hypotéka schválená", "Hypotéka v riešení", "Potrebujem poradiť"];
const timeframeOptions = ["Ihneď", "Do 3 mesiacov", "Do 6 mesiacov", "Tento rok", "Zatiaľ len sledujem trh"];

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

export function BuyerDatabaseForm() {
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
    if (!String(data.get("targetLocation") || "").trim()) nextErrors.targetLocation = "Zadajte hľadanú lokalitu.";
    if (!String(data.get("propertyType") || "")) nextErrors.propertyType = "Vyberte typ nehnuteľnosti.";
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
      leadType: "buyer_database",
      service: "databaza-kupujucich",
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      targetLocation: String(data.get("targetLocation") || ""),
      budget: String(data.get("budget") || ""),
      propertyType: String(data.get("propertyType") || ""),
      financingMethod: String(data.get("financingMethod") || ""),
      timeframe: String(data.get("timeframe") || ""),
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
          : "Ďakujem, požiadavku mám uloženú. Ak sa objaví vhodná nehnuteľnosť, ozvem sa vám."
      );
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Formulár sa nepodarilo odoslať.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.075] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-6">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#F6C453]">Databáza kupujúcich</p>
        <h3 className="mt-2 text-2xl font-black text-white">Pridať sa do databázy kupujúcich</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field id="buyer-name" label="Meno a priezvisko" error={errors.name}>
          <input className="field-input" id="buyer-name" name="name" autoComplete="name" />
        </Field>
        <Field id="buyer-phone" label="Telefón" error={errors.phone || errors.contact}>
          <input className="field-input" id="buyer-phone" name="phone" inputMode="tel" autoComplete="tel" />
        </Field>
      </div>

      <Field id="buyer-email" label="E-mail" error={errors.email || (!errors.phone ? errors.contact : undefined)}>
        <input className="field-input" id="buyer-email" name="email" type="email" autoComplete="email" />
      </Field>

      <div className="grid gap-4 md:grid-cols-2">
        <Field id="buyer-target-location" label="Hľadaná lokalita" error={errors.targetLocation}>
          <input className="field-input" id="buyer-target-location" name="targetLocation" placeholder="Mesto, štvrť alebo okolie" />
        </Field>
        <Field id="buyer-budget" label="Rozpočet">
          <input className="field-input" id="buyer-budget" name="budget" placeholder="Napr. do 230 000 EUR" />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field id="buyer-property-type" label="Typ nehnuteľnosti" error={errors.propertyType}>
          <select className="field-input" id="buyer-property-type" name="propertyType" defaultValue="">
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
        <Field id="buyer-financing-method" label="Financovanie">
          <select className="field-input" id="buyer-financing-method" name="financingMethod" defaultValue="">
            <option value="" disabled>
              Vyberte financovanie
            </option>
            {financingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="buyer-timeframe" label="Kedy chcete kúpiť?">
        <select className="field-input" id="buyer-timeframe" name="timeframe" defaultValue="">
          <option value="" disabled>
            Vyberte horizont
          </option>
          {timeframeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field id="buyer-message" label="Čo presne hľadáte?">
        <textarea className="field-input min-h-28 resize-y" id="buyer-message" name="message" />
      </Field>

      <label className="flex gap-3 rounded-md border border-white/10 bg-white/[0.065] p-4 text-sm leading-6 text-white/72">
        <input className="mt-1 size-5 accent-[#f6c453]" type="checkbox" name="consent" />
        <span>Súhlasím so spracovaním údajov za účelom spätného kontaktovania.</span>
      </label>
      {errors.consent ? <p className="-mt-3 text-sm font-bold text-[#ffb4a6]">{errors.consent}</p> : null}

      {submitError ? <FormAlert tone="error" message={submitError} /> : null}
      {submitSuccess ? <FormAlert tone="success" message={submitSuccess} /> : null}

      <button className="btn-primary hero-primary-cta--light w-full disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="animate-spin" size={18} aria-hidden="true" />
            Odosielam požiadavku
          </span>
        ) : (
          "Pridať sa do databázy kupujúcich"
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
      <label htmlFor={id} className="mb-2 block text-sm font-black text-white">
        {label}
      </label>
      {children}
      {error ? <p className="mt-2 text-sm font-bold text-[#ffb4a6]">{error}</p> : null}
    </div>
  );
}

function FormAlert({ tone, message }: { tone: "error" | "success"; message: string }) {
  const isSuccess = tone === "success";
  const Icon = isSuccess ? CheckCircle2 : AlertCircle;

  return (
    <p
      className={`flex items-start gap-2 rounded-md border p-4 text-sm font-bold leading-6 ${
        isSuccess ? "border-[#6fe1a4]/24 bg-[#123324] text-[#bff4d4]" : "border-[#ffb4a6]/24 bg-[#331410] text-[#ffcec5]"
      }`}
      role={isSuccess ? "status" : "alert"}
    >
      <Icon className="mt-0.5 shrink-0" size={18} aria-hidden="true" />
      <span>{message}</span>
    </p>
  );
}
