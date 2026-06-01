import { Reveal } from "./Reveal";
import { Trophy, ShieldCheck, Leaf, Truck } from "lucide-react";

export function TrustStrip() {
  const clients = [
    "Pharma Company, Pune",
    "FMCG Brand, Mumbai",
    "Food Startup, Nashik",
    "Retail Chain, Ahmedabad",
    "E-Commerce Brand, Bangalore",
    "Healthcare Co., Hyderabad",
  ];

  const badges = [
    {
      icon: Trophy,
      title: "20+ Years in Business",
      desc: "Two decades of packaging & printing excellence since 2004.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assured",
      desc: "Rigorous offset & flexo inspection to guarantee premium output.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Options",
      desc: "Sustainable and biodegradable material choices for green brands.",
    },
    {
      icon: Truck,
      title: "Pan-India Delivery",
      desc: "Fast, reliable transit network across all states and major hubs.",
    },
  ];

  return (
    <section className="relative py-16 bg-surface/60 border-y border-border/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header label */}
        <Reveal className="text-center">
          <h3 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
            Trusted by Businesses Across India
          </h3>
        </Reveal>

        {/* Horizontal Logo Strip */}
        <Reveal delay={0.05} className="mt-8">
          <div className="flex overflow-x-auto gap-4 py-3 no-scrollbar scroll-smooth justify-start lg:justify-center -mx-6 px-6">
            {clients.map((c, idx) => (
              <div
                key={idx}
                className="shrink-0 px-6 py-3.5 rounded-xl border border-border/40 bg-card text-xs sm:text-sm font-medium text-muted-foreground/80 shadow-sm hover:border-primary/20 transition-all duration-300 flex items-center justify-center whitespace-nowrap"
              >
                {c}
              </div>
            ))}
          </div>
          <div className="text-center text-[11px] text-muted-foreground/60 italic mt-3">
            Client logos will be updated with permission.
          </div>
        </Reveal>

        {/* Separator */}
        <Reveal delay={0.1}>
          <div className="my-10 border-t border-border/40" />
        </Reveal>

        {/* Trust Badges */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, idx) => (
            <Reveal key={idx} delay={0.12 + idx * 0.05}>
              <div className="flex gap-4 p-5 rounded-2xl border border-border/50 bg-card/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 h-full">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <b.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base leading-tight">
                    {b.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
