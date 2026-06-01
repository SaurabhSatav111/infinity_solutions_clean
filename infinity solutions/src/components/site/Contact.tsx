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
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform"
              >
                Send Request <Send className="w-4 h-4" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { icon: Phone, t: "Phone", d: "+91 9326112233" },
                { icon: Mail, t: "Email", d: "infinitysolutions.mail@gmail.com" },
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
