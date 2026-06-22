/**
 * Zentrale Stammdaten des Betriebs.
 * Platzhalter (Telefon, E-Mail, Adresse) bitte vor dem Livegang ersetzen.
 */
export const site = {
  name: "Metallbau Erlenbusch",
  legalName: "Metallbau Meisterbetrieb Dennis Erlenbusch",
  owner: "Dennis Erlenbusch",
  claim: "Wenn aus Ideen langlebige Konstruktionen werden",
  description:
    "Metallbau-Meisterbetrieb für Geländer, Überdachungen, Sonderanfertigungen und Schweißtechnik. Präzise Verarbeitung in Stahl, Edelstahl und Aluminium – für Privat- und Gewerbekunden.",
  url: "https://www.metallbau-erlenbusch.de",
  phone: "0151 18739627",
  phoneHref: "tel:+4915118739627",
  email: "info@metallbau-erlenbusch.de",
  address: {
    street: "Perrotsweg 41",
    zip: "63263",
    city: "Neu-Isenburg",
    country: "Deutschland",
  },
  hours: "Mo – Fr: 07:00 – 17:00 Uhr",
} as const;

export const nav = [
  { label: "Betrieb", href: "/#betrieb" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Qualität", href: "/#qualitaet" },
  { label: "Referenzen", href: "/#referenzen" },
  { label: "Kontakt", href: "/#kontakt" },
] as const;
