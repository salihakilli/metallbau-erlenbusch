import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export function LegalShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="bg-white pb-24 pt-32 sm:pt-40">
        <Container>
          <a
            href="/"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent-700 transition-colors hover:text-accent-600"
          >
            ← Zurück zur Startseite
          </a>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-steel-950">
            {title}
          </h1>
          <div className="legal mt-8 max-w-3xl">{children}</div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
