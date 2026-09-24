"use client";

import { motion } from "framer-motion";
import { Users, Building2, Gavel, Scale, ShieldCheck, FileCheck, ArrowRight } from "lucide-react";
import { CTAButton, SectionHeading } from "../ui-bits";
import { PageHero } from "../page-hero";

const COUNCIL = [
  { role: "Chairman", name: "Sri. M. R. Seetharam", icon: Gavel },
  { role: "Secretary", name: "Designated Trust Member", icon: FileCheck },
  { role: "Principal (Member Secretary)", name: "Dr. [Principal's Name]", icon: Building2 },
  { role: "Senior Faculty Members", name: "Heads of all departments", icon: Users },
  { role: "Industry Nominees", name: "Senior leaders from partner companies", icon: ShieldCheck },
  { role: "Academic Nominees", name: "Eminent academicians from VTU & peer institutions", icon: Scale },
];

const COMMITTEES = [
  { name: "Statutory Committees", desc: "All AICTE / VTU mandated committees including Academic Audit, Anti-Ragging, Grievance Redressal, SC/ST/OBC Cell, Internal Complaints Committee and more." },
  { name: "Other Committees", desc: "Functional committees for admissions, examinations, placements, library, sports, cultural activities, hostel management, and campus discipline." },
  { name: "Student Clubs", desc: "Student-led clubs across cultural, technical, sports, literary, eco and NSS activities — each guided by faculty coordinators." },
  { name: "Internal Quality Assurance Cell", desc: "IQAC continuously reviews teaching-learning, infrastructure and outcomes — driving a culture of evidence-based improvement." },
];

export function GoverningCouncilPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Governing Council"
        title={<>A governance structure built on <span className="text-gradient">transparency.</span></>}
        description="The Governing Council provides strategic direction and oversight, ensuring that every academic and administrative decision aligns with the institution's mission and statutory obligations."
        crumbs={[{ label: "About", to: "about" }, { label: "Governing Council" }]}
        align="left"
      />

      {/* Council members */}
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Council Composition"
            title={<>A council of <span className="text-gradient">trustees, academics and industry.</span></>}
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COUNCIL.map((m, i) => (
              <motion.div
                key={m.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl bg-white border border-border/60 p-6 shadow-premium card-lift"
              >
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand to-brand-bright flex items-center justify-center text-white">
                  <m.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy">{m.role}</h3>
                <p className="mt-1 text-sm text-muted-ink">{m.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Committees"
            title={<>Compliance, quality and student welfare — <span className="text-gradient">all covered.</span></>}
          />
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {COMMITTEES.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl bg-white border border-border/60 p-6 shadow-premium"
              >
                <h3 className="font-display text-lg font-bold text-navy">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-ink leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-pad text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
            Questions about our governance?
          </h2>
          <p className="mt-3 text-muted-ink">We are happy to share detailed committee structures and mandatory disclosures on request.</p>
          <div className="mt-6">
            <CTAButton to="contact" iconRight={<ArrowRight className="h-4 w-4" />}>Contact Us</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
