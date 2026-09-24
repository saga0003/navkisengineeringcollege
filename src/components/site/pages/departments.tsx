"use client";

import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Sigma, Atom, BookOpen, GraduationCap } from "lucide-react";
import { useNav } from "@/lib/use-router";
import { DEPARTMENTS, SCIENCES } from "@/lib/site-data";
import { CTAButton, SectionHeading, Badge } from "../ui-bits";
import { PageHero } from "../page-hero";
import { TiltCard } from "../tilt-card";

const SCIENCE_ICONS: Record<string, React.ReactNode> = {
  sigma: <Sigma className="h-5 w-5" />,
  atom: <Atom className="h-5 w-5" />,
  flask: <FlaskConical className="h-5 w-5" />,
  users: <BookOpen className="h-5 w-5" />,
};

export function DepartmentsPage() {
  const { navigate } = useNav();

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Academic Programs"
        title={<>Choose your path to an <span className="text-gradient">engineering future.</span></>}
        description="Six undergraduate B.E. programs and one postgraduate MCA program — each engineered for depth, industry relevance and outcome-driven learning."
        crumbs={[{ label: "Academics" }]}
        image="/images/departments/departments_01.jpg"
      />

      {/* Departments grid */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy tracking-tight">Engineering Departments</h2>
              <p className="mt-1 text-muted-ink">Undergraduate (B.E.) and Postgraduate (MCA) programs</p>
            </div>
            <Badge variant="amber">8 Programs</Badge>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEPARTMENTS.map((d, i) => (
              <motion.button
                key={d.slug}
                onClick={() => navigate("department", d.slug)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group text-left"
              >
                <TiltCard className="rounded-3xl bg-white border border-border/60 overflow-hidden shadow-premium h-full" intensity={6}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge variant="amber">{d.level}</Badge>
                      <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white">
                        {d.code}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-[11px] uppercase tracking-wider text-amber font-semibold">{d.tagline}</div>
                      <div className="mt-1 font-display text-xl font-bold text-white leading-tight">{d.shortName}</div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-ink leading-relaxed line-clamp-2">{d.blurb}</p>
                    <div className="mt-4 flex items-center justify-between pt-4 border-t border-border/60">
                      <div className="text-xs text-muted-ink">Intake <span className="font-semibold text-navy">{d.intake}</span> · Est. {d.established}</div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Sciences */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Foundation Sciences"
            title={<>The science that <span className="text-gradient">powers engineering.</span></>}
            description="Strong foundational departments in Mathematics, Physics, Chemistry and Humanities shape the analytical and ethical core of every Navkis graduate."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SCIENCES.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl bg-white border border-border/60 p-6 shadow-premium card-lift"
              >
                <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
                  {SCIENCE_ICONS[s.icon] || <GraduationCap className="h-5 w-5" />}
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy leading-tight">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-ink leading-relaxed">{s.blurb}</p>
              </motion.div>
            ))}
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
                Not sure which program fits you?
              </h2>
              <p className="mt-3 text-white/75 max-w-xl mx-auto">
                Talk to our admissions team — we will help you choose the right path based on your interests and goals.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <CTAButton to="contact" variant="amber" iconRight={<ArrowRight className="h-4 w-4" />}>Talk to Us</CTAButton>
                <CTAButton to="admissions" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white">Admission Process</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
