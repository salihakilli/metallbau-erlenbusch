import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

type Project = {
  title: string;
  category: string;
  icon: IconName;
  /** Layout-Span für ein abwechslungsreiches Raster */
  span?: string;
};

const projects: Project[] = [
  { title: "Edelstahlgeländer", category: "Geländer", icon: "railing", span: "lg:col-span-2 lg:row-span-2" },
  { title: "Vordach in Stahl", category: "Überdachung", icon: "roof" },
  { title: "Treppenhandlauf", category: "Geländer", icon: "railing" },
  { title: "Hoftor & Zaun", category: "Außenanlage", icon: "roof" },
  { title: "Sonderanfertigung", category: "Individuell", icon: "blueprint" },
  { title: "Schweißkonstruktion", category: "Schweißtechnik", icon: "weld" },
];

export function Gallery() {
  return (
    <section id="referenzen" className="bg-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Referenzen"
            title="Ein Eindruck unserer Arbeit"
            intro="Eine Auswahl typischer Projekte. Die Bildflächen sind als Platzhalter angelegt und werden mit echten Projektfotos gefüllt."
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-5 lg:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              as="div"
              delay={(i % 4) * 70}
              className={project.span ?? ""}
            >
              <figure className="group relative h-full overflow-hidden rounded-md border border-steel-200 bg-gradient-to-br from-steel-800 to-steel-950">
                <div className="absolute inset-0 bg-brushed" aria-hidden="true" />
                <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon
                    name={project.icon}
                    className="h-14 w-14 text-white/15 transition-all duration-500 group-hover:scale-110 group-hover:text-accent-500/40"
                  />
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-steel-950/90 to-transparent p-4 sm:p-5">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.06em] text-accent-400 hyphens-auto">
                    {project.category}
                  </span>
                  <p className="mt-1 font-display text-sm font-semibold leading-tight text-white hyphens-auto sm:text-base">
                    {project.title}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-steel-500">
            Sie möchten konkrete Referenzen sehen?{" "}
            <a href="#kontakt" className="font-semibold text-accent-600 hover:text-accent-700">
              Sprechen Sie uns an.
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
