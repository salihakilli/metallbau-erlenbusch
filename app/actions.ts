"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "phone" | "message", string>>;
};

const isBlank = (value: string) => value.trim().length === 0;

/**
 * Server Action für das Kontaktformular.
 *
 * Validiert die Eingaben serverseitig. Der eigentliche Versand
 * (E-Mail, CRM o. Ä.) wird hier angebunden – aktuell wird die
 * Anfrage protokolliert, damit das Formular ohne externe Abhängigkeit
 * funktioniert.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "");
  const phone = String(formData.get("phone") ?? "");
  const email = String(formData.get("email") ?? "");
  const message = String(formData.get("message") ?? "");

  // Honeypot gegen einfache Spam-Bots – darf nie befüllt sein.
  if (String(formData.get("company") ?? "").length > 0) {
    return { status: "success", message: "Vielen Dank für Ihre Anfrage." };
  }

  const errors: ContactState["errors"] = {};
  if (isBlank(name)) errors.name = "Bitte geben Sie Ihren Namen an.";
  if (isBlank(phone)) errors.phone = "Bitte geben Sie eine Telefonnummer an.";
  if (message.trim().length < 10)
    errors.message = "Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Bitte prüfen Sie die markierten Felder.",
      errors,
    };
  }

  // TODO: Anbindung an E-Mail-Versand / CRM vor Livegang.
  console.info("Neue Kontaktanfrage", {
    name,
    phone,
    email,
    message,
    at: new Date().toISOString(),
  });

  return {
    status: "success",
    message:
      "Vielen Dank für Ihre Anfrage. Wir melden uns zeitnah persönlich bei Ihnen.",
  };
}
