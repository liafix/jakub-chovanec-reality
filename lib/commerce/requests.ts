import type { NextRequest } from "next/server";
import {
  ATTRIBUTION_FIELDS,
  isPaymentType,
  isServiceSlug
} from "@/lib/contracts";
import type { AttributionPayload, PaymentType, ServiceSlug } from "@/lib/contracts";
import { getService } from "@/lib/content/services";

export type LeadInput = AttributionPayload & {
  leadType?: "seller_estimate" | "buyer_database" | "generic";
  name: string;
  phone: string;
  email?: string;
  service: ServiceSlug;
  location: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  photosNote?: string;
  consent: boolean;
};

export type CheckoutInput = LeadInput & {
  paymentType: PaymentType;
};

type JsonRecord = Record<string, unknown>;

export class InputValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InputValidationError";
  }
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\s().-]{7,24}$/;

function stringValue(value: unknown, maxLength: number) {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed.slice(0, maxLength);
}

function booleanValue(value: unknown) {
  return value === true || value === "true" || value === "on" || value === "1";
}

function assertValidService(service: string | undefined): asserts service is ServiceSlug {
  if (!service || !isServiceSlug(service) || !getService(service)) {
    throw new InputValidationError("Vyberte platný realitný zámer.");
  }
}

function contactValues(body: JsonRecord) {
  const phone = stringValue(body.phone, 64);
  const email = stringValue(body.email, 191);

  if (!phone && !email) {
    throw new InputValidationError("Zadajte telefón alebo e-mail.");
  }

  if (phone && !phoneRegex.test(phone)) {
    throw new InputValidationError("Zadajte platné telefónne číslo.");
  }

  if (email && !emailRegex.test(email)) {
    throw new InputValidationError("Zadajte platný e-mail.");
  }

  return {
    phone: phone ?? "neuvedené",
    email
  };
}

function summaryLine(label: string, value: string | undefined) {
  return `${label}: ${value || "-"}`;
}

function buildLeadSummary(title: string, rows: Array<[string, string | undefined]>, message?: string) {
  return [
    title,
    "",
    ...rows.map(([label, value]) => summaryLine(label, value)),
    "",
    summaryLine("Správa", message)
  ].join("\n");
}

function readAttribution(body: JsonRecord, request: NextRequest): AttributionPayload {
  const attributionSource =
    typeof body.attribution === "object" && body.attribution !== null ? (body.attribution as JsonRecord) : body;
  const payload: AttributionPayload = {};

  for (const field of ATTRIBUTION_FIELDS) {
    const value = stringValue(attributionSource[field], 512);
    if (value) payload[field] = value;
  }

  if (!payload.referrer) {
    const referer = request.headers.get("referer");
    if (referer) payload.referrer = referer.slice(0, 512);
  }

  if (!payload.landing_page) {
    payload.landing_page = stringValue(body.landingPage, 512) || stringValue(body.landing_page, 512);
  }

  return payload;
}

function parseLeadBody(body: JsonRecord, request: NextRequest): LeadInput {
  const service = stringValue(body.service, 96);

  assertValidService(service);

  const name = stringValue(body.name, 191);
  const phone = stringValue(body.phone, 64);
  const email = stringValue(body.email, 191);
  const location = stringValue(body.location, 191);
  const consent = booleanValue(body.consent);

  if (!name) throw new InputValidationError("Zadajte meno.");
  if (!phone) throw new InputValidationError("Zadajte telefón.");
  if (!phoneRegex.test(phone)) throw new InputValidationError("Zadajte platné telefónne číslo.");
  if (email && !emailRegex.test(email)) throw new InputValidationError("Zadajte platný e-mail.");
  if (!location) throw new InputValidationError("Zadajte lokalitu.");
  if (!consent) throw new InputValidationError("Potvrďte súhlas so spracovaním údajov.");

  return {
    ...readAttribution(body, request),
    leadType: "generic",
    name,
    phone,
    email,
    service,
    location,
    message: stringValue(body.message, 3000),
    preferredDate: stringValue(body.preferredDate ?? body.date, 32),
    preferredTime: stringValue(body.preferredTime ?? body.time, 64),
    photosNote: stringValue(body.photosNote ?? body.photos_note, 1000),
    consent
  };
}

function parseSellerEstimateLead(body: JsonRecord, request: NextRequest): LeadInput {
  const service = stringValue(body.service, 96);
  assertValidService(service);

  const name = stringValue(body.name, 191);
  const propertyType = stringValue(body.propertyType, 96);
  const location = stringValue(body.location, 191);
  const size = stringValue(body.size, 96);
  const condition = stringValue(body.condition, 96);
  const plannedSellingDate = stringValue(body.plannedSellingDate, 96);
  const message = stringValue(body.message, 3000);
  const consent = booleanValue(body.consent);

  if (!name) throw new InputValidationError("Zadajte meno.");
  const contact = contactValues(body);
  if (!propertyType) throw new InputValidationError("Vyberte typ nehnuteľnosti.");
  if (!location) throw new InputValidationError("Zadajte lokalitu.");
  if (!consent) throw new InputValidationError("Potvrďte súhlas so spracovaním údajov.");

  return {
    ...readAttribution(body, request),
    leadType: "seller_estimate",
    name,
    phone: contact.phone,
    email: contact.email,
    service,
    location,
    message: buildLeadSummary(
      "Odhad ceny nehnuteľnosti zdarma",
      [
        ["Typ nehnuteľnosti", propertyType],
        ["Lokalita", location],
        ["Výmera / úžitková plocha", size],
        ["Stav nehnuteľnosti", condition],
        ["Kedy plánujete predaj?", plannedSellingDate]
      ],
      message
    ),
    consent
  };
}

function parseBuyerDatabaseLead(body: JsonRecord, request: NextRequest): LeadInput {
  const service = stringValue(body.service, 96);
  assertValidService(service);

  const name = stringValue(body.name, 191);
  const targetLocation = stringValue(body.targetLocation ?? body.location, 191);
  const budget = stringValue(body.budget, 96);
  const propertyType = stringValue(body.propertyType, 96);
  const financingMethod = stringValue(body.financingMethod, 96);
  const timeframe = stringValue(body.timeframe, 96);
  const message = stringValue(body.message, 3000);
  const consent = booleanValue(body.consent);

  if (!name) throw new InputValidationError("Zadajte meno.");
  const contact = contactValues(body);
  if (!targetLocation) throw new InputValidationError("Zadajte hľadanú lokalitu.");
  if (!propertyType) throw new InputValidationError("Vyberte typ nehnuteľnosti.");
  if (!consent) throw new InputValidationError("Potvrďte súhlas so spracovaním údajov.");

  return {
    ...readAttribution(body, request),
    leadType: "buyer_database",
    name,
    phone: contact.phone,
    email: contact.email,
    service,
    location: targetLocation,
    message: buildLeadSummary(
      "Databáza kupujúcich",
      [
        ["Hľadaná lokalita", targetLocation],
        ["Rozpočet", budget],
        ["Typ nehnuteľnosti", propertyType],
        ["Financovanie", financingMethod],
        ["Kedy chcete kúpiť?", timeframe]
      ],
      message
    ),
    consent
  };
}

export async function parseLeadInput(request: NextRequest): Promise<LeadInput> {
  const body = (await request.json()) as JsonRecord;
  const leadType = stringValue(body.leadType ?? body.lead_type, 64);

  if (leadType === "seller_estimate") {
    return parseSellerEstimateLead(body, request);
  }

  if (leadType === "buyer_database") {
    return parseBuyerDatabaseLead(body, request);
  }

  return parseLeadBody(body, request);
}

export async function parseCheckoutInput(request: NextRequest): Promise<CheckoutInput> {
  const body = (await request.json()) as JsonRecord;
  const paymentTypeRaw = stringValue(body.paymentType ?? body.payment_type, 64);
  const leadInput = parseLeadBody(body, request);
  const service = getService(leadInput.service);
  const paymentType = paymentTypeRaw && isPaymentType(paymentTypeRaw) ? paymentTypeRaw : service?.paymentType;

  if (!paymentType || !isPaymentType(paymentType)) {
    throw new Error("Invalid payment type.");
  }

  return {
    ...leadInput,
    paymentType
  };
}
