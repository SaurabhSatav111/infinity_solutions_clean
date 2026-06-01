import { Reveal, SectionHeader } from "./Reveal";

export function Industries() {
  const list = [
    {
      icon: "💊",
      title: "Pharmaceutical",
      description:
        "Compliant monocartons, blister packs and printed cartons meeting strict pharma packaging standards.",
    },
    {
      icon: "🛒",
      title: "FMCG & Retail",
      description:
        "High-volume, vibrant packaging for consumer goods — built for shelf appeal and brand consistency.",
    },
    {
      icon: "🍔",
      title: "Food & Beverage",
      description:
        "Food-grade, hygienic and sustainable packaging for snacks, beverages, bakery and restaurant brands.",
    },
    {
      icon: "📦",
      title: "E-Commerce",
      description:
        "Durable, branded corrugated boxes and mailers designed for safe last-mile delivery.",
    },
    {
      icon: "💄",
      title: "Beauty & Personal Care",
      description:
        "Premium rigid boxes, folding cartons and flexible pouches for cosmetics and personal care brands.",
    },
    {
      icon: "🏥",
      title: "Healthcare & Diagnostics",
      description:
        "Precision printed packaging for diagnostic kits, medical devices and healthcare consumables.",
    },
  ];

  return (
    <section id="industries" className="relative py-28 lg:py-36 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Industries We Serve"
          title={<>Tailored packaging for <span className="text-gradient-orange">your industry</span></>}
          subtitle="We deliver specialized packaging solutions across a wide range of industries — each with its own quality, compliance and branding requirements."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="relative h-full p-8 rounded-2xl border border-border/80 bg-card shadow-sm hover:shadow-elevated hover:-translate-y-1.5 hover:border-primary/30 transition-all duration-300 flex flex-col">
                <div className="text-4xl mb-5 flex items-center justify-center w-14 h-14 rounded-2xl bg-surface/50 border border-border/10 select-none">
                  {item.icon}
                </div>
                <h4 className="font-display text-xl font-bold text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-16 text-center flex flex-col items-center justify-center gap-4">
          <p className="text-sm sm:text-base text-muted-foreground/90 font-medium">
            Don't see your industry? We work with businesses of all types.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform text-sm"
          >
            Talk to Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
