import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";

import appCss from "../styles.css?url";
import { useScrollReveal } from "@/lib/useScrollReveal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Infinity Solutions — Packaging, Printing & Branding Manufacturer in Pune" },
      { name: "description", content: "Infinity Solutions is a Pune-based packaging and printing manufacturer with 20+ years of experience. We offer monocartons, corrugated boxes, flexible printing, rigid boxes, food packaging and branding solutions across India." },
      { name: "author", content: "Infinity Solutions, Pune" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "IN-MH" },
      { name: "geo.placename", content: "Pune, Maharashtra, India" },
      { property: "og:title", content: "Infinity Solutions — Packaging & Printing Manufacturer in Pune" },
      { property: "og:description", content: "20+ years of specialized packaging, printing and branding solutions delivered from Pune, India. Monocartons, corrugated boxes, flexible printing and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@InfinitySolPune" },
      { name: "twitter:title", content: "Infinity Solutions — Packaging & Printing in Pune" },
      { name: "twitter:description", content: "Pune's trusted packaging and printing manufacturer. 20+ years experience. Monocartons, corrugated boxes, flexible printing, rigid boxes and branding." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c9752bf4-293a-4472-8efb-4d9ff3aa70d3/id-preview-bdf7850e--25aef74a-5b18-4f2d-ab7c-f6df1800d6ff.lovable.app-1779968664428.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c9752bf4-293a-4472-8efb-4d9ff3aa70d3/id-preview-bdf7850e--25aef74a-5b18-4f2d-ab7c-f6df1800d6ff.lovable.app-1779968664428.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }} />
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Infinity Solutions",
              "description": "Packaging, printing and branding manufacturer in Pune with 20+ years of experience.",
              "url": "https://infinity-solutions-nine.vercel.app",
              "telephone": "+91-9326112233",
              "email": "info@infinitysolutions.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "O10, 3rd Floor, Bharat Arcade, Near Pulgate Police Chowky, Pulgate, Camp",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.5204",
                "longitude": "73.8567"
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "priceRange": "₹₹"
            })
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  useScrollReveal();
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <MobileCTA />
      <BackToTopButton />
      <a
        href="https://wa.me/919326112233"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20ba59] transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Chat with us on WhatsApp"
      >
        <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute right-16 scale-0 rounded bg-secondary border border-border/10 px-3 py-1.5 text-xs font-medium text-secondary-foreground shadow-md transition-all duration-200 origin-right group-hover:scale-100 whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </QueryClientProvider>
  );
}

function MobileCTA() {
  const [showCTA, setShowCTA] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleScroll = () => {
      const nextShow = window.scrollY > 600 && !contactVisible;
      setShowCTA(nextShow);
    };

    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId !== null) {
        return;
      }
      rafId = window.requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
    };
  }, [contactVisible]);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const contactSection = document.querySelector("#contact");
    if (!contactSection) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setContactVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(contactSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToContact = () => {
    const contactTarget = document.querySelector("#contact");
    if (contactTarget) {
      contactTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className={showCTA ? "mobile-cta-bar is-visible" : "mobile-cta-bar"}>
        <div className="mobile-cta-actions">
          <a
            className="mobile-cta-button whatsapp-button"
            href="https://wa.me/919326112233"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp Us
          </a>
          <button type="button" className="mobile-cta-button quote-button" onClick={scrollToContact}>
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let rafId: number | null = null;

    const updateProgress = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = Math.max(documentHeight - windowHeight, 1);
      const nextProgress = Math.min(100, Math.max(0, (scrollY / maxScroll) * 100));
      setProgress(nextProgress);
      rafId = null;
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="scroll-progress-shell" aria-hidden="true">
      <div className="scroll-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let rafId: number | null = null;

    const updateVisibility = () => {
      setVisible(window.scrollY > 400);
      rafId = null;
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateVisibility);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateVisibility();

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={visible ? "back-to-top-button visible" : "back-to-top-button"}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
