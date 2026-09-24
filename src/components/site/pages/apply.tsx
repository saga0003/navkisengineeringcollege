"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Mail, Send } from "lucide-react";
import { DEPARTMENTS, SITE } from "@/lib/site-data";
import { useNav } from "@/lib/use-router";
import { CTAButton, SectionHeading, Badge } from "../ui-bits";
import { PageHero } from "../page-hero";
import { useToast } from "@/hooks/use-toast";

export function ApplyPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", program: "", parentName: "", parentPhone: "", message: "",
  });

  function update(k: keyof typeof form, v: string) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.program) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    // Simulate successful submission
    setSubmitted(true);
    toast({ title: "Application received!", description: "Our admissions team will reach out shortly." });
  }

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Apply Online"
        title={<>Begin your <span className="text-gradient">Navkis journey.</span></>}
        description="Fill in your details and our admissions team will reach out within 24 hours to guide you through the next steps."
        crumbs={[{ label: "Admissions", to: "admissions" }, { label: "Apply" }]}
        align="left"
      />

      <section className="section-pad">
        <div className="container-pad">
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <div className="rounded-3xl bg-white border border-border/60 p-10 text-center shadow-premium">
                  <div className="mx-auto h-16 w-16 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy">Application received!</h3>
                  <p className="mt-2 text-muted-ink">
                    Thank you, {form.fullName.split(" ")[0]}. Our admissions team will reach out to you at{" "}
                    <span className="font-semibold text-navy">{form.email}</span> or{" "}
                    <span className="font-semibold text-navy">{form.phone}</span> within 24 hours.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <CTAButton to="home" variant="outline">Back to Home</CTAButton>
                    <CTAButton href={`tel:${SITE.contact.primaryPhoneRaw}`} variant="primary" icon={<Phone className="h-4 w-4" />}>Call Us Now</CTAButton>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="rounded-3xl bg-white border border-border/60 p-6 lg:p-8 shadow-premium">
                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="amber">Step 1 of 1</Badge>
                    <span className="text-sm text-muted-ink">All fields marked * are required</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name *">
                      <input
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                        placeholder="Your full name"
                      />
                    </Field>
                    <Field label="Email *">
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                        placeholder="you@example.com"
                      />
                    </Field>
                    <Field label="Phone Number *">
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                        placeholder="+91 9XXXXXXXXX"
                      />
                    </Field>
                    <Field label="Program of Interest *">
                      <select
                        required
                        value={form.program}
                        onChange={(e) => update("program", e.target.value)}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                      >
                        <option value="">Select a program</option>
                        {DEPARTMENTS.map((d) => (
                          <option key={d.slug} value={d.slug}>
                            {d.name} ({d.level})
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Parent / Guardian Name">
                      <input
                        type="text"
                        value={form.parentName}
                        onChange={(e) => update("parentName", e.target.value)}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                        placeholder="Parent or guardian name"
                      />
                    </Field>
                    <Field label="Parent / Guardian Phone">
                      <input
                        type="tel"
                        value={form.parentPhone}
                        onChange={(e) => update("parentPhone", e.target.value)}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                        placeholder="+91 9XXXXXXXXX"
                      />
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Message (optional)">
                        <textarea
                          rows={3}
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                          placeholder="Tell us about your interests, questions, or anything else we should know."
                        />
                      </Field>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs text-muted-ink">
                      By submitting, you agree to be contacted by Navkis College of Engineering regarding your application.
                    </p>
                    <CTAButton onClick={() => onSubmit({ preventDefault: () => {} } as React.FormEvent)} variant="amber" iconRight={<Send className="h-4 w-4" />}>
                      Submit Application
                    </CTAButton>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="space-y-4"
            >
              <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-6 text-white shadow-premium relative overflow-hidden">
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand/30 blur-2xl" />
                <h3 className="font-display text-lg font-bold">Prefer to talk to a human?</h3>
                <p className="mt-2 text-sm text-white/70">Our admissions team is happy to help.</p>
                <div className="mt-5 space-y-3 text-sm">
                  <a href={`tel:${SITE.contact.primaryPhoneRaw}`} className="flex items-center gap-2 hover:text-amber transition-colors">
                    <Phone className="h-4 w-4 text-amber" /> {SITE.contact.primaryPhone}
                  </a>
                  <a href={`mailto:${SITE.contact.admissionsEmail}`} className="flex items-center gap-2 hover:text-amber transition-colors break-all">
                    <Mail className="h-4 w-4 text-amber" /> {SITE.contact.admissionsEmail}
                  </a>
                </div>
              </div>

              <div className="rounded-3xl bg-white border border-border/60 p-6 shadow-premium">
                <h3 className="font-display text-base font-bold text-navy">What happens next?</h3>
                <ol className="mt-4 space-y-3">
                  {[
                    "We review your application within 24 hours.",
                    "Admissions team contacts you to confirm program & eligibility.",
                    "Document verification (online or in-person).",
                    "Seat confirmation and fee payment.",
                    "Welcome to Navkis — orientation & onboarding!",
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="inline-flex h-6 w-6 rounded-full bg-brand text-white text-xs font-bold items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-navy">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-3xl bg-amber/10 border border-amber/30 p-6">
                <div className="flex items-center gap-2 text-amber-deep font-semibold text-sm">
                  <CheckCircle2 className="h-4 w-4" /> Quick Checklist
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-navy">
                  <li>✓ 10+2 marks card ready</li>
                  <li>✓ Entrance exam scorecard (KCET/COMEDK/JEE)</li>
                  <li>✓ Valid email & phone</li>
                  <li>✓ Parent/guardian contact</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-navy mb-1.5">{label}</label>
      {children}
    </div>
  );
}
