"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { SITE, DEPARTMENTS } from "@/lib/site-data";
import { CTAButton, SectionHeading, Badge } from "../ui-bits";
import { PageHero } from "../page-hero";
import { useToast } from "@/hooks/use-toast";

export function ContactPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General Enquiry", message: "" });

  function update(k: keyof typeof form, v: string) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
  }

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Contact Us"
        title={<>We're here to <span className="text-gradient">help.</span></>}
        description="Questions about admissions, programs, campus visits or partnerships? Reach out — our team responds within 24 hours."
        crumbs={[{ label: "Contact" }]}
        align="left"
      />

      <section className="section-pad">
        <div className="container-pad">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-12">
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
                    <MessageSquare className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy">Message sent!</h3>
                  <p className="mt-2 text-muted-ink">Thanks for reaching out, {form.name.split(" ")[0]}. We'll respond to you at <span className="font-semibold text-navy">{form.email}</span> within 24 hours.</p>
                  <div className="mt-6">
                    <CTAButton onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "General Enquiry", message: "" }); }} variant="outline">
                      Send Another Message
                    </CTAButton>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="rounded-3xl bg-white border border-border/60 p-6 lg:p-8 shadow-premium">
                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="brand">Send a Message</Badge>
                    <span className="text-sm text-muted-ink">All fields marked * are required</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your Name *">
                      <input type="text" required value={form.name} onChange={(e) => update("name", e.target.value)}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                        placeholder="Full name" />
                    </Field>
                    <Field label="Email *">
                      <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                        placeholder="you@example.com" />
                    </Field>
                    <Field label="Phone">
                      <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                        placeholder="+91 9XXXXXXXXX" />
                    </Field>
                    <Field label="Subject">
                      <select value={form.subject} onChange={(e) => update("subject", e.target.value)}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all">
                        <option>General Enquiry</option>
                        <option>Admissions</option>
                        <option>Scholarships</option>
                        <option>Campus Visit</option>
                        <option>Recruitment / Partnership</option>
                        <option>Alumni</option>
                        <option>Grievance</option>
                      </select>
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Message *">
                        <textarea required rows={5} value={form.message} onChange={(e) => update("message", e.target.value)}
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                          placeholder="How can we help you?" />
                      </Field>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end">
                    <CTAButton onClick={() => onSubmit({ preventDefault: () => {} } as React.FormEvent)} variant="primary" iconRight={<Send className="h-4 w-4" />}>
                      Send Message
                    </CTAButton>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="space-y-4"
            >
              <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-7 text-white shadow-premium relative overflow-hidden">
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand/30 blur-2xl" />
                <h3 className="font-display text-lg font-bold">Reach Us Directly</h3>
                <div className="mt-5 space-y-4 text-sm">
                  <a href={`tel:${SITE.contact.primaryPhoneRaw}`} className="flex items-start gap-3 hover:text-amber transition-colors">
                    <Phone className="h-5 w-5 text-amber shrink-0" />
                    <div>
                      <div className="text-white/60 text-xs">Phone</div>
                      <div className="font-semibold">{SITE.contact.primaryPhone}</div>
                    </div>
                  </a>
                  <a href={`mailto:${SITE.contact.admissionsEmail}`} className="flex items-start gap-3 hover:text-amber transition-colors break-all">
                    <Mail className="h-5 w-5 text-amber shrink-0" />
                    <div>
                      <div className="text-white/60 text-xs">Email</div>
                      <div className="font-semibold">{SITE.contact.admissionsEmail}</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-amber shrink-0" />
                    <div>
                      <div className="text-white/60 text-xs">Address</div>
                      <div className="font-semibold leading-relaxed">{SITE.location.full}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-amber shrink-0" />
                    <div>
                      <div className="text-white/60 text-xs">Office Hours</div>
                      <div className="font-semibold">Mon – Sat · 9:00 AM – 5:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white border border-border/60 p-6 shadow-premium">
                <h3 className="font-display text-base font-bold text-navy">Quick Actions</h3>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <CTAButton to="apply" size="sm" className="justify-center">Apply Online</CTAButton>
                  <CTAButton to="admissions" size="sm" variant="outline" className="justify-center">Admissions</CTAButton>
                  <CTAButton to="departments" size="sm" variant="ghost" className="justify-center">Programs</CTAButton>
                  <CTAButton href={`tel:${SITE.contact.primaryPhoneRaw}`} size="sm" variant="ghost" className="justify-center">Call Us</CTAButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16">
        <div className="container-pad">
          <div className="rounded-3xl overflow-hidden border border-border/60 shadow-premium">
            <iframe
              title="Navkis College of Engineering Map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.location.mapQuery)}&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
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
