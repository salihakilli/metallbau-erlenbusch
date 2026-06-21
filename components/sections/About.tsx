import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

const credentials = [
  { label: "Metallbaumeister", icon: "spark" as const },
  { label: "Geprüfter Int. Schweißfachmann", icon: "weld" as const },
  { label: "Persönliche Beratung vom Meister", icon: "check" as const },
];

export function About() {
  return (
    <section id="betrieb" className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Über den Betrieb"
              title={
                <>
                  Handwerk mit Anspruch –<br />
                  geführt von {site.owner}
                </>
              }
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-steel-600">
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
                Erfahrung, Präzision und Qualität sind für uns keine
                Schlagworte, sondern Maßstab für jede Naht und jede Schraube.
              </p>
            </div>

            <ul className="mt-9 space-y-3">
              {credentials.map((c) => (
                <li key={c.label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-accent-50 text-accent-600">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-steel-900">{c.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "Meister", label: "geführter Betrieb" },
                { value: "3 Werkstoffe", label: "Stahl, Edelstahl, Alu" },
                { value: "MAG · WIG", label: "moderne Schweißverfahren" },
                { value: "Region", label: "verwurzelt & verlässlich" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-md border border-steel-200 bg-steel-50 p-6 transition-colors hover:border-accent-300"
                >
                  <p className="font-display text-2xl font-semibold text-steel-950">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-steel-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
