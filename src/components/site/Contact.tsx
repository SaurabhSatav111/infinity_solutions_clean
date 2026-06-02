import { Reveal, SectionHeader } from "./Reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

const industryOptions = [
  "Pharmaceutical",
  "FMCG & Retail",
  "Food & Beverage",
  "E-Commerce",
  "Beauty & Personal Care",
  "Healthcare & Diagnostics",
  "Other",
];

const serviceOptions = [
  "Monocartons & Folding Cartons",
  "Corrugated Boxes",
  "Flexible Printing",
  "Rigid Boxes",
  "Food Packaging Boxes",
  "Commercial Printing",
  "Designing & Branding",
  "Paper Glass Printing",
  "Not sure yet",
];

type FormValues = {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  industry: string;
  services: string[];
  projectBrief: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type FormTouched = Partial<Record<keyof FormValues, boolean>>;

const initialValues: FormValues = {
  fullName: "",
  phone: "",
  email: "",
  company: "",
  industry: "",
  services: [],
  projectBrief: "",
};

const validateFieldValue = (name: keyof FormValues, value: string): string | undefined => {
  if (name === "fullName") {
    return value.trim() ? undefined : "Full name is required.";
  }

  if (name === "phone") {
    const digits = value.replace(/\D/g, "");
    if (!digits) {
      return "Phone number is required.";
    }
    if (!/^([6-9]\d{9})$/.test(digits)) {
      return "Enter a valid 10-digit Indian phone number.";
    }
    return undefined;
  }

  if (name === "email") {
    if (!value.trim()) {
      return "Work email is required.";
    }
    const emailMatch = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    return emailMatch ? undefined : "Enter a valid email address.";
  }

  if (name === "industry") {
    return value ? undefined : "Please select your industry.";
  }

  return undefined;
};

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<FormTouched>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const firstName = useMemo(() => {
    const name = values.fullName.trim().split(" ")[0] || "there";
    return name;
  }, [values.fullName]);

  const isValidField = (field: keyof FormValues) => {
    const error = validateFieldValue(field, values[field]);
    return error === undefined && values[field].toString().trim().length > 0;
  };

  const handleFieldChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateFieldValue(field, value) }));
    }
  };

  const handleServiceToggle = (service: string) => {
    setValues((prev) => {
      const selected = prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service];
      return { ...prev, services: selected };
    });
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateFieldValue(field, values[field]) }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requiredFields: Array<keyof FormValues> = ["fullName", "phone", "email", "industry"];
    const nextErrors: FormErrors = {};

    requiredFields.forEach((field) => {
      const error = validateFieldValue(field, values[field]);
      if (error) {
        nextErrors[field] = error;
      }
    });

    setTouched({
      fullName: true,
      phone: true,
      email: true,
      industry: true,
      company: true,
      services: true,
      projectBrief: true,
    });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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
            <div className="glass-strong rounded-3xl p-8 sm:p-10">
              {isSubmitted ? (
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
                    ✅
                  </div>
                  <h3 className="mt-8 text-3xl font-semibold text-foreground">Thank you, {firstName}!</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xl mx-auto">
                    We have received your request and will get back to you within 2 business hours. You can also reach us directly on WhatsApp for a faster response.
                  </p>
                  <a
                    href="https://wa.me/919326112233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center w-full rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#20ba59] transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Full Name *</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={values.fullName}
                          onChange={(e) => handleFieldChange("fullName", e.target.value)}
                          onBlur={() => handleBlur("fullName")}
                          placeholder="Your full name"
                          className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none ${
                            touched.fullName && errors.fullName
                              ? "border-red-400 focus:border-red-500"
                              : "border-border focus:border-primary/60"
                          } bg-input`}
                        />
                        {isValidField("fullName") && (
                          <span className="validation-check">✓</span>
                        )}
                      </div>
                      {touched.fullName && errors.fullName && (
                        <p className="mt-2 text-xs text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone Number *</label>
                      <div className="relative">
                        <span className="input-prefix">+91</span>
                        <input
                          type="tel"
                          value={values.phone}
                          onChange={(e) => handleFieldChange("phone", e.target.value)}
                          onBlur={() => handleBlur("phone")}
                          placeholder="98765 43210"
                          className={`mt-2 w-full rounded-xl border bg-input px-4 py-3 pl-16 text-sm transition-colors focus:outline-none ${
                            touched.phone && errors.phone
                              ? "border-red-400 focus:border-red-500"
                              : "border-border focus:border-primary/60"
                          }`}
                        />
                        {isValidField("phone") && (
                          <span className="validation-check">✓</span>
                        )}
                      </div>
                      {touched.phone && errors.phone && (
                        <p className="mt-2 text-xs text-red-500">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Work Email *</label>
                      <div className="relative">
                        <input
                          type="email"
                          value={values.email}
                          onChange={(e) => handleFieldChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          placeholder="you@company.com"
                          className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none ${
                            touched.email && errors.email
                              ? "border-red-400 focus:border-red-500"
                              : "border-border focus:border-primary/60"
                          } bg-input`}
                        />
                        {isValidField("email") && (
                          <span className="validation-check">✓</span>
                        )}
                      </div>
                      {touched.email && errors.email && (
                        <p className="mt-2 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Company Name</label>
                      <input
                        type="text"
                        value={values.company}
                        onChange={(e) => handleFieldChange("company", e.target.value)}
                        placeholder="Your company name"
                        className="mt-2 w-full rounded-xl border border-border bg-input px-4 py-3 text-sm transition-colors focus:outline-none focus:border-primary/60"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Industry *</label>
                    <div className="relative">
                      <select
                        value={values.industry}
                        onChange={(e) => handleFieldChange("industry", e.target.value)}
                        onBlur={() => handleBlur("industry")}
                        className={`mt-2 w-full rounded-xl border bg-input px-4 py-3 text-sm transition-colors focus:outline-none appearance-none ${
                          touched.industry && errors.industry
                            ? "border-red-400 focus:border-red-500"
                            : "border-border focus:border-primary/60"
                        }`}
                      >
                        <option value="" disabled>
                          Select your industry
                        </option>
                        {industryOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <span className="select-arrow">▾</span>
                      {isValidField("industry") && (
                        <span className="validation-check">✓</span>
                      )}
                    </div>
                    {touched.industry && errors.industry && (
                      <p className="mt-2 text-xs text-red-500">{errors.industry}</p>
                    )}
                  </div>

                  <div className="rounded-3xl border border-border bg-surface/70 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-foreground">Services Interested In</p>
                      <p className="text-xs text-muted-foreground">Optional</p>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {serviceOptions.map((service) => (
                        <label
                          key={service}
                          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm transition-all hover:border-primary/50"
                        >
                          <input
                            type="checkbox"
                            checked={values.services.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="h-4 w-4 rounded border-border text-primary accent-primary"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Project Brief</label>
                    <textarea
                      rows={4}
                      value={values.projectBrief}
                      onChange={(e) => handleFieldChange("projectBrief", e.target.value)}
                      placeholder="Tell us about your packaging requirements — quantities, sizes, materials, timeline..."
                      className="mt-2 w-full rounded-xl border border-border bg-input px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-gradient-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send My Request →"}
                  </button>
                  <div className="text-xs text-muted-foreground mt-2">
                    We typically respond within 2 business hours.
                  </div>
                </form>
              )}
            </div>

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
