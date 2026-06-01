import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";

const HeroScene = lazy(() =>
  import("./HeroScene").then((m) => ({ default: m.HeroScene })),
);

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-gradient-hero noise">
      <div className="absolute inset-0 grid-texture opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[140px] animate-glow pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-semibold text-muted-foreground mb-8"
          >
            Pune's Trusted Packaging Partner Since 2004
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight"
          >
            Premium <span className="text-gradient-orange">Packaging & Printing</span> Solutions for Growing Brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Infinity Solutions is Pune's one-stop packaging and printing manufacturer — delivering monocartons, corrugated boxes, flexible printing, rigid boxes and branding solutions with 20+ years of expertise. Serving pharma, FMCG, food and retail businesses across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-5"
          >
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.03] transition-transform"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass border border-primary/40 text-foreground font-semibold hover:bg-primary/10 transition-colors"
              >
                View Our Services
              </a>
            </div>
            
            <div className="text-xs text-muted-foreground/80 flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold">
              <span>✅ No minimum order pressure</span>
              <span className="text-muted-foreground/30">|</span>
              <span>✅ Pan-India delivery</span>
              <span className="text-muted-foreground/30">|</span>
              <span>✅ Response within 2 hours</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 max-w-2xl gap-4"
          >
            {[
              { k: "20+", v: "Years of Experience" },
              { k: "500+", v: "Happy Clients" },
              { k: "9", v: "Services Offered" },
              { k: "100%", v: "Quality Assured" },
            ].map((s) => (
              <div
                key={s.v}
                className="glass rounded-xl p-4 border border-primary/10 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="font-display text-2xl font-bold text-gradient-orange">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1.5 leading-snug">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3D + floating cards */}
        <div className="relative h-[480px] lg:h-[600px]">
          <div className="absolute inset-0">
            {mounted && (
              <Suspense fallback={null}>
                <HeroScene />
              </Suspense>
            )}
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest"
      >
        Scroll <ChevronDown className="w-4 h-4 text-primary" />
      </motion.a>
    </section>
  );
}
