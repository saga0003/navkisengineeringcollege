"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import { RECRUITERS } from "@/lib/site-data";
import { CTAButton, SectionHeading, Badge } from "../ui-bits";
import { PageHero } from "../page-hero";

const INDUSTRIES = ["All", "IT Services", "Product", "Analytics", "Engineering", "Consulting"];

import { useState } from "react";

export function RecruitersPage() {
  const [filter, setFilter] = useState("All");
  const filtered = RECRUITERS.filter((r) => filter === "All" || r.industry === filter);

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Our Recruiters"
        title={<>Companies that <span className="text-gradient">trust Navkis talent.</span></>}
        description="A growing network of recruiters from IT services, product, analytics, engineering and consulting — onboarded year after year to hire our graduates."
        crumbs={[{ label: "Placements", to: "placements" }, { label: "Recruiters" }]}
        image="/images/placements/placements_01.jpg"
      />

      <section className="pt-12">
        <div className="container-pad">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {INDUSTRIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === c
                    ? "bg-brand text-white shadow-glow"
                    : "bg-white border border-border/60 text-navy hover:bg-brand-pale"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (i % 8) * 0.03 }}
                className="rounded-2xl bg-white border border-border/60 p-6 shadow-premium card-lift text-center"
              >
                <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-to-br from-navy to-navy-light text-white flex items-center justify-center">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="mt-3 font-display font-bold text-navy">{r.name}</div>
                <div className="mt-1 text-xs text-muted-ink">{r.industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-bright p-8 lg:p-12 text-center text-white relative overflow-hidden shadow-glow">
            <div className="absolute inset-0 bg-aurora opacity-30" />
            <div className="relative">
              <Badge variant="amber">For Employers</Badge>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-bold">
                Hire industry-ready engineers from Navkis
              </h2>
              <p className="mt-3 text-white/85 max-w-xl mx-auto">
                Partner with our placement cell for campus recruitment, internships, live projects and pre-placement talks.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <CTAButton to="contact" variant="amber" iconRight={<ArrowRight className="h-4 w-4" />}>Become a Recruiter</CTAButton>
                <CTAButton to="placements" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white">Placement Cell</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
