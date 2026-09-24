"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Home, Trophy, Coffee, Bus, Heart, CheckCircle2 } from "lucide-react";
import { FACILITIES } from "@/lib/site-data";
import { CTAButton, SectionHeading, Badge } from "../ui-bits";
import { PageHero } from "../page-hero";
import { TiltCard } from "../tilt-card";

const ICONS: Record<string, React.ReactNode> = {
  book: <BookOpen className="h-6 w-6" />,
  home: <Home className="h-6 w-6" />,
  trophy: <Trophy className="h-6 w-6" />,
  utensils: <Coffee className="h-6 w-6" />,
  bus: <Bus className="h-6 w-6" />,
  "heart-pulse": <Heart className="h-6 w-6" />,
};

export function FacilitiesPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Campus Facilities"
        title={<>Infrastructure built for <span className="text-gradient">serious learning.</span></>}
        description="Modern, well-maintained facilities designed for academic focus, comfortable living and an engaging campus experience — all on a 12-acre green campus at Hassan."
        crumbs={[{ label: "Campus Life", to: "campus-life" }, { label: "Facilities" }]}
        image="/images/library/library_03.jpeg"
        align="left"
      />

      <section className="section-pad">
        <div className="container-pad space-y-16">
          {FACILITIES.map((f, i) => (
            <motion.div
              key={f.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
            >
              <div className={`relative ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-premium">
                  <img src={f.image} alt={f.name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                </div>
                <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-2xl bg-amber text-navy flex items-center justify-center shadow-amber-glow">
                  {ICONS[f.icon]}
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <Badge variant="brand">Facility</Badge>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-navy tracking-tight leading-tight">{f.name}</h2>
                <p className="mt-2 text-base text-amber-deep font-display font-semibold">{f.blurb}</p>
                <p className="mt-4 text-muted-ink leading-relaxed">{f.description}</p>
                <div className="mt-5 grid sm:grid-cols-2 gap-2">
                  {f.highlights.map((h, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-navy">
                      <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" /> {h}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
            Want to visit the campus?
          </h2>
          <p className="mt-3 text-muted-ink max-w-xl mx-auto">
            Schedule a guided campus tour — see our labs, library, hostels and amenities for yourself.
          </p>
          <div className="mt-6">
            <CTAButton to="contact" iconRight={<ArrowRight className="h-4 w-4" />}>Schedule a Visit</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
