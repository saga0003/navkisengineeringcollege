"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, CheckCircle2, FileCheck, Building2, Scale } from "lucide-react";
import { ACCREDITATIONS, APPROVALS_LIST } from "@/lib/site-data";
import { CTAButton, SectionHeading, Badge } from "../ui-bits";
import { PageHero } from "../page-hero";

export function AccreditationPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Accreditation & Approvals"
        title={<>Statutory compliance, <span className="text-gradient">transparently documented.</span></>}
        description="Navkis College of Engineering maintains strict compliance with all statutory and regulatory requirements. Every approval and accreditation is in place — and publicly available."
        crumbs={[{ label: "About", to: "about" }, { label: "Accreditation" }]}
        align="left"
      />

      <section className="section-pad">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Our Approvals"
            title={<>Recognised by <span className="text-gradient">the right authorities.</span></>}
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ACCREDITATIONS.map((a, i) => (
              <motion.div
                key={a.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-6 text-white shadow-premium relative overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand/30 blur-2xl" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 rounded-2xl bg-amber/20 text-amber items-center justify-center">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="mt-4 font-display text-2xl font-extrabold text-amber">{a.code}</div>
                  <div className="mt-2 font-display font-semibold text-white">{a.name}</div>
                  <div className="mt-1 text-xs text-white/60">{a.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory disclosure */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white border border-border/60 p-7 shadow-premium"
            >
              <div className="inline-flex h-12 w-12 rounded-2xl bg-brand/10 text-brand items-center justify-center">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-navy">Mandatory Disclosure Documents</h3>
              <p className="mt-2 text-sm text-muted-ink">The following statutory documents are updated annually and available on request.</p>
              <ul className="mt-5 space-y-2.5">
                {APPROVALS_LIST.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-sm text-navy">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" /> {a}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="space-y-4"
            >
              <div className="rounded-3xl bg-white border border-border/60 p-6 shadow-premium">
                <div className="inline-flex h-10 w-10 rounded-xl bg-amber/15 text-amber-deep items-center justify-center">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display font-bold text-navy">Governance Structure</h3>
                <p className="mt-1.5 text-sm text-muted-ink">A clear organisational chart from the Governing Council to academic departments — with statutory committees for academic audit, anti-ragging, grievance redressal and more.</p>
              </div>
              <div className="rounded-3xl bg-white border border-border/60 p-6 shadow-premium">
                <div className="inline-flex h-10 w-10 rounded-xl bg-amber/15 text-amber-deep items-center justify-center">
                  <Scale className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display font-bold text-navy">Statutory Committees</h3>
                <p className="mt-1.5 text-sm text-muted-ink">All AICTE / VTU mandated committees are in place — with student and faculty representation for transparency and accountability.</p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-bright p-6 text-white shadow-glow">
                <h3 className="font-display font-bold">Need a specific document?</h3>
                <p className="mt-1.5 text-sm text-white/85">Write to us — we'll share the relevant statutory disclosure.</p>
                <div className="mt-4">
                  <CTAButton to="contact" variant="amber" size="sm" iconRight={<ArrowRight className="h-3.5 w-3.5" />}>Contact Us</CTAButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
