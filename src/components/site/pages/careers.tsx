"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Briefcase, GraduationCap, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { CTAButton, Badge } from "../ui-bits";
import { PageHero } from "../page-hero";
import { useToast } from "@/hooks/use-toast";

const OPEN_ROLES = [
  { title: "Assistant Professor — Computer Science", type: "Full-time", location: "Hassan" },
  { title: "Assistant Professor — Electronics & Communication", type: "Full-time", location: "Hassan" },
  { title: "Assistant Professor — Mathematics", type: "Full-time", location: "Hassan" },
  { title: "Lab Instructor — Mechanical Engineering", type: "Full-time", location: "Hassan" },
  { title: "Placement Officer", type: "Full-time", location: "Hassan" },
  { title: "Administrative Officer", type: "Full-time", location: "Hassan" },
];

export function CareersPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "", message: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Application submitted!", description: "Our HR team will reach out if your profile matches." });
  }

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Careers at Navkis"
        title={<>Build your career <span className="text-gradient">shaping future engineers.</span></>}
        description="Join a community of educators, researchers and professionals committed to academic excellence, innovation and holistic student development."
        crumbs={[{ label: "Careers" }]}
        align="left"
      />

      {/* Open roles */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy tracking-tight">Open Positions</h2>
              <p className="mt-1 text-muted-ink">Find a role that fits your expertise.</p>
            </div>
            <Badge variant="amber">{OPEN_ROLES.length} Open</Badge>
          </div>

          <div className="space-y-3">
            {OPEN_ROLES.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group rounded-2xl bg-white border border-border/60 p-5 shadow-premium card-lift flex flex-wrap items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-navy">{r.title}</div>
                    <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-ink">
                      <span className="inline-flex items-center gap-1"><GraduationCap className="h-3 w-3" /> {r.type}</span>
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {r.location}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> Apply by 30 Nov 2025</span>
                    </div>
                  </div>
                </div>
                <CTAButton
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setForm((s) => ({ ...s, role: r.title }));
                    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  iconRight={<Send className="h-3.5 w-3.5" />}
                >
                  Apply
                </CTAButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply-form" className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad max-w-3xl">
          {submitted ? (
            <div className="rounded-3xl bg-white border border-border/60 p-10 text-center shadow-premium">
              <div className="mx-auto h-16 w-16 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-navy">Application submitted!</h3>
              <p className="mt-2 text-muted-ink">Thank you for your interest in joining Navkis. Our HR team will reach out if your profile matches.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-3xl bg-white border border-border/60 p-6 lg:p-8 shadow-premium">
              <h2 className="font-display text-2xl font-bold text-navy">Apply for a role</h2>
              <p className="mt-1 text-sm text-muted-ink">Fill in your details and our HR team will get in touch.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Full Name *">
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                    placeholder="Your name" />
                </Field>
                <Field label="Email *">
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                    placeholder="you@example.com" />
                </Field>
                <Field label="Phone">
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                    placeholder="+91 9XXXXXXXXX" />
                </Field>
                <Field label="Role Applying For *">
                  <select required value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all">
                    <option value="">Select a role</option>
                    {OPEN_ROLES.map((r) => <option key={r.title} value={r.title}>{r.title}</option>)}
                    <option value="Other">Other / General</option>
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Cover Note">
                    <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                      placeholder="Tell us about your experience and why you'd like to join Navkis." />
                  </Field>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end">
                <CTAButton onClick={() => onSubmit({ preventDefault: () => {} } as React.FormEvent)} variant="primary" iconRight={<Send className="h-4 w-4" />}>
                  Submit Application
                </CTAButton>
              </div>
            </form>
          )}
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
