import { Github, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import logoImage from "@/assets/logo.png";

export function Footer() {
  const cols = [
    { t: "Company", links: ["About", "Our Advantage", "Sustainability", "Contact"] },
    { t: "Packaging", links: ["Monocartons", "Corrugated Boxes", "Food Packaging", "Rigid Boxes"] },
    { t: "Services", links: ["Flexible Printing", "Commercial Printing", "Designing & Branding", "Paper Glass Printing"] },
  ];
  return (
    <footer className="relative pt-24 pb-10 bg-secondary text-secondary-foreground border-t border-border [&_.text-muted-foreground]:text-secondary-foreground/70 [&_.glass]:bg-white/5 [&_.glass]:border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <a href="#home" className="inline-flex items-center bg-white px-3 py-1.5 rounded-lg shadow-glow">
              <img src={logoImage} alt="Infinity Solutions" className="h-20 w-auto object-contain" />
            </a>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              A one-stop designing, packaging & printing firm — 20+ years delivering speedy, specialized and sustainable solutions from Pune, India.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-7 glass rounded-xl p-1.5 flex items-center max-w-md">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none"
              />
              <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold">
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.t}>
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">{c.t}</div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Infinity Solutions. All rights reserved.</div>
          <div className="flex items-center gap-2">
            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
