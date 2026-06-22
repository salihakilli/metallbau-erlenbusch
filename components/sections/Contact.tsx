import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

const details = [
  { icon: "phone" as const, label: "Telefon", value: site.phone, href: site.phoneHref },
  { icon: "mail" as const, label: "E-Mail", value: site.email, href: `mailto:${site.email}` },
  {
    icon: "pin" as const,
    label: "Adresse",
    value: `${site.address.street}, ${site.address.zip} ${site.address.city}`,
  },
  { icon: "clock" as const, label: "Erreichbarkeit", value: site.hours },
];

export function Contact() {
  return (
    <section id="kontakt" className="border-t border-steel-200 bg-steel-50 py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Linke Spalte: Kontaktinfos */}
          <Reveal>
            <SectionHeading
              eyebrow="Kontakt"
              title="Projekt anfragen"
              intro="Erzählen Sie uns von Ihrem Vorhaben. Wir melden uns persönlich und beraten Sie ehrlich – ohne Verpflichtung."
            />

            <ul className="mt-10 space-y-5">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-steel-950 text-white">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel-500">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-1 block text-lg font-medium text-steel-900 transition-colors hover:text-accent-600"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-lg font-medium text-steel-900">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-md border border-steel-200 bg-white p-6">
              <p className="font-display text-base font-semibold text-steel-950">
                Schnelle Rückmeldung gewünscht?
              </p>
              <p className="mt-2 text-sm text-steel-600">
                Rufen Sie direkt an – der Meister ist persönlich für Sie da.
              </p>
              <a
                href={site.phoneHref}
                className="mt-4 inline-flex items-center gap-2 rounded-sm bg-steel-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-steel-800"
              >
                <Icon name="phone" className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </Reveal>

          {/* Rechte Spalte: Formular */}
          <Reveal delay={120}>
            <div className="rounded-md border border-steel-200 bg-white p-8 shadow-sm sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
