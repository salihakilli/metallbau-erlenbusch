"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions";
import { Icon } from "@/components/ui/Icon";

const initialState: ContactState = { status: "idle", message: "" };

const fieldClass =
  "w-full rounded-sm border bg-white px-4 py-3 text-steel-900 placeholder:text-steel-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/40";

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-accent-700">
      {msg}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-md border border-steel-200 bg-steel-50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-steel-950 text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-steel-950">
          Anfrage gesendet
        </h3>
        <p className="mt-3 max-w-sm text-steel-600">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      {/* Honeypot – für Menschen unsichtbar */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Firma (bitte leer lassen)</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-steel-800">
            Name <span className="text-accent-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!state.errors?.name}
            aria-describedby={state.errors?.name ? "err-name" : undefined}
            className={`${fieldClass} ${
              state.errors?.name ? "border-accent-500" : "border-steel-300"
            }`}
            placeholder="Ihr Name"
          />
          <FieldError id="err-name" msg={state.errors?.name} />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-steel-800">
            Telefon <span className="text-accent-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-invalid={!!state.errors?.phone}
            aria-describedby={state.errors?.phone ? "err-phone" : undefined}
            className={`${fieldClass} ${
              state.errors?.phone ? "border-accent-500" : "border-steel-300"
            }`}
            placeholder="Für Ihren Rückruf"
          />
          <FieldError id="err-phone" msg={state.errors?.phone} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-steel-800">
          E-Mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={`${fieldClass} border-steel-300`}
          placeholder="optional"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-steel-800">
          Ihr Anliegen <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!state.errors?.message}
          aria-describedby={state.errors?.message ? "err-message" : undefined}
          className={`${fieldClass} resize-y ${
            state.errors?.message ? "border-accent-500" : "border-steel-300"
          }`}
          placeholder="Beschreiben Sie kurz Ihr Projekt – Geländer, Überdachung, Reparatur …"
        />
        <FieldError id="err-message" msg={state.errors?.message} />
      </div>

      {state.status === "error" && !state.errors && (
        <p className="text-sm text-accent-700" role="alert">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-sm bg-steel-950 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-steel-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Wird gesendet …" : "Projekt anfragen"}
        {!pending && <Icon name="arrow" className="h-4 w-4" />}
      </button>

      <p className="text-xs leading-relaxed text-steel-500">
        Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten zur
        Bearbeitung der Anfrage einverstanden. Pflichtfelder sind mit
        <span className="text-accent-600"> *</span> markiert.
      </p>
    </form>
  );
}
