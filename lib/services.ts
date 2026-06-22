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
      "Ob Schweißreparatur, Instandsetzung oder Erneuerung – wir setzen bestehende Metall- und Stahlkonstruktionen fachgerecht instand und verlängern ihre Lebensdauer.",
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
    title: "Qualität beginnt bei der Präzision",
    text: "Jede Konstruktion entsteht mit höchster Sorgfalt und exakter Verarbeitung – echte Qualität zeigt sich bis ins kleinste Detail.",
  },
  {
    title: "Meisterhandwerk schafft Vertrauen",
    text: "Als Metallbaumeister und Internationaler Schweißfachmann stehe ich für fundiertes Fachwissen und Ausführung nach höchsten Standards.",
  },
  {
    title: "Individuelle Lösungen statt Standard",
    text: "Jedes Projekt ist einzigartig. Ich entwickle maßgeschneiderte Konstruktionen, exakt abgestimmt auf Ihre Anforderungen und Wünsche.",
  },
  {
    title: "Langlebigkeit ist unser Maßstab",
    text: "Hochwertige Materialien und moderne Schweißverfahren für Konstruktionen, die über viele Jahre sicher und zuverlässig bleiben.",
  },
  {
    title: "Verlässlichkeit in jeder Projektphase",
    text: "Von der Beratung über die Planung bis zur Montage – alles aus einer Hand, transparent, termintreu und mit festem Ansprechpartner.",
  },
];
