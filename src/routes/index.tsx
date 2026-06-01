import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Industries } from "@/components/site/Industries";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Infinity Solutions — Packaging, Printing & Branding Services in Pune" },
      { name: "description", content: "Infinity Solutions is a one-stop designing, packaging and printing firm in Pune offering monocartons, corrugated boxes, food packaging, flexible printing, rigid boxes, branding and more." },
      { property: "og:title", content: "Infinity Solutions — Packaging & Printing Services" },
      { property: "og:description", content: "20+ years of exceptional packaging, printing and branding solutions delivered with speed, flexibility and sustainability." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Industries />
      <Process />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
