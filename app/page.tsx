import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Quality } from "@/components/sections/Quality";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

// Strukturierte Daten für lokale SEO (LocalBusiness).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.legalName,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  founder: { "@type": "Person", name: site.owner },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: "DE",
  },
  areaServed: "DE",
  knowsAbout: ["Metallbau", "Schweißtechnik", "Edelstahl", "Stahlbau", "Aluminium"],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.summary },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Quality />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
