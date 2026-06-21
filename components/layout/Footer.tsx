import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-steel-950 text-steel-300">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="max-w-sm">
            <a href="#top" aria-label={`${site.name} – Startseite`} className="inline-block">
              {/* Offizielles Logo, für die dunkle Fläche weiß eingefärbt */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt={site.legalName}
                className="h-16 w-auto [filter:brightness(0)_invert(1)]"
              />
            </a>
            <p className="mt-6 text-sm leading-relaxed text-steel-400">
              {site.legalName}. Metallbau-Meisterbetrieb für Geländer,
              Überdachungen, Sonderanfertigungen und Schweißtechnik.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-accent-500">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Kontakt
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-accent-500" />
                <a href={site.phoneHref} className="transition-colors hover:text-accent-500">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-accent-500" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent-500">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <nav className="flex gap-6" aria-label="Rechtliches">
            {/* Platzhalter – rechtliche Seiten vor Livegang ergänzen */}
            <a href="#impressum" className="transition-colors hover:text-accent-500">
              Impressum
            </a>
            <a href="#datenschutz" className="transition-colors hover:text-accent-500">
              Datenschutz
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
