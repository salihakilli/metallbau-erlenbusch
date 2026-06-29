"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "phone" | "message", string>>;
};

const isBlank = (value: string) => value.trim().length === 0;

// Absender muss auf der in Resend verifizierten Domain liegen.
const MAIL_FROM = "Kontaktformular <kontakt@metallbau-erlenbusch.de>";
const MAIL_TO = "info@metallbau-erlenbusch.de";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/**
 * Server Action für das Kontaktformular.
 * Validiert serverseitig und versendet die Anfrage per Resend an den Betrieb.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Honeypot gegen einfache Spam-Bots – darf nie befüllt sein.
  if (String(formData.get("company") ?? "").length > 0) {
    return { status: "success", message: "Vielen Dank für Ihre Anfrage." };
  }

  const errors: ContactState["errors"] = {};
  if (isBlank(name)) errors.name = "Bitte geben Sie Ihren Namen an.";
  if (isBlank(phone)) errors.phone = "Bitte geben Sie eine Telefonnummer an.";
  if (message.length < 10)
    errors.message = "Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Bitte prüfen Sie die markierten Felder.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY ist nicht gesetzt – Versand nicht möglich.");
    return {
      status: "error",
      message:
        "Der Versand ist derzeit nicht möglich. Bitte kontaktieren Sie uns telefonisch.",
    };
  }

  const hasEmail = /.+@.+\..+/.test(email);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: MAIL_FROM,
      to: [MAIL_TO],
      replyTo: hasEmail ? email : undefined,
      subject: `Neue Anfrage über die Website – ${name}`,
      text:
        `Neue Kontaktanfrage über die Website\n\n` +
        `Name: ${name}\n` +
        `Telefon: ${phone}\n` +
        `E-Mail: ${hasEmail ? email : "—"}\n\n` +
        `Nachricht:\n${message}\n`,
      html:
        `<h2>Neue Kontaktanfrage über die Website</h2>` +
        `<p><strong>Name:</strong> ${escapeHtml(name)}<br>` +
        `<strong>Telefon:</strong> ${escapeHtml(phone)}<br>` +
        `<strong>E-Mail:</strong> ${hasEmail ? escapeHtml(email) : "—"}</p>` +
        `<p><strong>Nachricht:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });

    if (error) {
      console.error("Resend-Fehler:", error);
      return {
        status: "error",
        message:
          "Beim Senden ist etwas schiefgelaufen. Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
      };
    }
  } catch (err) {
    console.error("Versand fehlgeschlagen:", err);
    return {
      status: "error",
      message:
        "Beim Senden ist etwas schiefgelaufen. Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
    };
  }

  return {
    status: "success",
    message:
      "Vielen Dank für Ihre Anfrage. Wir melden uns zeitnah persönlich bei Ihnen.",
  };
}
