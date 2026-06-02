import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".animate-on-scroll")
    );

    if (targets.length === 0) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.1) {
            const target = entry.target as HTMLElement;
            target.classList.add("is-visible");
            observerInstance.unobserve(target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, []);
}
