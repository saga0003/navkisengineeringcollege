"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, ArrowLeft, CheckCircle2, Cpu, Code, Database, Brain,
  Building, Cog, GraduationCap, FlaskConical, Beaker, BookOpen, Users,
  Briefcase, Layers, Rocket,
} from "lucide-react";
import { useNav } from "@/lib/use-router";
import { DEPARTMENTS } from "@/lib/site-data";
import { CTAButton, SectionHeading, Badge } from "../ui-bits";
import { TiltCard } from "../tilt-card";

const ICONS: Record<string, React.ReactNode> = {
  code: <Code className="h-5 w-5" />,
  cpu: <Cpu className="h-5 w-5" />,
  brain: <Brain className="h-5 w-5" />,
  database: <Database className="h-5 w-5" />,
  building: <Building className="h-5 w-5" />,
  cog: <Cog className="h-5 w-5" />,
  graduation: <GraduationCap className="h-5 w-5" />,
};

interface Props {
  slug: string;
}

export function DepartmentDetailPage({ slug }: Props) {
  const { navigate } = useNav();
  const dept = DEPARTMENTS.find((d) => d.slug === slug) || DEPARTMENTS[0];

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <img src={dept.image} alt={dept.name} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy/70" />
        </div>
        <div className="absolute inset-0 bg-aurora opacity-30" />
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-brand/30 blur-3xl animate-float" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-amber/15 blur-3xl animate-float-slow" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <button
            onClick={() => navigate("departments")}
            className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-amber"
          >
            <ArrowLeft className="h-4 w-4" /> All Departments
          </button>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge variant="amber">{dept.level} · {dept.code}</Badge>
            <Badge variant="brand">Established {dept.established}</Badge>
            <Badge variant="brand">Intake {dept.intake}</Badge>
          </div>

          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            {dept.name}
          </h1>
          <p className="mt-3 text-amber font-display text-lg sm:text-xl font-semibold">{dept.tagline}</p>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/75 leading-relaxed">{dept.blurb}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton to="apply" variant="amber" iconRight={<ArrowRight className="h-4 w-4" />}>Apply Now</CTAButton>
            <CTAButton to="contact" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white">Enquire</CTAButton>
          </div>
        </div>

        <div className="relative -mb-1">
          <svg className="block w-full h-12 lg:h-16" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
            <path d="M0 80V40C240 0 480 0 720 30C960 60 1200 60 1440 30V80H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Overview */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="brand">About the Department</Badge>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight leading-tight">
                A program built for <span className="text-gradient">real-world impact.</span>
              </h2>
              <p className="mt-5 text-muted-ink leading-relaxed">{dept.description}</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {dept.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-muted/60 border border-border/60"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span className="text-sm text-navy">{h}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="space-y-4"
            >
              <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-6 text-white shadow-premium relative overflow-hidden">
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand/30 blur-2xl" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 rounded-2xl bg-white/15 text-amber items-center justify-center">
                    {ICONS[dept.icon]}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">Program at a glance</h3>
                  <dl className="mt-4 space-y-2.5 text-sm">
                    <div className="flex justify-between gap-3">
                      <dt className="text-white/60">Level</dt>
                      <dd className="font-semibold text-white">{dept.level === "UG" ? "Undergraduate (B.E.)" : "Postgraduate"}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-white/60">Duration</dt>
                      <dd className="font-semibold text-white">{dept.duration}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-white/60">Annual Intake</dt>
                      <dd className="font-semibold text-white">{dept.intake} students</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-white/60">Established</dt>
                      <dd className="font-semibold text-white">{dept.established}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-white/60">Affiliation</dt>
                      <dd className="font-semibold text-white">VTU Belagavi</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="rounded-3xl bg-white border border-border/60 p-6 shadow-premium">
                <h3 className="font-display text-base font-bold text-navy">Talk to admissions</h3>
                <p className="mt-1 text-sm text-muted-ink">Have questions about this program? Our team is one click away.</p>
                <div className="mt-4 space-y-2">
                  <CTAButton to="contact" size="sm" className="w-full justify-center" iconRight={<ArrowRight className="h-3.5 w-3.5" />}>Enquire Now</CTAButton>
                  <CTAButton to="apply" size="sm" variant="outline" className="w-full justify-center">Apply Online</CTAButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Labs */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Laboratories"
            title={<>Modern labs that <span className="text-gradient">turn theory into practice.</span></>}
            description="Each laboratory is equipped to AICTE and VTU norms — providing students with the infrastructure they need to build, test and iterate."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dept.labs.map((lab, i) => (
              <motion.div
                key={lab}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl bg-white border border-border/60 p-5 shadow-premium card-lift flex items-start gap-4"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-brand to-brand-bright text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <FlaskConical className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-semibold text-navy">{lab}</div>
                  <div className="text-xs text-muted-ink mt-0.5">Equipped to AICTE / VTU norms</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Careers */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white border border-border/60 p-7 lg:p-8 shadow-premium"
            >
              <div className="inline-flex h-12 w-12 rounded-2xl bg-brand/10 text-brand items-center justify-center">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-navy">Program Outcomes</h3>
              <p className="mt-1 text-sm text-muted-ink">Graduate attributes you will develop through this program.</p>
              <ul className="mt-5 space-y-3">
                {dept.outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-sm text-navy leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-7 lg:p-8 text-white shadow-premium relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-amber/15 blur-3xl" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 rounded-2xl bg-amber/20 text-amber items-center justify-center">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">Career Pathways</h3>
                <p className="mt-1 text-sm text-white/70">Roles our graduates step into after this program.</p>
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {dept.careerRoles.map((r, i) => (
                    <div key={r} className="flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-md px-3 py-2.5 text-sm">
                      <Briefcase className="h-4 w-4 text-amber shrink-0" /> {r}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other departments */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Explore More"
            title={<>Looking at <span className="text-gradient">other programs?</span></>}
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DEPARTMENTS.filter((d) => d.slug !== dept.slug).slice(0, 4).map((d, i) => (
              <motion.button
                key={d.slug}
                onClick={() => navigate("department", d.slug)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group text-left rounded-2xl bg-white border border-border/60 overflow-hidden shadow-premium card-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={d.image} alt={d.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-[10px] uppercase tracking-wider text-amber font-semibold">{d.code}</div>
                    <div className="font-display font-bold text-white text-sm">{d.shortName}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
