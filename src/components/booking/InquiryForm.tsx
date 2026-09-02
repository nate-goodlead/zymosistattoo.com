"use client";

import { useActionState, useRef, useState } from "react";
import {
  submitInquiry,
  type InquiryFormState,
} from "@/features/inquiries/actions";
import { site } from "@/content/site";
import { formatHandle } from "@/lib/site";
import {
  INSPIRATION_MAX_BYTES,
  INSPIRATION_MAX_FILES,
  INSPIRATION_TYPES,
  type InquiryIntent,
} from "@/lib/validation/inquiry";

const initialState: InquiryFormState = { status: "idle" };

type InquiryFormProps = {
  defaultIntent?: InquiryIntent;
  defaultIdea?: string;
};

function mergeFiles(current: File[], incoming: FileList | File[]) {
  const next = [...current];
  for (const file of Array.from(incoming)) {
    if (!INSPIRATION_TYPES.has(file.type)) {
      continue;
    }
    if (file.size > INSPIRATION_MAX_BYTES) {
      continue;
    }
    if (next.some((item) => item.name === file.name && item.size === file.size)) {
      continue;
    }
    if (next.length >= INSPIRATION_MAX_FILES) {
      break;
    }
    next.push(file);
  }
  return next;
}

function syncInput(input: HTMLInputElement | null, files: File[]) {
  if (!input) {
    return;
  }
  const transfer = new DataTransfer();
  for (const file of files) {
    transfer.items.add(file);
  }
  input.files = transfer.files;
}

export function InquiryForm({ defaultIntent, defaultIdea }: InquiryFormProps) {
  const [state, action, pending] = useActionState(submitInquiry, initialState);
  const [notSure, setNotSure] = useState(defaultIntent === "consultation");
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function setFileList(next: File[]) {
    setFiles(next);
    syncInput(fileInputRef.current, next);
  }

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
          <div>
            <dt>Size</dt>
            <dd>{state.summary.sizeCm}</dd>
          </div>
          {state.summary.notSure ? (
            <div>
              <dt>Certainty</dt>
              <dd>Not sure yet — idea and size only</dd>
            </div>
          ) : null}
          {state.summary.placement ? (
            <div>
              <dt>Place</dt>
              <dd>{state.summary.placement}</dd>
            </div>
          ) : null}
          {state.summary.notes ? (
            <div>
              <dt>Something else</dt>
              <dd>{state.summary.notes}</dd>
            </div>
          ) : null}
          {state.summary.inspiration.length > 0 ? (
            <div>
              <dt>Inspiration</dt>
              <dd>{state.summary.inspiration.join(", ")}</dd>
            </div>
          ) : null}
        </dl>
        <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer noopener">
          <span>Open Instagram</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    );
  }

  const errors = state.status === "error" ? state.fieldErrors : undefined;
  const intent = notSure ? "consultation" : (defaultIntent ?? "custom");

  return (
    <form className="inquiry-form" action={action} noValidate>
      <input type="hidden" name="intent" value={intent} />
      <input type="hidden" name="notSure" value={notSure ? "on" : ""} />

      <label className="inquiry-field">
        <span>The idea</span>
        <textarea
          name="idea"
          rows={4}
          required
          maxLength={4000}
          placeholder="What do you want tattooed?"
          defaultValue={defaultIdea}
        />
        {errors?.idea ? <p className="inquiry-error">{errors.idea}</p> : null}
      </label>

      <label className="inquiry-field">
        <span>Size in cm</span>
        <input
          type="text"
          name="sizeCm"
          required
          maxLength={80}
          placeholder="Around 8 × 12, or your best guess"
        />
        {errors?.sizeCm ? <p className="inquiry-error">{errors.sizeCm}</p> : null}
      </label>

      <label className="inquiry-field">
        <span>Place{notSure ? " (optional)" : ""}</span>
        <input
          type="text"
          name="placement"
          required={!notSure}
          maxLength={200}
          placeholder="Shoulder, ribs, forearm…"
        />
        {errors?.placement ? <p className="inquiry-error">{errors.placement}</p> : null}
      </label>

      <fieldset className="inquiry-field">
        <legend>Inspiration{notSure ? " (optional)" : ""}</legend>
        <div
          className={["inquiry-dropzone", dragging ? "is-dragging" : ""]
            .filter(Boolean)
            .join(" ")}
          onDragOver={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDragging(false);
            setFileList(mergeFiles(files, event.dataTransfer.files));
          }}
        >
          <input
            ref={fileInputRef}
            className="inquiry-file-input"
            type="file"
            name="inspiration"
            accept="image/jpeg,image/png,image/webp"
            multiple
            onChange={(event) => {
              setFileList(mergeFiles(files, event.target.files ?? []));
            }}
          />
          <p>Drop jpeg, png or webp — or click to choose. Up to 6.</p>
        </div>
        {files.length > 0 ? (
          <ul className="inquiry-files">
            {files.map((file) => (
              <li key={`${file.name}-${file.size}`}>
                <span>{file.name}</span>
                <button
                  type="button"
                  onClick={() =>
                    setFileList(files.filter((item) => item !== file))
                  }
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : null}
        {errors?.inspiration ? (
          <p className="inquiry-error">{errors.inspiration}</p>
        ) : null}
      </fieldset>

      <label className="inquiry-field">
        <span>Something else{notSure ? " (optional)" : ""}</span>
        <textarea
          name="notes"
          rows={3}
          maxLength={2000}
          placeholder="Timing, meaning, questions."
        />
        {errors?.notes ? <p className="inquiry-error">{errors.notes}</p> : null}
      </label>

      <p className="inquiry-hint">
        {notSure
          ? "Idea and size still needed. Place, references and extra notes can wait."
          : "Not sure about place or references? You can skip those."}
      </p>

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

      <div className="inquiry-actions">
        <button
          type="button"
          className="inquiry-not-sure"
          aria-pressed={notSure}
          onClick={() => setNotSure((value) => !value)}
        >
          {notSure ? "I know more" : "Not sure yet"}
        </button>
        <button className="inquiry-submit" type="submit" disabled={pending}>
          {pending ? "Sending" : "Send inquiry"}
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  );
}
