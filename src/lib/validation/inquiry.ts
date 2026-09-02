import { z } from "zod";

export const inquiryIntents = ["custom", "available", "consultation"] as const;

export const inquirySchema = z.object({
  intent: z.enum(inquiryIntents, {
    message: "Choose what we are making.",
  }),
  idea: z
    .string()
    .trim()
    .min(12, "Tell me a little more about the idea.")
    .max(4000, "Keep the idea under 4000 characters."),
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
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export function parseInquiryForm(formData: FormData) {
  return inquirySchema.safeParse({
    intent: formData.get("intent") || undefined,
    idea: formData.get("idea"),
    name: formData.get("name"),
    email: formData.get("email"),
    instagram: formData.get("instagram"),
    ageConfirmed: formData.get("ageConfirmed") || "",
    privacyConsent: formData.get("privacyConsent") || "",
  });
}
