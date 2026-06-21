import type { IconName } from "@/components/ui/Icon";

export type Service = {
  title: string;
  summary: string;
  items: string[];
  icon: IconName;
};

export const services: Service[] = [
  {
    title: "Geländer & Absturzsicherungen",
    summary:
      "Sichere, langlebige Geländerlösungen – exakt eingemessen und sauber montiert.",
    items: [
      "Stahl, Edelstahl, Aluminium",
      "Treppengeländer & Handläufe",
      "Balkon- & Absturzsicherungen",
    ],
    icon: "railing",
  },
  {
    title: "Überdachungen & Außenanlagen",
    summary:
      "Konstruktionen für draußen, die Wind, Wetter und Jahren standhalten.",
    items: [
      "Vordächer & Carports",
      "Zäune & Tore",
      "Sichtschutzanlagen",
    ],
    icon: "roof",
  },
  {
    title: "Individuelle Metallbauarbeiten",
    summary:
      "Sonderanfertigungen nach Maß – vom ersten Entwurf bis zur fertigen Montage.",
    items: [
      "Sonderanfertigungen nach Maß",
      "Stahl- & Edelstahlkonstruktionen",
      "Aluminiumkonstruktionen",
    ],
    icon: "blueprint",
  },
  {
    title: "Schweißtechnik & Metallbearbeitung",
    summary:
      "Moderne Schweißverfahren und saubere Bearbeitung durch geprüften Schweißfachmann.",
    items: [
      "MAG / WIG / Elektrode",
      "Zuschnitt, Biegen & Schleifen",
      "Fachgerechte Montage",
    ],
    icon: "weld",
  },
  {
    title: "Reparatur & Instandsetzung",
    summary:
      "Bestehende Anlagen prüfen, instand setzen und wieder voll belastbar machen.",
    items: [
      "Reparatur von Stahl- & Metallkonstruktionen",
      "Wartung bestehender Anlagen",
      "Erneuerung & Nachrüstung",
    ],
    icon: "repair",
  },
];

export const qualityPoints = [
  {
    title: "Meisterbetrieb",
    text: "Geführt vom Inhaber – Metallbaumeister mit Verantwortung für jedes Projekt.",
  },
  {
    title: "Präzise Verarbeitung",
    text: "Sauber eingemessen, exakt gefertigt und millimetergenau montiert.",
  },
  {
    title: "Langlebige Konstruktionen",
    text: "Materialgerechte Ausführung, die über Jahre hinweg sicher und stabil bleibt.",
  },
  {
    title: "Moderne Schweißtechnik",
    text: "Geprüfter Internationaler Schweißfachmann – MAG, WIG und Elektrode.",
  },
  {
    title: "Persönliche Beratung",
    text: "Direkter Kontakt zum Meister – von der Idee bis zur fertigen Lösung.",
  },
];
