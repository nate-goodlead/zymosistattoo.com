"use server";

import { headers } from "next/headers";
import {
  parseInquiryForm,
  parseInspirationFiles,
} from "@/lib/validation/inquiry";

export type InquiryFormState =
  | { status: "idle" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> }
  | {
      status: "success";
      summary: {
        intent: string;
        notSure: boolean;
        name: string;
        email: string;
        instagram: string;
        idea: string;
        sizeCm: string;
        placement: string;
        notes: string;
        inspiration: string[];
      };
    };

const rateBucket = new Map<string, { count: number; resetAt: number }>();

async function clientKey() {
  const headerList = await headers();
  return (
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown"
  );
}

async function isRateLimited() {
  const key = await clientKey();
  const now = Date.now();
  const current = rateBucket.get(key);

  if (!current || now > current.resetAt) {
    rateBucket.set(key, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return false;
  }

  if (current.count >= 8) {
    return true;
  }

  current.count += 1;
  return false;
}

export async function submitInquiry(
  _previous: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  if (await isRateLimited()) {
    return {
      status: "error",
      message: "Too many attempts. Wait a few minutes and try again.",
    };
  }

  if (String(formData.get("company") ?? "").trim()) {
    return { status: "idle" };
  }

  const parsed = parseInquiryForm(formData);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0] ?? "form");
      if (!fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Check the highlighted fields.",
      fieldErrors,
    };
  }

  const inspiration = parseInspirationFiles(formData, parsed.data.notSure);
  if (!inspiration.ok) {
    return {
      status: "error",
      message: "Check the highlighted fields.",
      fieldErrors: { inspiration: inspiration.message },
    };
  }

  return {
    status: "success",
    summary: {
      intent: parsed.data.intent,
      notSure: parsed.data.notSure,
      name: parsed.data.name,
      email: parsed.data.email,
      instagram: parsed.data.instagram,
      idea: parsed.data.idea,
      sizeCm: parsed.data.sizeCm,
      placement: parsed.data.placement,
      notes: parsed.data.notes,
      inspiration: inspiration.files.map((file) => file.name),
    },
  };
}
