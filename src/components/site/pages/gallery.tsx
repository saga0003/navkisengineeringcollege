"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { CTAButton, SectionHeading, Badge } from "../ui-bits";
import { PageHero } from "../page-hero";

const GALLERY = [
  { src: "/images/campus/campus_00.jpg", category: "Campus", title: "Campus View" },
  { src: "/images/campus/campus_01.jpg", category: "Campus", title: "Building" },
  { src: "/images/campus/campus_02.jpg", category: "Campus", title: "Block" },
  { src: "/images/campus/campus_03.jpg", category: "Campus", title: "Grounds" },
  { src: "/images/library/library_03.jpeg", category: "Library", title: "Library" },
  { src: "/images/library/library_04.jpg", category: "Library", title: "Reading Hall" },
  { src: "/images/library/library_05.jpg", category: "Library", title: "Stacks" },
  { src: "/images/library/library_07.jpeg", category: "Library", title: "Digital Library" },
  { src: "/images/library/library_08.jpeg", category: "Library", title: "Reference" },
  { src: "/images/amenities/amenities_02.jpg", category: "Amenities", title: "Amenities" },
  { src: "/images/amenities/amenities_05.jpg", category: "Amenities", title: "Canteen" },
  { src: "/images/amenities/amenities_07.jpg", category: "Amenities", title: "Common Area" },
  { src: "/images/labs/labs_00.jpg", category: "Labs", title: "Lab" },
  { src: "/images/labs/labs_02.jpg", category: "Labs", title: "Workshop" },
  { src: "/images/labs/labs_03.jpg", category: "Labs", title: "Equipment" },
  { src: "/images/labs/labs_04.jpg", category: "Labs", title: "Practical Lab" },
  { src: "/images/departments/departments_01.jpg", category: "Departments", title: "CSE Block" },
  { src: "/images/departments/departments_03.jpg", category: "Departments", title: "ECE Block" },
];

const CATEGORIES = ["All", "Campus", "Library", "Labs", "Amenities", "Departments"];

export function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = GALLERY.filter((g) => filter === "All" || g.category === filter);

  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Gallery"
        title={<>Snapshots from <span className="text-gradient">life at Navkis.</span></>}
        description="A glimpse of our 12-acre campus — modern labs, a vibrant library, sports facilities, hostels and the everyday moments that make Navkis special."
        crumbs={[{ label: "Campus Life", to: "campus-life" }, { label: "Gallery" }]}
      />

      {/* Filter pills */}
      <section className="pt-12">
        <div className="container-pad">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === c
                    ? "bg-brand text-white shadow-glow"
                    : "bg-white border border-border/60 text-navy hover:bg-brand-pale"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {filtered.map((g, i) => (
              <motion.button
                key={g.src + i}
                onClick={() => setLightbox(g.src)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className="group relative w-full mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-premium"
              >
                <img
                  src={g.src}
                  alt={g.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Badge variant="amber">{g.category}</Badge>
                  <div className="mt-1.5 font-display font-semibold text-sm">{g.title}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-navy/90 backdrop-blur-md flex items-center justify-center p-4 lg:p-12"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt="Gallery"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="section-pad bg-gradient-to-b from-white to-brand-pale/30">
        <div className="container-pad text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
            See it for yourself.
          </h2>
          <p className="mt-3 text-muted-ink max-w-xl mx-auto">
            Schedule a guided campus tour and experience Navkis in person.
          </p>
          <div className="mt-6">
            <CTAButton to="contact" iconRight={<ArrowRight className="h-4 w-4" />}>Schedule a Visit</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
