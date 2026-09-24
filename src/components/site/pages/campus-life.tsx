"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Coffee, Home, Bus, Trophy, Heart, BookOpen, Wifi } from "lucide-react";
import { useNav } from "@/lib/use-router";
import { FACILITIES, CLUBS } from "@/lib/site-data";
import { CTAButton, SectionHeading, Badge } from "../ui-bits";
import { PageHero } from "../page-hero";
import { TiltCard } from "../tilt-card";

export function CampusLifePage() {
  const { navigate } = useNav();

  const FACILITY_ICONS: Record<string, React.ReactNode> = {
    book: <BookOpen className="h-5 w-5" />,
    home: <Home className="h-5 w-5" />,
    trophy: <Trophy className="h-5 w-5" />,
    utensils: <Coffee className="h-5 w-5" />,
    bus: <Bus className="h-5 w-5" />,
    "heart-pulse": <Heart className="h-5 w-5" />,
  };

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Campus Life"
        title={<>More than a campus. <span className="text-gradient">A community.</span></>}
        description="A 12-acre green campus designed for academic focus, friendship and growth — with modern facilities, vibrant clubs and a culture that makes Navkis feel like home."
        crumbs={[{ label: "Campus Life" }]}
        image="/images/campus/campus_01.jpg"
      />

      {/* Highlight banner */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid lg:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, value: "20,000+", label: "Library Volumes" },
              { icon: Trophy, value: "8+", label: "Active Clubs" },
              { icon: Home, value: "24/7", label: "Hostel Security" },
              { icon: Wifi, value: "Campus-wide", label: "High-Speed Wi-Fi" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl bg-white border border-border/60 p-6 text-center shadow-premium"
              >
                <s.icon className="mx-auto h-7 w-7 text-brand" />
                <div className="mt-3 font-display text-2xl font-extrabold text-navy">{s.value}</div>
                <div className="text-xs text-muted-ink mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities preview */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Facilities at a Glance"
            title={<>Everything you need, <span className="text-gradient">on one campus.</span></>}
            description="Modern, well-maintained infrastructure designed for serious study, comfortable living and a vibrant campus experience."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FACILITIES.map((f, i) => (
              <motion.button
                key={f.slug}
                onClick={() => navigate("facilities")}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group text-left"
              >
                <TiltCard className="rounded-3xl bg-white border border-border/60 overflow-hidden shadow-premium h-full" intensity={5}>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={f.image} alt={f.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                      <div className="h-9 w-9 rounded-xl bg-amber text-navy flex items-center justify-center">
                        {FACILITY_ICONS[f.icon]}
                      </div>
                      <span className="font-display font-bold text-white text-sm">{f.name}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-ink leading-relaxed">{f.blurb}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </TiltCard>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs preview */}
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Clubs & Activities"
            title={<>Passions find their <span className="text-gradient">people here.</span></>}
            description="From coding hackathons to cultural fests, sports to literary meets — campus life at Navkis is shaped by curiosity, friendship and a strong sense of community."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CLUBS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-2xl bg-white border border-border/60 p-5 shadow-premium card-lift"
              >
                <div className="inline-flex h-10 w-10 rounded-xl bg-brand/10 text-brand items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display font-bold text-navy text-sm">{c.name}</h3>
                <p className="mt-1 text-xs text-muted-ink leading-relaxed">{c.blurb}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <CTAButton to="clubs" variant="outline" iconRight={<ArrowRight className="h-4 w-4" />}>All Clubs & Activities</CTAButton>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Snapshots"
            title={<>Moments from <span className="text-gradient">our campus.</span></>}
          />
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              "/images/campus/campus_01.jpg",
              "/images/library/library_03.jpeg",
              "/images/amenities/amenities_02.jpg",
              "/images/campus/campus_03.jpg",
              "/images/library/library_07.jpeg",
              "/images/campus/campus_00.jpg",
              "/images/amenities/amenities_05.jpg",
              "/images/library/library_04.jpg",
            ].map((src, i) => (
              <motion.div
                key={src + i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`relative overflow-hidden rounded-2xl ${i % 5 === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}
              >
                <img src={src} alt={`Campus life ${i + 1}`} className={`w-full ${i % 5 === 0 ? "h-64" : "h-44"} object-cover transition-transform duration-700 hover:scale-105`} />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <CTAButton to="gallery" iconRight={<ArrowRight className="h-4 w-4" />}>View Full Gallery</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
