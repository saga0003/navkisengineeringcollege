"use client";

import { motion } from "framer-motion";
import {
  Palette, Cpu, Trophy, BookOpen, Leaf, Users, Heart, Award, ArrowRight,
} from "lucide-react";
import { CLUBS } from "@/lib/site-data";
import { CTAButton, SectionHeading } from "../ui-bits";
import { PageHero } from "../page-hero";

const ICONS: Record<string, React.ReactNode> = {
  palette: <Palette className="h-6 w-6" />,
  cpu: <Cpu className="h-6 w-6" />,
  trophy: <Trophy className="h-6 w-6" />,
  "book-open": <BookOpen className="h-6 w-6" />,
  leaf: <Leaf className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  heart: <Heart className="h-6 w-6" />,
  award: <Award className="h-6 w-6" />,
};

export function ClubsPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Clubs & Activities"
        title={<>Where passions <span className="text-gradient">find their people.</span></>}
        description="From coding hackathons to cultural fests, sports to literary meets — campus life at Navkis is shaped by curiosity, friendship and a strong sense of community."
        crumbs={[{ label: "Campus Life", to: "campus-life" }, { label: "Clubs & Activities" }]}
        image="/images/campus/campus_03.jpg"
      />

      <section className="section-pad">
        <div className="container-pad">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLUBS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group rounded-3xl bg-white border border-border/60 p-7 shadow-premium card-lift relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand/5 group-hover:bg-brand/10 transition-colors" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 rounded-2xl bg-gradient-to-br from-brand to-brand-bright text-white items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    {ICONS[c.icon] || <Users className="h-6 w-6" />}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-ink leading-relaxed">{c.blurb}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & outreach strip */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Innovation & Outreach"
            title={<>Beyond clubs — <span className="text-gradient">cells that build careers.</span></>}
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Institution's Innovation Council", desc: "IIC drives innovation, IPR, hackathons and start-up culture on campus — supported by AICTE and MoE." },
              { title: "Design & Innovation Lab", desc: "DIL provides students tools, mentorship and workspace to turn ideas into working prototypes." },
              { title: "IoT Skill Laboratory", desc: "An advanced IoT skill lab for hands-on learning in sensors, embedded systems and connected devices." },
              { title: "Career Guidance Cell", desc: "One-on-one career mentoring, higher-studies guidance and industry networking." },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-6 text-white shadow-premium relative overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand/30 blur-2xl" />
                <div className="relative">
                  <div className="font-display font-bold text-amber text-xs uppercase tracking-wider">Cell</div>
                  <h3 className="mt-2 font-display font-bold text-white text-base leading-tight">{c.title}</h3>
                  <p className="mt-2 text-xs text-white/70 leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
            Want to start a new club?
          </h2>
          <p className="mt-3 text-muted-ink max-w-xl mx-auto">
            We support student-led initiatives. If you have an idea for a new club or activity, our student council will help you make it happen.
          </p>
          <div className="mt-6">
            <CTAButton to="contact" iconRight={<ArrowRight className="h-4 w-4" />}>Get in Touch</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
