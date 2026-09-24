"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, Briefcase, TrendingUp, Target, Handshake, Award,
  GraduationCap, Building2, ChartBar, Star,
} from "lucide-react";
import { useNav } from "@/lib/use-router";
import { PLACEMENT_STATS, TRAINING_PILLARS, RECRUITERS } from "@/lib/site-data";
import { CTAButton, SectionHeading, Badge } from "../ui-bits";
import { PageHero } from "../page-hero";
import { Counter } from "../counter";

const ICONS: Record<string, React.ReactNode> = {
  code: <Briefcase className="h-5 w-5" />,
  "message-square": <Target className="h-5 w-5" />,
  briefcase: <Briefcase className="h-5 w-5" />,
  target: <Target className="h-5 w-5" />,
  rocket: <TrendingUp className="h-5 w-5" />,
  handshake: <Handshake className="h-5 w-5" />,
};

export function PlacementsPage() {
  const { navigate } = useNav();

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Training & Placement"
        title={<>Career outcomes that <span className="text-gradient">speak for themselves.</span></>}
        description="A dedicated Training & Placement cell, structured aptitude and interview prep, and a strong recruiter network — our graduates step into their careers with confidence."
        crumbs={[{ label: "Placements" }]}
        image="/images/placements/placements_00.jpg"
      />

      {/* Stats */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PLACEMENT_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-6 text-white text-center shadow-premium relative overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand/30 blur-2xl" />
                <div className="relative">
                  <div className="font-display text-3xl lg:text-4xl font-extrabold text-amber">
                    {s.value}<span className="text-lg">{s.suffix}</span>
                  </div>
                  <div className="mt-1 text-xs text-white/70">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training pillars */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <SectionHeading
            eyebrow="How We Prepare Students"
            title={<>Six pillars of <span className="text-gradient">career readiness.</span></>}
            description="Structured, multi-year training that begins from semester one — building technical, analytical and communication skills alongside interview readiness."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRAINING_PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl bg-white border border-border/60 p-6 shadow-premium card-lift"
              >
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand to-brand-bright text-white flex items-center justify-center shadow-glow">
                  {ICONS[p.icon]}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-ink leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Placement Process"
            title={<>A structured process, <span className="text-gradient">start to finish.</span></>}
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", title: "Pre-Placement Talk", desc: "Recruiters introduce roles, expectations and growth paths to shortlisted students." },
              { n: "02", title: "Aptitude Test", desc: "Online test covering quantitative, logical and verbal aptitude — first shortlisting round." },
              { n: "03", title: "Technical Interview", desc: "Domain interview covering fundamentals, projects and problem-solving ability." },
              { n: "04", title: "HR Interview & Offer", desc: "Final HR round, followed by offer release and onboarding communication." },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative rounded-3xl bg-white border border-border/60 p-6 shadow-premium card-lift"
              >
                <div className="font-display text-4xl font-extrabold text-brand-pale">{s.n}</div>
                <h3 className="mt-2 font-display text-base font-bold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-ink leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiters preview */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Our Recruiters"
            title={<>Top companies <span className="text-gradient">hire from Navkis.</span></>}
            description="A diverse mix of IT services, product, analytics, engineering and consulting firms — onboarded year after year."
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {RECRUITERS.slice(0, 15).map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="rounded-2xl bg-white border border-border/60 px-3 py-4 text-center shadow-premium card-lift"
              >
                <div className="font-display font-bold text-navy text-sm">{r.name}</div>
                <div className="text-[10px] text-muted-ink mt-0.5">{r.industry}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <CTAButton to="recruiters" variant="outline" iconRight={<ArrowRight className="h-4 w-4" />}>See All Recruiters</CTAButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-8 lg:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-aurora opacity-40" />
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-brand/30 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold">
                Recruit from Navkis
              </h2>
              <p className="mt-3 text-white/80 max-w-xl mx-auto">
                Are you a company looking to hire skilled, industry-ready engineers? Partner with our placement cell.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <CTAButton to="contact" variant="amber" iconRight={<ArrowRight className="h-4 w-4" />}>Partner With Us</CTAButton>
                <CTAButton to="testimonials" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white">Student Voices</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
