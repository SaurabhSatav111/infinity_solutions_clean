import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import logoImage from "@/assets/logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => l.href.substring(1));
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-md shadow-md border-b border-border/20"
            : "py-5 bg-white/70 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center group shrink-0">
            <img src={logoImage} alt="Infinity Solutions" className="h-12 sm:h-14 w-auto object-contain" />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1.5 xl:gap-3">
            {links.map((l) => {
              const isActive = activeSection === l.href.substring(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`relative px-2.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                    {isActive && (
                      <span className="absolute left-2.5 right-2.5 -bottom-1 h-0.5 bg-primary rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Call CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919326112233"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-primary/40 hover:border-primary text-foreground text-sm font-semibold transition-all hover:bg-primary/5"
            >
              <Phone className="w-4 h-4 text-primary" /> Call Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow hover:scale-[1.02] transition-all"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-xl glass border border-border/40 hover:bg-primary/10 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm lg:hidden"
            />
            {/* Full-screen slide-in menu from right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm z-50 bg-white shadow-2xl flex flex-col justify-between p-6 lg:hidden border-l border-border/40"
            >
              {/* Top Bar with Close Button */}
              <div className="flex items-center justify-between">
                <a href="#home" onClick={() => setOpen(false)} className="flex items-center">
                  <img src={logoImage} alt="Infinity Solutions" className="h-10 w-auto object-contain" />
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-xl border border-border/40 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Vertical Navigation Links */}
              <nav className="my-auto py-8">
                <ul className="flex flex-col gap-5">
                  {links.map((l) => {
                    const isActive = activeSection === l.href.substring(1);
                    return (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className={`block py-1 text-lg font-bold transition-colors ${
                            isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {l.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Bottom Drawer CTAs */}
              <div className="space-y-4 pt-6 border-t border-border/40">
                <a
                  href="tel:+919326112233"
                  className="flex items-center gap-3 py-2.5 px-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-semibold"
                >
                  <Phone className="w-4.5 h-4.5 text-primary" />
                  <span>+91 93261 12233</span>
                </a>

                <a
                  href="mailto:info@infinitysolutions.in"
                  className="flex items-center gap-3 py-2.5 px-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-semibold"
                >
                  <Mail className="w-4.5 h-4.5 text-primary" />
                  <span className="break-all">info@infinitysolutions.in</span>
                </a>

                <a
                  href="https://wa.me/919326112233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] transition-all text-sm font-bold shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
