"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { CTAButton, SectionHeading } from "../ui-bits";
import { PageHero } from "../page-hero";

export function TestimonialsPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Student Voices"
        title={<>Graduates who walked this path — <span className="text-gradient">share their story.</span></>}
        description="Real voices from Navkis alumni who are now building careers across IT services, product, analytics, engineering and consulting."
        crumbs={[{ label: "Placements", to: "placements" }, { label: "Student Voices" }]}
        image="/images/testimonials/testimonials_00.jpeg"
        align="left"
      />

      <section className="section-pad">
        <div className="container-pad">
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-3xl bg-white border border-border/60 p-7 lg:p-8 shadow-premium card-lift relative overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand/5" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <Quote className="h-9 w-9 text-amber" />
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-amber text-amber" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-base text-navy leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-brand to-brand-bright text-white flex items-center justify-center font-display font-bold text-xl">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-display font-bold text-navy">{t.name}</div>
                      <div className="text-sm text-muted-ink">{t.role} · {t.company}</div>
                      <div className="text-xs text-brand font-semibold mt-0.5">{t.batch}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
            Your story could be next.
          </h2>
          <p className="mt-3 text-muted-ink max-w-xl mx-auto">
            Join the next batch of Navkis graduates stepping into careers they're proud of.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="apply" variant="amber" iconRight={<ArrowRight className="h-4 w-4" />}>Apply Now</CTAButton>
            <CTAButton to="placements" variant="outline">Placement Cell</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
