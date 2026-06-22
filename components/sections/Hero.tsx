import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-white via-steel-50 to-steel-100 text-steel-950"
    >
      {/* dezenter, heller Lichtschein – sehr zurückhaltend */}
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-white/70 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-16 py-32 lg:grid-cols-[1.1fr_0.9fr] lg:py-40">
          {/* Text */}
          <div>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-steel-950 sm:text-5xl lg:text-6xl">
              {site.legalName}
            </h1>

            <p className="mt-6 max-w-xl font-display text-xl font-medium text-accent-700 sm:text-2xl">
              „{site.claim}“
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-600">
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
          </div>

          {/* Inhaberfoto – ohne Rahmen */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl ring-1 ring-steel-900/5">
              <Image
                src="/dennis-erlenbusch.jpg"
                alt={`${site.owner}, Metallbaumeister und Schweißfachmann`}
                fill
                priority
                sizes="(max-width: 1024px) 24rem, 32vw"
                className="object-cover object-top"
              />

              {/* Namensschild */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-steel-950 via-steel-950/60 to-transparent p-6 pt-20">
                <p className="font-display text-xl font-semibold text-white">
                  {site.owner}
                </p>
                <p className="mt-1 text-sm font-medium text-accent-400">
                  Metallbaumeister und Schweißfachmann
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
