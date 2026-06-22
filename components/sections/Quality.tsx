import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { qualityPoints } from "@/lib/services";

export function Quality() {
  return (
    <section
      id="qualitaet"
      className="relative overflow-hidden bg-steel-950 py-24 text-white sm:py-32"
    >
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-accent-600/15 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Qualitätsversprechen"
            title="Worauf Sie sich verlassen können"
            intro="Fünf Grundsätze, die in jedes Projekt einfließen – vom ersten Gespräch bis zur Übergabe."
            tone="light"
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {qualityPoints.map((point, i) => (
            <Reveal key={point.title} as="div" delay={(i % 3) * 90}>
              <div className="flex h-full flex-col bg-steel-950 p-8 transition-colors hover:bg-steel-900">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent-600/15 text-accent-400">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-steel-400">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-300">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Lückenfüller mit CTA, damit das Grid sauber abschließt */}
          <Reveal as="div" delay={180}>
            <div className="flex h-full flex-col justify-center bg-white p-8">
              <p className="font-display text-lg font-semibold text-steel-950">
                Überzeugen Sie sich selbst.
              </p>
              <a
                href="#kontakt"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-600"
              >
                Jetzt Kontakt aufnehmen
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
