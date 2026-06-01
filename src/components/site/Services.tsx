import { useEffect, useRef, useState } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import { Package, Boxes, UtensilsCrossed, Box, Layers, Gift, Printer, Palette, Coffee, ArrowUpRight } from "lucide-react";

import monocartonsImage from "@/assets/services/monocartons-folding-cartons.png";
import clamshellImage from "@/assets/services/clamshell-tray-cartons.png";
import foodPackagingImage from "@/assets/services/food-packaging-boxes.png";
import corrugatedImage from "@/assets/services/corrugated-boxes.png";
import flexiblePrintingImage from "@/assets/services/flexible-printing.png";
import rigidBoxesImage from "@/assets/services/rigid-boxes.png";
import commercialPrintingImage from "@/assets/services/commercial-printing.png";
import designingBrandingImage from "@/assets/services/designing-branding.png";
import paperGlassImage from "@/assets/services/paper-glass-printing.png";

const services = [
  {
    icon: Package,
    t: "Monocartons & Folding Cartons",
    d: "Cartons with brilliant color graphics and seemingly endless shape & configuration possibilities.",
    image: monocartonsImage,
  },
  {
    icon: Boxes,
    t: "Clamshell & Tray Cartons",
    d: "Complete packaging solutions for fast food, confectionery and bakery products.",
    image: clamshellImage,
  },
  {
    icon: UtensilsCrossed,
    t: "Food Packaging Boxes",
    d: "Safe, hygienic and food grade packaging solutions tailored for the F&B industry.",
    image: foodPackagingImage,
  },
  {
    icon: Box,
    t: "Corrugated Boxes",
    d: "Boxes for shipping and storage with fluting options — custom printed or plain.",
    image: corrugatedImage,
  },
  {
    icon: Layers,
    t: "Flexible Printing",
    d: "Multilayer flexible packaging, stand-up pouches & rollstock engineered for your product formulation.",
    image: flexiblePrintingImage,
  },
  {
    icon: Gift,
    t: "Rigid Boxes",
    d: "Premium rigid boxes that elevate the unboxing experience and protect high-value products.",
    image: rigidBoxesImage,
  },
  {
    icon: Printer,
    t: "Commercial Printing",
    d: "Printing services for all business communication — creating rich, textured and engaging experiences.",
    image: commercialPrintingImage,
  },
  {
    icon: Palette,
    t: "Designing & Branding",
    d: "A complete range of creative services & innovative design solutions to grow your business.",
    image: designingBrandingImage,
  },
  {
    icon: Coffee,
    t: "Customized Paper Glass Printing",
    d: "Elevate your brand with high-quality, affordable customized paper glass printing.",
    image: paperGlassImage,
  },
];

export function Services() {
  const col1 = [services[0], services[3], services[6]];
  const col2 = [services[1], services[4], services[7]];
  const col3 = [services[2], services[5], services[8]];

  return (
    <section id="services" className="relative py-28 lg:py-36 bg-surface/40">
      <div className="absolute inset-0 grid-texture opacity-25 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Services"
          title={<>Exceptional <span className="text-gradient-orange">packaging & printing</span> services</>}
          subtitle="We solve every packaging, printing and design need — with options galore for branding and digital marketing."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          <ServiceColumn cards={col1} colIndex={0} />
          <ServiceColumn cards={col2} colIndex={1} />
          <ServiceColumn cards={col3} colIndex={2} />
        </div>
      </div>
    </section>
  );
}

function ServiceColumn({ cards, colIndex }: { cards: typeof services; colIndex: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const scrollData = useRef({
    currentY: 0,
    targetY: 0,
    maxScroll: 0,
    isHovered: false,
    startY: 0,
    isDragging: false,
  });

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const updateMaxScroll = () => {
      const containerHeight = container.getBoundingClientRect().height;
      const contentHeight = content.getBoundingClientRect().height;
      scrollData.current.maxScroll = Math.max(0, contentHeight - containerHeight);
    };

    updateMaxScroll();
    
    // Smooth delay for image rendering loads
    const timer = setTimeout(updateMaxScroll, 500);

    const handleWheel = (e: WheelEvent) => {
      if (!scrollData.current.isHovered) return;
      
      e.preventDefault();
      
      // Update target and clamp position
      scrollData.current.targetY -= e.deltaY * 0.85;
      scrollData.current.targetY = Math.max(
        -scrollData.current.maxScroll,
        Math.min(0, scrollData.current.targetY)
      );
    };

    const handleTouchStart = (e: TouchEvent) => {
      scrollData.current.startY = e.touches[0].clientY;
      scrollData.current.isDragging = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!scrollData.current.isDragging) return;
      
      e.preventDefault();
      
      const touchY = e.touches[0].clientY;
      const deltaY = touchY - scrollData.current.startY;
      scrollData.current.startY = touchY;

      scrollData.current.targetY += deltaY * 1.5;
      scrollData.current.targetY = Math.max(
        -scrollData.current.maxScroll,
        Math.min(0, scrollData.current.targetY)
      );
    };

    const handleTouchEnd = () => {
      scrollData.current.isDragging = false;
    };

    const handleMouseEnter = () => {
      scrollData.current.isHovered = true;
    };

    const handleMouseLeave = () => {
      scrollData.current.isHovered = false;
      scrollData.current.isDragging = false;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", updateMaxScroll);

    let rafId: number;
    const tick = () => {
      const diff = scrollData.current.targetY - scrollData.current.currentY;
      
      if (Math.abs(diff) < 0.05) {
        scrollData.current.currentY = scrollData.current.targetY;
      } else {
        scrollData.current.currentY += diff * 0.095;
      }

      if (content) {
        content.style.transform = `translateY(${scrollData.current.currentY}px) translateZ(0)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", updateMaxScroll);
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [isDesktop]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${
        isDesktop
          ? "h-[720px] overflow-hidden select-none touch-none border border-border/40 rounded-3xl bg-surface/10 py-4 shadow-inner"
          : "h-auto"
      }`}
    >
      <div
        ref={contentRef}
        className={`flex flex-col gap-6 px-4 ${
          isDesktop ? "will-change-transform py-2" : ""
        }`}
        style={isDesktop ? { transform: "translateY(0px) translateZ(0)" } : undefined}
      >
        {cards.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.08}>
            <article className="group relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-elevated transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
              <div
                className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at 50% 0%, oklch(0.88 0.18 130 / 0.14), transparent 60%)",
                }}
              />

              <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-surface">
                <img
                  src={s.image}
                  alt={s.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="relative p-7">
                <div className="w-12 h-12 rounded-xl glass-strong text-primary flex items-center justify-center group-hover:shadow-glow transition-shadow">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                  Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

