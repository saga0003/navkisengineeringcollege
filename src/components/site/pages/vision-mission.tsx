"use client";

import { motion } from "framer-motion";
import { Target, Eye, Compass, Heart, Sparkles, ArrowRight } from "lucide-react";
import { useNav } from "@/lib/use-router";
import { CTAButton, SectionHeading } from "../ui-bits";
import { PageHero } from "../page-hero";

export function VisionMissionPage() {
  const { navigate } = useNav();

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Vision & Mission"
        title={<>What drives <span className="text-gradient">Navkis forward.</span></>}
        description="Our vision sets the destination. Our mission maps the journey. Together, they shape every academic and institutional decision we make."
        crumbs={[{ label: "About", to: "about" }, { label: "Vision & Mission" }]}
        align="left"
      />

      {/* Vision */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-8 lg:p-10 text-white overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand/30 blur-3xl" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 rounded-2xl bg-amber/20 text-amber items-center justify-center">
                  <Eye className="h-7 w-7" />
                </div>
                <h2 className="mt-5 font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Vision</h2>
                <p className="mt-4 text-lg sm:text-xl leading-relaxed text-white/85">
                  To be an illustrious institution imparting quality engineering education and prepare globally accredited and socially responsible professionals.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="relative rounded-3xl bg-gradient-to-br from-brand to-brand-bright p-8 lg:p-10 text-white overflow-hidden shadow-glow"
            >
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-amber/20 blur-3xl" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 rounded-2xl bg-white/20 text-white items-center justify-center">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="mt-5 font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Mission</h2>
                <ul className="mt-4 space-y-3">
                  {[
                    "To establish state-of-the-art facilities and a conducive environment for education and research.",
                    "To collaborate with academia and industry.",
                    "To foster professional ethics, innovation, and entrepreneurship.",
                    "To fulfil social obligations.",
                  ].map((m, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/90">
                      <span className="inline-flex h-6 w-6 rounded-full bg-white/20 text-white text-xs font-bold items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Graduate Attributes */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Graduate Attributes"
            title={<>What our graduates <span className="text-gradient">take with them.</span></>}
            description="Beyond the degree, every Navkis graduate is shaped by a set of attributes that define their professional and personal journey."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Compass, title: "Engineering Knowledge", desc: "Strong foundations in mathematics, science and engineering fundamentals applied to complex problems." },
              { icon: Sparkles, title: "Problem Analysis", desc: "Identify, formulate and solve engineering problems using first principles of natural sciences and engineering." },
              { icon: Target, title: "Design & Development", desc: "Design solutions for complex engineering problems that meet specified needs with consideration for public health, safety and culture." },
              { icon: Heart, title: "Ethics & Conduct", desc: "Apply professional ethics, responsibilities and norms of engineering practice in every decision." },
              { icon: Eye, title: "Lifelong Learning", desc: "Recognise the need for and engage in independent, lifelong learning in the broader context of technological change." },
              { icon: Compass, title: "Leadership & Teamwork", desc: "Function effectively as an individual and as a member or leader in diverse teams and multidisciplinary settings." },
            ].map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl bg-white border border-border/60 p-6 shadow-premium card-lift"
              >
                <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-ink leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-pad text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
            See how we put this into <span className="text-gradient">practice.</span>
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="departments" iconRight={<ArrowRight className="h-4 w-4" />}>Explore Programs</CTAButton>
            <CTAButton to="leadership" variant="outline">Our Leadership</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
