import { Reveal, SectionHeader } from "./Reveal";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const projects = [
  {
    image: project1,
    t: "Pharmaceutical Monocartons",
    d: "Custom printed monocartons for a Pune-based pharma company — 4-color offset printing with UV coating and serialization.",
    tag: "Pharma · Monocartons",
  },
  {
    image: project2,
    t: "Food Grade Corrugated Boxes",
    d: "Double-wall corrugated shipping boxes for an FMCG brand — food safe, moisture resistant, custom branded.",
    tag: "FMCG · Corrugated Boxes",
  },
  {
    image: project3,
    t: "Premium Rigid Boxes",
    d: "Luxury rigid boxes with magnetic closure for a retail brand's festive gift packaging line.",
    tag: "Retail · Rigid Boxes",
  },
  {
    image: project4,
    t: "Flexible Stand-Up Pouches",
    d: "Multilayer flexible pouches for a food startup — resealable zip-lock with high-barrier film for extended shelf life.",
    tag: "Food & Beverage · Flexible Printing",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Our <span className="text-gradient-orange">Work</span></>}
          subtitle="A glimpse of packaging solutions we have delivered for our clients across industries."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06}>
              <article className="group h-full relative overflow-hidden rounded-3xl glass-strong border border-border hover:border-primary/40 transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="relative h-64 overflow-hidden border-b border-border/40">
                    <img
                      src={p.image}
                      alt={p.t}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                  
                  <div className="p-7">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {p.tag}
                    </span>

                    <h3 className="font-display text-2xl font-bold mt-4 text-foreground">{p.t}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  </div>
                </div>

                <div className="px-7 pb-7">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-primary/30 hover:border-primary hover:bg-primary/5 text-sm font-semibold text-foreground transition-all duration-300 w-full shadow-sm hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Request Similar
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground/80 flex items-center justify-center gap-1.5 italic">
            📷 Real project photos coming soon — contact us to discuss your requirements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

