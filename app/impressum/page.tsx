import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Metallbau Meisterbetrieb Dennis Erlenbusch.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalShell title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <address>
        Dennis Erlenbusch
        <br />
        Metallbau Meisterbetrieb Dennis Erlenbusch
        <br />
        Perrotsweg 41
        <br />
        63263 Neu-Isenburg
      </address>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href="tel:+4915118739627">0151 18739627</a>
        <br />
        E-Mail:{" "}
        <a href="mailto:info@metallbau-erlenbusch.de">
          info@metallbau-erlenbusch.de
        </a>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        <strong>DE462694829</strong>
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p className="mt-10 text-sm text-steel-500">
        Quelle:{" "}
        <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">
          eRecht24
        </a>
      </p>
    </LegalShell>
  );
}
