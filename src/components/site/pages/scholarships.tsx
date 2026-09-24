"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, HeartHandshake, Trophy, Users, Sparkles, UsersRound } from "lucide-react";
import { SCHOLARSHIPS } from "@/lib/site-data";
import { CTAButton, SectionHeading } from "../ui-bits";
import { PageHero } from "../page-hero";

const ICONS: Record<string, React.ReactNode> = {
  award: <Award className="h-6 w-6" />,
  "heart-handshake": <HeartHandshake className="h-6 w-6" />,
  trophy: <Trophy className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  sparkles: <Sparkles className="h-6 w-6" />,
  "users-round": <UsersRound className="h-6 w-6" />,
};

export function ScholarshipsPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Scholarships"
        title={<>Education that's <span className="text-gradient">within reach.</span></>}
        description="We believe financial circumstance should never come between a student and their ambition. Navkis offers a wide range of scholarships and facilitates all applicable government schemes."
        crumbs={[{ label: "Admissions", to: "admissions" }, { label: "Scholarships" }]}
        align="left"
      />

      <section className="section-pad">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Scholarships We Offer"
            title={<>Six pathways to <span className="text-gradient">financial support.</span></>}
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SCHOLARSHIPS.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl bg-white border border-border/60 p-6 shadow-premium card-lift"
              >
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber to-amber-deep text-navy flex items-center justify-center shadow-amber-glow">
                  {ICONS[s.icon]}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-ink leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-8 lg:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-aurora opacity-40" />
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-brand/30 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold">
                How to apply for scholarships
              </h2>
              <p className="mt-3 text-white/80 max-w-2xl mx-auto">
                Indicate your interest during admission. Our team will guide you through eligibility, documentation and application for both institutional and government scholarships.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <CTAButton to="apply" variant="amber" iconRight={<ArrowRight className="h-4 w-4" />}>Apply Now</CTAButton>
                <CTAButton to="contact" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white">Ask a Question</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
