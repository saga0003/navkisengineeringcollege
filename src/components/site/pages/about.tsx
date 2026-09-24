"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Award, Building2, BookOpen, CheckCircle2, Target, Eye, Compass } from "lucide-react";
import { useNav } from "@/lib/use-router";
import { SITE, ACCREDITATIONS, APPROVALS_LIST } from "@/lib/site-data";
import { CTAButton, SectionHeading, Badge } from "../ui-bits";
import { PageHero } from "../page-hero";
import { TiltCard } from "../tilt-card";

export function AboutPage() {
  const { navigate } = useNav();

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="About the College"
        title={<>A legacy of <span className="text-gradient">learning</span> with an eye on the future.</>}
        description="Established in 2009-10 by the Yagachi Education and Research Trust, Navkis College of Engineering, Hassan has been under the patronage of the Navkis Group of Institutions, Bengaluru since 2019-20."
        crumbs={[{ label: "About" }]}
        image="/images/campus/campus_00.jpg"
      />

      {/* Story */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="brand">Our Story</Badge>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight leading-tight">
                Professionally governed. <br />Quality-driven. <span className="text-gradient">Future-focused.</span>
              </h2>
              <p className="mt-5 text-muted-ink leading-relaxed">
                Navkis College of Engineering (NCEH) is a professionally governed technical institution committed to academic excellence, ethical values, innovation, research orientation and holistic student development.
              </p>
              <p className="mt-4 text-muted-ink leading-relaxed">
                The college is approved by AICTE, affiliated to Visvesvaraya Technological University (VTU), Belagavi, and recognised under Section 2(f) of the UGC Act. All academic and administrative processes are carried out in strict compliance with statutory and regulatory requirements.
              </p>
              <p className="mt-4 text-muted-ink leading-relaxed">
                Located in a serene and picturesque campus at Hassan, the college provides an intellectually stimulating academic ambience supported by state-of-the-art infrastructure, modern laboratories, ICT-enabled classrooms, robust digital systems and comprehensive student support facilities.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton to="vision-mission" iconRight={<ArrowRight className="h-4 w-4" />}>Vision & Mission</CTAButton>
                <CTAButton to="leadership" variant="outline">Our Leadership</CTAButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "2009-10", label: "Established", icon: Award, color: "brand" },
                { value: "12", label: "Acre Green Campus", icon: Building2, color: "amber" },
                { value: "8", label: "Academic Programs", icon: GraduationCap, color: "brand" },
                { value: "20,000+", label: "Library Volumes", icon: BookOpen, color: "amber" },
              ].map((s, i) => (
                <TiltCard
                  key={s.label}
                  intensity={5}
                  className={`rounded-3xl p-6 ${i % 2 ? "translate-y-6" : ""} ${s.color === "brand" ? "bg-gradient-to-br from-navy to-navy-light text-white" : "bg-white border border-border/60 shadow-premium text-navy"}`}
                >
                  <s.icon className={`h-7 w-7 ${s.color === "brand" ? "text-amber" : "text-brand"}`} />
                  <div className="mt-4 font-display text-3xl font-extrabold">{s.value}</div>
                  <div className={`text-sm mt-1 ${s.color === "brand" ? "text-white/70" : "text-muted-ink"}`}>{s.label}</div>
                </TiltCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <SectionHeading
            eyebrow="At a Glance"
            title={<>Everything you need to know, <span className="text-gradient">in one place.</span></>}
          />
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {[
              { title: "Trust & Group", desc: `Established by the Yagachi Education and Research Trust. Under the patronage of ${SITE.group} since 2019-20.` },
              { title: "Approvals & Affiliation", desc: "Approved by AICTE, affiliated to VTU Belagavi, and recognised under Section 2(f) of the UGC Act." },
              { title: "Academic Portfolio", desc: "8 academic programs at UG and PG levels designed as per AICTE norms and VTU curriculum frameworks." },
              { title: "Campus & Infrastructure", desc: "12-acre green campus with modern laboratories, ICT-enabled classrooms, library, hostel, sports and transport." },
              { title: "Research & Innovation", desc: "Design & Innovation Lab, IoT Skill Lab, Institution's Innovation Council and active faculty research." },
              { title: "Holistic Development", desc: "Cultural, technical, sports, literary and eco clubs alongside NSS, Red Cross and professional body chapters." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl bg-white border border-border/60 p-6 shadow-premium card-lift"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-ink leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Accreditation & Approvals"
            title={<>Statutory compliance, <span className="text-gradient">transparently documented.</span></>}
            description="NCE Hassan maintains strict compliance with all statutory and regulatory requirements. The following approvals and recognitions are in place."
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
                  <div className="font-display text-3xl font-extrabold text-amber">{a.code}</div>
                  <div className="mt-3 font-display font-semibold">{a.name}</div>
                  <div className="mt-1 text-xs text-white/60">{a.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-muted/60 border border-border/60 p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-lg font-bold text-navy">Mandatory Disclosure Documents</h3>
                <p className="mt-2 text-sm text-muted-ink">The following statutory documents are updated annually and available on request.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {APPROVALS_LIST.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-navy">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" /> {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-40" />
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
        <div className="relative container-pad">
          <SectionHeading
            eyebrow="Our Values"
            title={<span className="text-white">The principles that <span className="text-gradient">guide us.</span></span>}
            description={<span className="text-white/75">Four commitments that shape every decision — from curriculum design to campus culture.</span>}
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Target, title: "Academic Excellence", desc: "Rigorous, outcome-driven education aligned with industry and academic best practice." },
              { icon: Compass, title: "Ethical Values", desc: "Honesty, integrity and professional ethics in everything we do." },
              { icon: Award, title: "Innovation", desc: "Curiosity-driven research, design and innovation across every department." },
              { icon: Eye, title: "Social Responsibility", desc: "Community engagement, sustainability and inclusive development." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-6 card-lift"
              >
                <div className="h-12 w-12 rounded-2xl bg-amber/20 text-amber flex items-center justify-center">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="rounded-3xl bg-gradient-to-br from-brand-pale/60 to-amber/10 p-8 lg:p-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
              Want to know more about Navkis?
            </h2>
            <p className="mt-3 text-muted-ink max-w-xl mx-auto">
              Explore our vision & mission, meet our leadership, or get in touch with our admissions team.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <CTAButton to="vision-mission" iconRight={<ArrowRight className="h-4 w-4" />}>Vision & Mission</CTAButton>
              <CTAButton to="leadership" variant="outline">Our Leadership</CTAButton>
              <CTAButton to="contact" variant="ghost">Contact Us</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
