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
  // Platzhalter – vor Veröffentlichung anpassen
  phone: "+49 (0) 000 000 000",
  phoneHref: "tel:+49000000000",
  email: "info@metallbau-erlenbusch.de",
  address: {
    street: "Musterstraße 1",
    zip: "00000",
    city: "Musterstadt",
    country: "Deutschland",
  },
  hours: "Mo – Fr: 07:00 – 17:00 Uhr",
} as const;

export const nav = [
  { label: "Betrieb", href: "#betrieb" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Qualität", href: "#qualitaet" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt", href: "#kontakt" },
] as const;
