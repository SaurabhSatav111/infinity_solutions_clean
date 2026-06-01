import { Reveal, SectionHeader } from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const projects = [
  { image: project1, t: "Helix Pack v3", d: "Modular sustainable packaging system deployed across 22 SKUs." },
  { image: project2, t: "Aether Line", d: "Autonomous bottling line with self-calibrating vision QC." },
  { image: project3, t: "Forge OS", d: "Plant-wide operating layer unifying 14 legacy machines." },
  { image: project4, t: "Project Nova", d: "Carbon-negative composite tray launched with EU partners." },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Industrial projects, <span className="text-gradient-orange">delivered at scale</span></>}
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06}>
              <article className="group relative overflow-hidden rounded-3xl glass-strong border-border hover:border-primary/40 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.t}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
                <div className="p-7 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{p.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-md">{p.d}</p>
                  </div>
                  <a href="#contact" className="shrink-0 w-11 h-11 rounded-xl glass flex items-center justify-center text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
