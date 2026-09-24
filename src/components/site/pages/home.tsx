"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, Sparkles, GraduationCap, Building2, Trophy, BookOpen,
  Users, Lightbulb, Cpu, Beaker, Leaf, Palette, Award, MapPin,
  Star, Quote, ChevronRight, CheckCircle2, Phone,
} from "lucide-react";
import { useNav } from "@/lib/use-router";
import { DEPARTMENTS, STATS, TESTIMONIALS, RECRUITERS, SITE } from "@/lib/site-data";
import { CTAButton, SectionHeading, Badge } from "../ui-bits";
import { TiltCard } from "../tilt-card";
import { Counter } from "../counter";

export function HomePage() {
  const { navigate } = useNav();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="page-enter">
      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy">
        {/* Aurora background */}
        <div className="absolute inset-0 bg-aurora opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-25" />
        {/* Floating orbs */}
        <div className="absolute top-20 -left-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-amber/15 blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-brand-light/15 blur-3xl animate-float" />
        {/* 3D rotating ring decoration */}
        <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] pointer-events-none hidden lg:block">
          <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" />
          <div className="absolute inset-8 rounded-full border border-white/5 animate-spin-slow" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
          <div className="absolute inset-16 rounded-full border border-white/5 animate-spin-slow" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-amber animate-pulse" />
          </div>
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full"
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
              AICTE · VTU · UGC 2(f) — Established {SITE.established}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[0.95] text-white"
            >
              Contemporary
              <br />
              <span className="text-gradient">Higher Learning</span>
              <br />
              at Navkis.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed"
            >
              A state-of-the-art technical institution in Hassan — where academic rigour, innovation and a 12-acre green campus come together to shape world-class engineers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <CTAButton to="apply" size="lg" variant="amber" iconRight={<ArrowRight className="h-4 w-4" />}>
                Apply for 2025
              </CTAButton>
              <CTAButton to="departments" size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white">
                Explore Programs
              </CTAButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber" /> 8 Academic Programs
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber" /> 12-Acre Green Campus
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber" /> 95%+ Placements
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber" /> Top Recruiters Onboarded
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="relative -mt-20 z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white shadow-premium border border-border/60 overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border/60">
              {STATS.map((s, i) => (
                <StatTile key={s.label} stat={s} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT TEASER ============ */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-premium">
                <img
                  src="/images/campus/campus_00.jpg"
                  alt="Navkis College of Engineering Campus"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-3xl font-display font-bold">12 Acres</div>
                  <div className="text-sm text-white/80">Serene, picturesque campus at Hassan</div>
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -top-6 -right-6 hidden sm:block rounded-2xl bg-white shadow-premium p-4 w-44 border border-border/60">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-lg bg-amber/15 text-amber-deep flex items-center justify-center">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-ink">Since</div>
                    <div className="font-display font-bold text-navy">2009-10</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div>
              <SectionHeading
                align="left"
                eyebrow="About Navkis"
                title={<>Where legacy meets <span className="text-gradient">forward-thinking engineering.</span></>}
                description="Established in 2009-10 by the Yagachi Education and Research Trust, and under the patronage of the Navkis Group of Institutions, Bengaluru since 2019-20 — Navkis College of Engineering draws strength from a strong educational legacy, progressive leadership and a quality-driven governance framework."
              />

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: GraduationCap, label: "8 Programs", sub: "UG & PG" },
                  { icon: Building2, label: "Modern Labs", sub: "AICTE-compliant" },
                  { icon: Trophy, label: "Sports & Clubs", sub: "Holistic growth" },
                  { icon: BookOpen, label: "Digital Library", sub: "20,000+ volumes" },
                ].map((f) => (
                  <div key={f.label} className="flex items-start gap-3 p-4 rounded-2xl bg-muted/60 border border-border/60">
                    <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-navy">{f.label}</div>
                      <div className="text-sm text-muted-ink">{f.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton to="about" iconRight={<ArrowRight className="h-4 w-4" />}>Our Story</CTAButton>
                <CTAButton to="vision-mission" variant="ghost">Vision & Mission</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DEPARTMENTS ============ */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Programs Offered"
            title={<>Choose your path to an <span className="text-gradient">engineering future.</span></>}
            description="Six undergraduate B.E. programs and one postgraduate MCA program — each designed for depth, industry relevance and outcome-driven learning."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="amber">{d.level} · {d.code}</Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-[11px] uppercase tracking-wider text-amber font-semibold">{d.tagline}</div>
                      <div className="mt-1 font-display text-xl font-bold text-white leading-tight">{d.shortName}</div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-ink leading-relaxed line-clamp-2">{d.blurb}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-muted-ink">Intake <span className="font-semibold text-navy">{d.intake}</span> · {d.duration}</div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </motion.button>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton to="departments" size="lg" variant="outline" iconRight={<ArrowRight className="h-4 w-4" />}>
              View All Departments
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============ WHY NAVKIS ============ */}
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Why Navkis"
            title={<>A learning ecosystem built for <span className="text-gradient">real-world impact.</span></>}
            description="From day one, students are immersed in an environment that balances academic depth with hands-on practice, industry exposure and holistic development."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Cpu, title: "Industry-Aligned Curriculum", desc: "Programs designed with industry input and updated regularly to track emerging technologies — from AI/ML to cloud and IoT." },
              { icon: Lightbulb, title: "Innovation & Research", desc: "Design & Innovation Lab, IoT Skill Lab and Institution's Innovation Council turn ideas into working prototypes." },
              { icon: Users, title: "Mentorship & Counselling", desc: "Every student is supported by faculty mentors, career guidance and a robust counselling and grievance redressal system." },
              { icon: GraduationCap, title: "Outcome-Driven Education", desc: "OBE-aligned teaching-learning with continuous assessment, feedback loops and clear graduate attributes." },
              { icon: Trophy, title: "Vibrant Campus Life", desc: "Cultural, technical, sports, literary and eco clubs alongside NSS, Red Cross and professional body chapters." },
              { icon: BookOpen, title: "Modern Infrastructure", desc: "ICT-enabled classrooms, modern labs, digital library, hostel, sports and transport — all on a 12-acre green campus." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group relative rounded-3xl bg-white border border-border/60 p-6 shadow-premium card-lift hover:shadow-glow"
              >
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand to-brand-bright flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-ink leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CAMPUS LIFE BANNER ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/campus/campus_02.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="absolute inset-0 bg-aurora opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Campus Life"
                title={<span className="text-white">Beyond the classroom — a campus full of <span className="text-gradient">energy.</span></span>}
                description="Cultural festivals, technical hackathons, sports tournaments, social outreach — life at Navkis is shaped by curiosity, friendship and a strong sense of community."
              />
              <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
                {[
                  { label: "Cultural Club", icon: Palette },
                  { label: "Technical Club", icon: Cpu },
                  { label: "Sports Club", icon: Trophy },
                  { label: "ECO Club", icon: Leaf },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-md px-3 py-2.5 text-sm text-white">
                    <c.icon className="h-4 w-4 text-amber" /> {c.label}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <CTAButton to="campus-life" variant="amber" iconRight={<ArrowRight className="h-4 w-4" />}>Explore Campus Life</CTAButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["/images/campus/campus_01.jpg", "/images/campus/campus_03.jpg", "/images/library/library_03.jpeg", "/images/amenities/amenities_02.jpg"].map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative overflow-hidden rounded-2xl ${i % 2 ? "translate-y-6" : ""}`}
                >
                  <img src={src} alt="" className="w-full h-44 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PLACEMENTS ============ */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Placements"
                title={<>Career outcomes that <span className="text-gradient">speak for themselves.</span></>}
                description="A dedicated Training & Placement cell, structured aptitude and interview prep, and a strong recruiter network — our graduates step into careers with confidence."
              />

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { value: "95%+", label: "Placement Track Record" },
                  { value: "20+", label: "Top Recruiters" },
                  { value: "12 LPA", label: "Highest Package" },
                  { value: "4.5 LPA", label: "Average Package" },
                ].map((p) => (
                  <div key={p.label} className="rounded-2xl bg-muted/60 border border-border/60 p-4">
                    <div className="font-display text-3xl font-extrabold text-gradient">{p.value}</div>
                    <div className="text-xs text-muted-ink mt-1">{p.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton to="placements" iconRight={<ArrowRight className="h-4 w-4" />}>Placement Cell</CTAButton>
                <CTAButton to="recruiters" variant="ghost">Our Recruiters</CTAButton>
              </div>
            </div>

            {/* Recruiters marquee */}
            <div className="relative rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-8 overflow-hidden shadow-premium">
              <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-brand/30 blur-3xl" />
              <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-amber/15 blur-3xl" />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.2em] text-amber font-semibold">Companies that hire from us</div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {RECRUITERS.slice(0, 9).map((r, i) => (
                    <motion.div
                      key={r.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="rounded-xl bg-white/10 backdrop-blur-md px-3 py-4 text-center"
                    >
                      <div className="font-display font-bold text-white text-sm">{r.name}</div>
                      <div className="text-[10px] text-white/50 mt-0.5">{r.industry}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <button onClick={() => navigate("recruiters")} className="inline-flex items-center gap-1 text-sm text-amber hover:gap-2 transition-all">
                    See all recruiters <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section-pad bg-gradient-to-b from-brand-pale/30 to-white">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Student Voices"
            title={<>Graduates who walked this path <span className="text-gradient">share their story.</span></>}
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-3xl bg-white border border-border/60 p-6 shadow-premium card-lift"
              >
                <Quote className="h-7 w-7 text-amber" />
                <p className="mt-3 text-sm text-muted-ink leading-relaxed">{t.quote}</p>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border/60">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-brand to-brand-bright text-white flex items-center justify-center font-display font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-navy text-sm">{t.name}</div>
                    <div className="text-xs text-muted-ink">{t.role} · {t.batch}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-aurora opacity-50" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-brand/30 blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-amber/15 blur-3xl animate-float-slow" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber"
          >
            <Star className="h-3.5 w-3.5" /> Admissions Open 2025
          </motion.div>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Ready to engineer <br /> your <span className="text-gradient">future?</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-white/75">
            Take the first step. Our admissions team is here to guide you through every stage — from program selection to seat confirmation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="apply" size="lg" variant="amber" iconRight={<ArrowRight className="h-4 w-4" />}>Apply Now</CTAButton>
            <CTAButton href={`tel:${SITE.contact.primaryPhoneRaw}`} size="lg" variant="white" icon={<Phone className="h-4 w-4" />}>
              {SITE.contact.primaryPhone}
            </CTAButton>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-amber" /> Scholarships available</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-amber" /> Hostel & transport</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-amber" /> AICTE · VTU · UGC</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatTile({ stat, delay }: { stat: typeof STATS[number]; delay: number }) {
  const iconMap: Record<string, React.ReactNode> = {
    calendar: <Award className="h-5 w-5" />,
    trees: <MapPin className="h-5 w-5" />,
    graduation: <GraduationCap className="h-5 w-5" />,
    briefcase: <Trophy className="h-5 w-5" />,
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="p-6 lg:p-8 text-center"
    >
      <div className="inline-flex h-12 w-12 rounded-2xl bg-brand-pale text-brand items-center justify-center">
        {iconMap[stat.icon]}
      </div>
      <div className="mt-4 font-display text-3xl lg:text-4xl font-extrabold text-navy counter-num">
        <Counter value={stat.value} suffix={stat.suffix} />
      </div>
      <div className="mt-1 text-xs lg:text-sm text-muted-ink font-medium">{stat.label}</div>
    </motion.div>
  );
}
