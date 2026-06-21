"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/layout/Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollen sperren, solange das mobile Menü offen ist.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Solider Hintergrund: beim Scrollen oder bei geöffnetem Menü.
  const solid = scrolled || open;
  const tone = solid ? "dark" : "light";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-steel-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo tone={tone} />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                  solid ? "text-steel-700" : "text-steel-200"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#kontakt"
              className={`inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition-colors ${
                solid
                  ? "bg-steel-950 text-white hover:bg-accent-600"
                  : "bg-accent-600 text-white hover:bg-accent-700"
              }`}
            >
              Anfrage stellen
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-sm border transition-colors lg:hidden ${
              solid
                ? "border-steel-300 text-steel-900 hover:bg-steel-100"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {/* Mobiles Menü */}
      {open && (
        <div className="border-t border-steel-200 bg-white lg:hidden">
          <Container className="py-6">
            <nav className="flex flex-col" aria-label="Mobile Navigation">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-steel-100 py-4 text-base font-medium text-steel-800 transition-colors hover:text-accent-600"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent-600 px-5 py-4 text-base font-semibold text-white"
            >
              Anfrage stellen
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a
              href={site.phoneHref}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-steel-300 px-5 py-4 text-base font-semibold text-steel-900"
            >
              <Icon name="phone" className="h-4 w-4" />
              Anrufen
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
