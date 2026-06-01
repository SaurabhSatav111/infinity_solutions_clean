import { Reveal, SectionHeader } from "./Reveal";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Infinity Solutions has been our trusted packaging partner for over 5 years. Their monocartons are consistently high quality and always delivered on time.",
    name: "Rajesh Sharma",
    designation: "Purchase Manager",
    city: "Pune",
  },
  {
    quote: "From design to delivery, the team is responsive and professional. Best corrugated box supplier we have worked with in Pune.",
    name: "Priya Mehta",
    designation: "Operations Head",
    city: "Mumbai",
  },
  {
    quote: "Their flexible packaging for our food products meets all quality standards. Highly recommend for any FMCG brand.",
    name: "Amit Patel",
    designation: "Founder",
    city: "Ahmedabad",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Trusted by leaders"
          title="What Our Clients Say"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="relative h-full flex flex-col justify-between p-8 rounded-2xl border border-border/80 bg-card shadow-elevated hover:-translate-y-1.5 hover:border-primary/40 transition-all duration-300">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <p className="text-foreground/90 italic leading-relaxed text-sm sm:text-base mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-border/50">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {t.designation}, {t.city}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

