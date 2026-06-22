import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/lib/services";

export function Services() {
  return (
    <section id="leistungen" className="border-y border-steel-200 bg-steel-50 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Leistungen"
            title="Was wir für Sie fertigen"
            intro="Vom Geländer bis zur Sonderanfertigung – alles aus einer Hand, in Meisterqualität verarbeitet."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} as="div" delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col rounded-md border border-steel-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-lg">
                <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-steel-950 text-white transition-colors group-hover:bg-steel-800">
                  <Icon name={service.icon} className="h-7 w-7" />
                </span>

                <h3 className="mt-6 font-display text-xl font-semibold text-steel-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-steel-600">{service.summary}</p>

                <ul className="mt-6 space-y-2.5 border-t border-steel-100 pt-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-steel-700">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-steel-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          {/* Abschluss-Karte: Call-to-Action */}
          <Reveal as="div" delay={180}>
            <article className="flex h-full flex-col justify-between rounded-md bg-steel-950 p-8 text-white">
              <div>
                <h3 className="font-display text-xl font-semibold">
                  Ihr Projekt ist nicht dabei?
                </h3>
                <p className="mt-3 text-steel-300">
                  Sprechen Sie uns an – wir finden die passende Lösung in Metall.
                </p>
              </div>
              <a
                href="#kontakt"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-400 transition-colors hover:text-accent-300"
              >
                Unverbindlich anfragen
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
