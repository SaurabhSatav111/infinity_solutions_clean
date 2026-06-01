import { Reveal, SectionHeader } from "./Reveal";
import { Zap, Target, Factory, Leaf, Coins, Handshake, ArrowRight } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Zap,
      title: "Fast Turnaround",
      desc: "We understand deadlines. Most orders are processed and dispatched faster than industry standard — without compromising quality.",
    },
    {
      icon: Target,
      title: "Customized Solutions",
      desc: "No two brands are the same. We offer fully bespoke packaging — custom sizes, materials, finishes and print options tailored to your exact needs.",
    },
    {
      icon: Factory,
      title: "In-House Production",
      desc: "Design, printing and packaging all happen under one roof at our Pune facility — giving you faster delivery, better quality control and lower costs.",
    },
    {
      icon: Leaf,
      title: "Sustainable Options",
      desc: "We offer eco-friendly and recyclable packaging materials to help your brand meet sustainability goals and reduce environmental impact.",
    },
    {
      icon: Coins,
      title: "Competitive Pricing",
      desc: "20+ years of supplier relationships mean we can offer premium quality packaging at highly competitive prices — for businesses of any size.",
    },
    {
      icon: Handshake,
      title: "Dedicated Support",
      desc: "From first inquiry to final delivery, you get a dedicated point of contact who understands your business and is available on call and WhatsApp.",
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-28 lg:py-36 bg-surface/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Why Partner With Us"
          title="Why Choose Infinity Solutions"
          subtitle="We are not just a vendor — we are your packaging partner. Here is what sets us apart from the rest."
        />

        {/* 6 Grid cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            // Alternate the icon background between primary brand color (filled) and light version (primary/10)
            const iconBgClass =
              idx % 2 === 0
                ? "bg-primary text-primary-foreground"
                : "bg-primary/10 text-primary border border-primary/20";

            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="relative h-full p-8 rounded-2xl border border-border/80 bg-card shadow-sm hover:shadow-elevated hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 flex flex-col">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 select-none ${iconBgClass}`}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground">
                    {r.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-grow">
                    {r.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Full-width Navy CTA Banner */}
        <Reveal delay={0.4} className="mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-[#1A2744] text-white p-8 sm:p-12 shadow-elevated border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 grid-texture opacity-10 pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-2 text-center md:text-left">
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to elevate your packaging?
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Get a free consultation and quote within 2 hours.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-[#1A2744] hover:bg-gray-100 font-bold transition-all shadow-md hover:scale-[1.03] active:scale-[0.98] text-sm"
              >
                Get a Free Quote <ArrowRight className="w-4.5 h-4.5 text-primary" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
