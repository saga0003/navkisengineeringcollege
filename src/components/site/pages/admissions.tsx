"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileText, ClipboardCheck, GraduationCap, Phone, Clock } from "lucide-react";
import { useNav } from "@/lib/use-router";
import { ADMISSION_STEPS, FAQ } from "@/lib/site-data";
import { CTAButton, SectionHeading, Badge } from "../ui-bits";
import { PageHero } from "../page-hero";

const ELIGIBILITY = [
  { program: "B.E. (CSE / ECE / AI&ML / AI&DS / Civil / Mechanical)", req: "Pass in 10+2 with Physics & Mathematics as compulsory subjects, along with Chemistry / Biology / Biotechnology / Computer Science. Valid KCET / COMEDK / JEE score as per VTU norms." },
  { program: "MCA (Postgraduate)", req: "Recognised bachelor's degree of minimum 3 years duration in BCA / B.Sc (IT/CS) / B.Com / B.A. with Mathematics at 10+2 or degree level. Valid PGCET score as per VTU norms." },
];

const DOCS = [
  "10th & 12th Marks Cards (original + photocopies)",
  "Transfer Certificate (TC) from previous institution",
  "Migration Certificate (for non-VTU board students)",
  "Character / Conduct Certificate",
  "Entrance exam scorecard (KCET / COMEDK / JEE / PGCET)",
  "Caste / Income Certificate (if applicable, for scholarship claims)",
  "Aadhaar card (student & parents)",
  "Passport-size photographs (6 copies)",
  "Parent's ID & address proof",
  "Medical fitness certificate",
];

export function AdmissionsPage() {
  const { navigate } = useNav();

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Admissions 2025"
        title={<>Your engineering journey <span className="text-gradient">starts here.</span></>}
        description="A clear, transparent, four-step admission process — designed to make joining Navkis College of Engineering as smooth as possible."
        crumbs={[{ label: "Admissions" }]}
        image="/images/campus/campus_02.jpg"
      />

      {/* Process steps */}
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Admission Process"
            title={<>Five steps to <span className="text-gradient">joining Navkis.</span></>}
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {ADMISSION_STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative rounded-3xl bg-white border border-border/60 p-6 shadow-premium card-lift"
              >
                <div className="font-display text-5xl font-extrabold text-brand-pale">{s.n}</div>
                <h3 className="mt-3 font-display text-base font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-ink leading-relaxed">{s.desc}</p>
                {i < ADMISSION_STEPS.length - 1 && (
                  <ArrowRight className="absolute top-1/2 -right-3 h-5 w-5 text-brand/30 hidden lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white border border-border/60 p-7 shadow-premium"
            >
              <div className="inline-flex h-12 w-12 rounded-2xl bg-brand/10 text-brand items-center justify-center">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-navy">Eligibility Criteria</h3>
              <div className="mt-5 space-y-4">
                {ELIGIBILITY.map((e) => (
                  <div key={e.program} className="rounded-2xl bg-muted/60 p-4">
                    <div className="font-display font-semibold text-navy text-sm">{e.program}</div>
                    <p className="mt-1.5 text-sm text-muted-ink leading-relaxed">{e.req}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-4 rounded-2xl bg-amber/10 border border-amber/30">
                <div className="flex items-center gap-2 text-amber-deep font-semibold text-sm">
                  <Clock className="h-4 w-4" /> Admissions Open for 2025-26
                </div>
                <p className="mt-1 text-xs text-muted-ink">Limited seats. Apply early to secure your preferred program.</p>
              </div>
            </motion.div>

            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-7 text-white shadow-premium relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand/30 blur-3xl" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 rounded-2xl bg-amber/20 text-amber items-center justify-center">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">Documents Required</h3>
                <p className="mt-1 text-sm text-white/70">Keep these ready before you start your application.</p>
                <ul className="mt-5 space-y-2.5">
                  {DOCS.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-amber shrink-0 mt-0.5" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="apply" size="lg" variant="amber" iconRight={<ArrowRight className="h-4 w-4" />}>Start Your Application</CTAButton>
            <CTAButton to="scholarships" size="lg" variant="outline">View Scholarships</CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title={<>Answers to <span className="text-gradient">common questions.</span></>}
          />
          <div className="mt-10 grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {FAQ.map((f, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group rounded-2xl bg-white border border-border/60 p-5 shadow-premium"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-3">
                  <span className="font-display font-semibold text-navy text-sm">{f.q}</span>
                  <span className="h-6 w-6 rounded-full bg-brand-pale text-brand flex items-center justify-center text-xs group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-ink leading-relaxed">{f.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-bright p-8 lg:p-12 text-center text-white relative overflow-hidden shadow-glow">
            <div className="absolute inset-0 bg-aurora opacity-30" />
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold">
                Have a question we haven't answered?
              </h2>
              <p className="mt-3 text-white/85 max-w-xl mx-auto">Our admissions team is here to help — by phone, email or in person.</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <CTAButton href="tel:+919481450750" variant="white" icon={<Phone className="h-4 w-4" />}>Call Admissions</CTAButton>
                <CTAButton to="contact" variant="amber">Contact Form</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
