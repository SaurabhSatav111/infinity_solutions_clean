import { Facebook, Instagram, Linkedin, MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import logoImage from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative pt-24 pb-12 bg-[#1A2744] text-gray-300 border-t border-white/10 font-sans">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src={logoImage}
                alt="Infinity Solutions Logo"
                className="h-10 w-auto bg-white rounded-lg p-1.5 shadow-md"
              />
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Infinity Solutions
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Your trusted packaging & printing partner in Pune since 2004.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: MessageCircle, href: "https://wa.me/919326112233", label: "WhatsApp" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-primary/40 text-gray-400 hover:text-white hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-105"
                >
                  <social.Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Our Services", href: "#services" },
                { name: "Our Process", href: "#process" },
                { name: "Projects", href: "#projects" },
                { name: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Monocartons & Folding Cartons",
                "Corrugated Boxes",
                "Flexible Printing",
                "Rigid Boxes",
                "Food Packaging",
                "Commercial Printing",
                "Designing & Branding",
                "Paper Glass Printing",
              ].map((srv) => (
                <li key={srv}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-xs uppercase tracking-widest text-primary font-bold">
              Get In Touch
            </h4>
            <div className="space-y-4 text-sm text-gray-400">
              <a
                href="tel:+919326112233"
                className="flex items-center gap-3 hover:text-white transition-colors duration-200"
              >
                <div className="w-9 h-9 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <span>+91 93261 12233</span>
              </a>

              <a
                href="mailto:info@infinitysolutions.in"
                className="flex items-center gap-3 hover:text-white transition-colors duration-200"
              >
                <div className="w-9 h-9 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <span className="break-all">info@infinitysolutions.in</span>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mt-0.5">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <span className="leading-relaxed">
                  O10, 3rd Floor, Bharat Arcade, Near Pulgate Police Chowky, Pulgate, Camp, Pune — 411001
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <span>Mon–Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-gray-500">
          <div>
            &copy; 2026 Infinity Solutions. All rights reserved.
          </div>
          <div className="font-mono text-gray-400">
            GST No.: [ADD YOUR GST NUMBER HERE]
          </div>
          <div className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> in Pune, India
          </div>
        </div>
      </div>
    </footer>
  );
}

