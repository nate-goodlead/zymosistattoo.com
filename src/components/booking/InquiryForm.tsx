"use client";

import { useActionState } from "react";
import {
  submitInquiry,
  type InquiryFormState,
} from "@/features/inquiries/actions";
import { site } from "@/content/site";
import { formatHandle } from "@/lib/site";

const initialState: InquiryFormState = { status: "idle" };

const intents = [
  { value: "custom", label: "Custom" },
  { value: "available", label: "Available work" },
  { value: "consultation", label: "Not sure" },
] as const;

type InquiryFormProps = {
  defaultIntent?: (typeof intents)[number]["value"];
  defaultIdea?: string;
};

export function InquiryForm({ defaultIntent, defaultIdea }: InquiryFormProps) {
  const [state, action, pending] = useActionState(submitInquiry, initialState);

  if (state.status === "success") {
    const instagramUrl = `${site.instagramUrl}${site.instagramUrl.endsWith("/") ? "" : "/"}`;
    return (
      <div className="inquiry-success">
        <p className="inquiry-success-kicker">Inquiry composed</p>
        <p>
          An inquiry is not a confirmed appointment. Inbox storage is not
          connected yet — send this to {formatHandle(site.instagramHandle)} on
          Instagram.
        </p>
        <dl className="inquiry-summary">
          <div>
            <dt>Intent</dt>
            <dd>{state.summary.intent}</dd>
          </div>
          <div>
            <dt>Name</dt>
            <dd>{state.summary.name}</dd>
          </div>
          <div>
            <dt>Instagram</dt>
            <dd>@{state.summary.instagram}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{state.summary.email}</dd>
          </div>
          <div>
            <dt>Idea</dt>
            <dd>{state.summary.idea}</dd>
          </div>
        </dl>
        <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer noopener">
          <span>Open Instagram</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    );
  }

  const errors = state.status === "error" ? state.fieldErrors : undefined;

  return (
    <form className="inquiry-form" action={action} noValidate>
      <fieldset className="inquiry-field">
        <legend>What are we making?</legend>
        <div className="inquiry-intents">
          {intents.map((intent) => (
            <label key={intent.value} className="inquiry-intent">
              <input
                type="radio"
                name="intent"
                value={intent.value}
                required
                defaultChecked={defaultIntent === intent.value}
              />
              <span>{intent.label}</span>
            </label>
          ))}
        </div>
        {errors?.intent ? <p className="inquiry-error">{errors.intent}</p> : null}
      </fieldset>

      <label className="inquiry-field">
        <span>Tell me about it</span>
        <textarea
          name="idea"
          rows={5}
          required
          maxLength={4000}
          placeholder="Subject, mood, placement, meaning."
          defaultValue={defaultIdea}
        />
        {errors?.idea ? <p className="inquiry-error">{errors.idea}</p> : null}
      </label>

      <label className="inquiry-field">
        <span>Name</span>
        <input type="text" name="name" autoComplete="name" required maxLength={80} />
        {errors?.name ? <p className="inquiry-error">{errors.name}</p> : null}
      </label>

      <label className="inquiry-field">
        <span>Instagram</span>
        <input
          type="text"
          name="instagram"
          autoComplete="off"
          required
          maxLength={40}
          placeholder="handle"
        />
        {errors?.instagram ? <p className="inquiry-error">{errors.instagram}</p> : null}
      </label>

      <label className="inquiry-field">
        <span>Email</span>
        <input type="email" name="email" autoComplete="email" required />
        {errors?.email ? <p className="inquiry-error">{errors.email}</p> : null}
      </label>

      <label className="inquiry-check">
        <input type="checkbox" name="ageConfirmed" required />
        <span>I confirm I am 18 or older.</span>
      </label>
      {errors?.ageConfirmed ? (
        <p className="inquiry-error">{errors.ageConfirmed}</p>
      ) : null}

      <label className="inquiry-check">
        <input type="checkbox" name="privacyConsent" required />
        <span>I understand this is a request, not a booked appointment.</span>
      </label>
      {errors?.privacyConsent ? (
        <p className="inquiry-error">{errors.privacyConsent}</p>
      ) : null}

      <div className="inquiry-honeypot" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && state.message ? (
        <p className="inquiry-error" role="alert">
          {state.message}
        </p>
      ) : null}

      <button className="inquiry-submit" type="submit" disabled={pending}>
        {pending ? "Sending" : "Send inquiry"}
        <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
