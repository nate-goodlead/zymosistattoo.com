import { z } from "zod";

export const inquiryIntents = ["custom", "available", "consultation"] as const;

export const INSPIRATION_MAX_FILES = 6;
export const INSPIRATION_MAX_BYTES = 8 * 1024 * 1024;
export const INSPIRATION_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

export const inquirySchema = z
  .object({
    intent: z.enum(inquiryIntents, {
      message: "Choose what we are making.",
    }),
    notSure: z.boolean(),
    idea: z
      .string()
      .trim()
      .min(12, "Tell me a little more about the idea.")
      .max(4000, "Keep the idea under 4000 characters."),
    sizeCm: z
      .string()
      .trim()
      .min(1, "Estimate the size in centimetres.")
      .max(80, "Keep the size estimate short."),
    placement: z.string().trim().max(200),
    notes: z.string().trim().max(2000),
    name: z.string().trim().min(2, "Enter your name.").max(80),
    email: z.string().trim().email("Enter a valid email."),
    instagram: z
      .string()
      .trim()
      .min(2, "Enter your Instagram handle.")
      .max(40)
      .transform((value) => value.replace(/^@/, "")),
    ageConfirmed: z
      .string()
      .refine((value) => value === "on", "You must confirm you are 18 or older."),
    privacyConsent: z
      .string()
      .refine(
        (value) => value === "on",
        "Privacy acknowledgement is required.",
      ),
  })
  .superRefine((data, ctx) => {
    if (data.notSure) {
      return;
    }
    if (data.placement.length < 2) {
      ctx.addIssue({
        code: "custom",
        path: ["placement"],
        message: "Where on the body?",
      });
    }
  });

export type InquiryIntent = (typeof inquiryIntents)[number];

export type InspirationFileSummary = {
  name: string;
  size: number;
  type: string;
};

export function parseInquiryForm(formData: FormData) {
  const notSure = formData.get("notSure") === "on";
  const intentValue = formData.get("intent");
  const intent =
    typeof intentValue === "string" && inquiryIntents.includes(intentValue as InquiryIntent)
      ? intentValue
      : notSure
        ? "consultation"
        : "custom";

  return inquirySchema.safeParse({
    intent,
    notSure,
    idea: formData.get("idea"),
    sizeCm: formData.get("sizeCm"),
    placement: formData.get("placement") ?? "",
    notes: formData.get("notes") ?? "",
    name: formData.get("name"),
    email: formData.get("email"),
    instagram: formData.get("instagram"),
    ageConfirmed: formData.get("ageConfirmed") || "",
    privacyConsent: formData.get("privacyConsent") || "",
  });
}

export function parseInspirationFiles(
  formData: FormData,
  notSure: boolean,
):
  | { ok: true; files: InspirationFileSummary[] }
  | { ok: false; message: string } {
  const entries = formData
    .getAll("inspiration")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (entries.length > INSPIRATION_MAX_FILES) {
    return { ok: false, message: "Up to 6 reference images." };
  }

  for (const file of entries) {
    if (!INSPIRATION_TYPES.has(file.type)) {
      return { ok: false, message: "Inspiration must be jpeg, png, or webp." };
    }
    if (file.size > INSPIRATION_MAX_BYTES) {
      return { ok: false, message: "Each image must be under 8MB." };
    }
  }

  if (!notSure && entries.length === 0) {
    return { ok: false, message: "Add at least one reference, or press Not sure yet." };
  }

  return {
    ok: true,
    files: entries.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    })),
  };
}
