import { ArrowRight, ChevronDown } from "lucide-react";
import { lazy, Suspense, useEffect, useState, useRef } from "react";

const HeroScene = lazy(() =>
  import("./HeroScene").then((m) => ({ default: m.HeroScene })),
);

interface StatCardProps {
  target: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatCard({ target, suffix, label, delay }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isPopping, setIsPopping] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setCount(target);
      return;
    }

    let animationFrameId: number;
    let timeoutId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          observer.disconnect();

          timeoutId = window.setTimeout(() => {
            let startTimestamp: number | null = null;
            const duration = 2000;

            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);

              // Easing: ease-out (starts fast, slows down at the end)
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const currentCount = Math.floor(easeProgress * target);

              setCount(currentCount);

              if (progress < 1) {
                animationFrameId = window.requestAnimationFrame(step);
              } else {
                setCount(target);
                // Subtle pop scale effect
                setIsPopping(true);
                setTimeout(() => setIsPopping(false), 300);
              }
            };

            animationFrameId = window.requestAnimationFrame(step);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [target, delay]);

  return (
    <div
      ref={cardRef}
      className="glass rounded-xl p-4 border border-primary/10 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
    >
      <div
        className="font-display text-2xl font-bold text-gradient-orange select-none transition-transform duration-300 inline-block origin-left"
        style={{
          transform: isPopping ? "scale(1.08)" : "scale(1)",
        }}
      >
        {count}
        {count === target ? suffix : ""}
      </div>
      <div className="text-xs text-muted-foreground mt-1.5 leading-snug">{label}</div>
    </div>
  );
}

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
          <div
            className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-semibold text-muted-foreground mb-8"
            style={{ transitionDelay: "0.05s" }}
          >
            Pune's Trusted Packaging Partner Since 2004
          </div>

          <h1
            className="animate-on-scroll font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight"
            style={{ transitionDelay: "0.1s" }}
          >
            Premium <span className="text-gradient-orange">Packaging & Printing</span> Solutions for Growing Brands
          </h1>

          <p
            className="animate-on-scroll mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
            style={{ transitionDelay: "0.18s" }}
          >
            Infinity Solutions is Pune's one-stop packaging and printing manufacturer — delivering monocartons, corrugated boxes, flexible printing, rigid boxes and branding solutions with 20+ years of expertise. Serving pharma, FMCG, food and retail businesses across India.
          </p>

          <div
            className="animate-on-scroll mt-9 flex flex-col gap-5"
            style={{ transitionDelay: "0.3s" }}
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
          </div>

          <div
            className="animate-on-scroll mt-12 grid grid-cols-2 sm:grid-cols-4 max-w-2xl gap-4"
            style={{ transitionDelay: "0.4s" }}
          >
            <StatCard target={20} suffix="+" label="Years of Experience" delay={0} />
            <StatCard target={500} suffix="+" label="Happy Clients" delay={150} />
            <StatCard target={9} suffix="" label="Services Offered" delay={300} />
            <StatCard target={100} suffix="%" label="Quality Assured" delay={450} />
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

      <a
        href="#about"
        className="animate-on-scroll animate-bounce-slow absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest"
        style={{ transitionDelay: "0.6s" }}
      >
        Scroll <ChevronDown className="w-4 h-4 text-primary" />
      </a>
    </section>
  );
}
