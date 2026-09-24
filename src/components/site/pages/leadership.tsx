"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote, CheckCircle2, User } from "lucide-react";
import { useNav } from "@/lib/use-router";
import { LEADERS } from "@/lib/site-data";
import { CTAButton, SectionHeading } from "../ui-bits";
import { PageHero } from "../page-hero";

export function LeadershipPage() {
  const { navigate } = useNav();

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Leadership"
        title={<>Guided by experience. <span className="text-gradient">Driven by purpose.</span></>}
        description="Our leadership carries forward a strong educational legacy while shaping a forward-looking vision for engineering education at Hassan."
        crumbs={[{ label: "About", to: "about" }, { label: "Leadership" }]}
        image="/images/campus/campus_01.jpg"
      />

      {/* Chairman */}
      <section className="section-pad">
        <div className="container-pad">
          <LeaderCard
            leader={LEADERS.chairman}
            eyebrow="Chairman's Message"
            initials="SR"
          />
        </div>
      </section>

      {/* Principal */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <LeaderCard
            leader={LEADERS.principal}
            eyebrow="Principal's Message"
            initials="PR"
            reverse
          />
        </div>
      </section>

      {/* Governance */}
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Governance"
            title={<>A governance structure built on <span className="text-gradient">transparency.</span></>}
            description="The college is governed by a structured council that ensures academic integrity, statutory compliance and continuous improvement."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Governing Council", desc: "Strategic direction and oversight of academic and administrative affairs." },
              { title: "Statutory Committees", desc: "AICTE / VTU-mandated committees for compliance and grievance redressal." },
              { title: "Academic Council", desc: "Curriculum design, academic standards and continuous improvement." },
              { title: "Internal Quality Assurance", desc: "IQAC drives quality culture through continuous review and feedback." },
              { title: "Anti-Ragging Committee", desc: "Strict anti-ragging policy and a responsive redressal mechanism." },
              { title: "Industry Advisory Board", desc: "Senior industry leaders who guide curriculum and placements." },
            ].map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl bg-white border border-border/60 p-6 shadow-premium card-lift"
              >
                <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-ink leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton to="governing-council" variant="outline" iconRight={<ArrowRight className="h-4 w-4" />}>
              View Governing Council
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}

function LeaderCard({
  leader, eyebrow, initials, reverse = false,
}: { leader: typeof LEADERS.chairman; eyebrow: string; initials: string; reverse?: boolean }) {
  return (
    <div className={`grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`relative ${reverse ? "lg:[direction:ltr]" : ""}`}
      >
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-premium bg-gradient-to-br from-navy to-navy-deep">
          <div className="absolute inset-0 bg-aurora opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="mx-auto h-32 w-32 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center font-display font-extrabold text-5xl text-amber">
                {initials}
              </div>
              <div className="mt-6 font-display text-2xl font-bold">{leader.name}</div>
              <div className="mt-1 text-sm text-white/70 px-6">{leader.role}</div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-5 -right-5 rounded-2xl bg-amber text-navy px-5 py-3 shadow-amber-glow">
          <Quote className="h-5 w-5" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={`${reverse ? "lg:[direction:ltr]" : ""}`}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-pale px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" /> {eyebrow}
        </div>
        <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-navy tracking-tight leading-tight">
          {leader.name}
        </h2>
        <div className="text-sm text-muted-ink">{leader.role}</div>
        <p className="mt-5 text-base text-muted-ink leading-relaxed">{leader.message}</p>

        <div className="mt-6 space-y-2">
          {leader.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-navy">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" /> {h}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
