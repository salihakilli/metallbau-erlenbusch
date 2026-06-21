import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

const badges = [
  "Metallbaumeister",
  "Int. Schweißfachmann",
  "Stahl · Edelstahl · Aluminium",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-steel-950 text-white"
    >
      {/* Hintergrund-Texturen */}
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="absolute inset-0 bg-brushed" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-steel-950 via-steel-950/95 to-steel-900"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-accent-600/20 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-16 py-32 lg:grid-cols-[1.1fr_0.9fr] lg:py-40">
          {/* Text */}
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
              <Icon name="spark" className="h-4 w-4" />
              Meisterbetrieb für Metallbau
            </span>

            <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {site.legalName}
            </h1>

            <p className="mt-6 max-w-xl font-display text-xl font-medium text-accent-400 sm:text-2xl">
              „{site.claim}“
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-300">
              Präzision, Qualität und echtes Meisterhandwerk – wir fertigen
              langlebige Konstruktionen aus Stahl, Edelstahl und Aluminium.
              Sauber eingemessen, exakt verarbeitet und zuverlässig montiert.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#kontakt" variant="primary" withArrow>
                Anfrage stellen
              </ButtonLink>
              <ButtonLink href="#leistungen" variant="ghost">
                Leistungen ansehen
              </ButtonLink>
            </div>

            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {badges.map((badge) => (
                <li key={badge} className="flex items-center gap-2 text-sm text-steel-300">
                  <Icon name="check" className="h-4 w-4 text-accent-500" />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {/* Inhaberfoto im Stahlrahmen */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-white/10 bg-gradient-to-br from-steel-800 to-steel-900 shadow-2xl">
              <Image
                src="/dennis-erlenbusch.jpg"
                alt={`${site.owner}, Metallbaumeister und Inhaber`}
                fill
                priority
                sizes="(max-width: 1024px) 28rem, 36vw"
                className="object-cover object-top"
              />

              {/* Eck-Schweißpunkte / Nieten */}
              {["left-4 top-4", "right-4 top-4", "left-4 bottom-4", "right-4 bottom-4"].map(
                (pos) => (
                  <span
                    key={pos}
                    className={`absolute ${pos} z-10 h-2.5 w-2.5 rounded-full bg-white/30 ring-1 ring-black/20`}
                    aria-hidden="true"
                  />
                ),
              )}

              {/* Namensschild */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-steel-950 via-steel-950/70 to-transparent p-6 pt-16">
                <p className="font-display text-xl font-semibold text-white">
                  {site.owner}
                </p>
                <p className="mt-1 text-sm text-accent-400">
                  Metallbaumeister &amp; Inhaber
                </p>
              </div>
            </div>

            {/* schwebende Kennzahl */}
            <div className="absolute -top-6 -left-6 hidden rounded-md border border-white/10 bg-steel-900/90 px-6 py-4 shadow-xl backdrop-blur sm:block">
              <p className="font-display text-3xl font-semibold text-white">100%</p>
              <p className="text-xs uppercase tracking-[0.14em] text-steel-400">
                Meisterhandwerk
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
