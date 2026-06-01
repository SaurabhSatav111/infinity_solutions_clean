import { Reveal, SectionHeader } from "./Reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-surface/40">
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Contact Us"
          title={<>Let's start your <span className="text-gradient-orange">next project</span></>}
          subtitle="For further information about our dynamic packaging, printing and branding services, feel free to reach out."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass-strong rounded-3xl p-8 sm:p-10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" placeholder="Ada Lovelace" />
                <Field label="Work email" type="email" placeholder="ada@company.com" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Company" placeholder="Acme Industrial" />
                <Field label="Industry" placeholder="FMCG · Logistics · …" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Project brief</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your goals, timelines and constraints…"
                  className="mt-2 w-full rounded-xl bg-input border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform w-fit"
                >
                  Send Request <Send className="w-4 h-4" />
                </button>
                <div className="text-xs text-muted-foreground mt-1">
                  We typically respond within 2 business hours.
                </div>
              </div>
            </form>

            <div className="mt-6 flex items-center justify-between flex-wrap gap-4 px-5 py-4 rounded-2xl glass border border-primary/10">
              <span className="text-sm text-muted-foreground font-medium">
                Prefer WhatsApp? Message us directly →
              </span>
              <a
                href="https://wa.me/919326112233"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { icon: Phone, t: "Phone", d: "+91 9326112233" },
                { icon: Mail, t: "Email", d: "info@infinitysolutions.in" },
                { icon: MapPin, t: "Address", d: "O10, 3rd Floor, Bharat Arcade, Near Pulgate Police Chowky, Pulgate, Camp, Pune, Maharashtra 411001" },
              ].map((c) => (
                <div key={c.t} className="glass rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className="font-display font-semibold mt-1">{c.d}</div>
                  </div>
                </div>
              ))}

              <div className="relative h-56 rounded-2xl glass-strong overflow-hidden border border-border shadow-glow">
                <iframe
                  title="Infinity Solutions Location"
                  src="https://maps.google.com/maps?q=Infinity%20Solutions,%20O10,%203rd%20Floor,%20Bharat%20Arcade,%20Near%20Pulgate%20Police%20Chowky,%20Pulgate,%20Camp,%20Pune,%20Maharashtra%20411001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0 filter grayscale contrast-[1.1] opacity-90 hover:grayscale-0 transition-all duration-300"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full rounded-xl bg-input border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors"
      />
    </div>
  );
}
