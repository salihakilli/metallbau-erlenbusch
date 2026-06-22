import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { site } from "@/lib/site";

const credentials: { label: string; text: string; icon: IconName }[] = [
  {
    label: "Metallbaumeister",
    text: "Geführt vom Inhaber – mit Verantwortung für jedes einzelne Projekt.",
    icon: "check",
  },
  {
    label: "Geprüfter Int. Schweißfachmann",
    text: "Moderne Schweißverfahren: MAG, WIG und Elektrode auf geprüftem Niveau.",
    icon: "check",
  },
  {
    label: "Persönliche Beratung",
    text: "Direkter Draht zum Meister – von der ersten Idee bis zur Montage.",
    icon: "check",
  },
];

export function About() {
  return (
    <section id="betrieb" className="bg-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Über den Betrieb"
            title={
              <>
                Handwerk mit Anspruch – geführt von {site.owner}
              </>
            }
          />
          <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-steel-600">
            <p>
              Hinter {site.name} steht {site.owner}, Metallbaumeister und
              geprüfter Internationaler Schweißfachmann. Was als Leidenschaft
              für das Material begann, ist heute ein Meisterbetrieb, der für
              saubere Arbeit und ehrliche Beratung steht.
            </p>
            <p>
              Jedes Projekt beginnt mit genauem Hinsehen: präzises Aufmaß,
              durchdachte Konstruktion und eine Verarbeitung, die hält. Vom
              einzelnen Handlauf bis zur kompletten Außenanlage – wir liefern
              Lösungen, die über Jahre hinweg zuverlässig funktionieren.
            </p>
            <p>
              Erfahrung, Präzision und Qualität sind für uns keine Schlagworte,
              sondern Maßstab für jede Naht und jede Schraube.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {credentials.map((c, i) => (
            <Reveal key={c.label} as="div" delay={i * 90}>
              <div className="flex h-full flex-col rounded-md border border-steel-200 bg-steel-50 p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-steel-950 text-white">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-steel-950">
                  {c.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
