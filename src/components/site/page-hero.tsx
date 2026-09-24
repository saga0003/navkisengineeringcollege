"use client";

import { motion } from "framer-motion";
import type { RouteId } from "@/lib/site-data";
import { useNav } from "@/lib/use-router";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  to?: RouteId;
}

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs?: Crumb[];
  image?: string;
  align?: "left" | "center";
}

export function PageHero({ eyebrow, title, description, crumbs = [], image, align = "center" }: Props) {
  const { navigate } = useNav();
  const isCenter = align === "center";

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-aurora opacity-50" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      {image && (
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/85 to-navy" />
      {/* Floating orbs */}
      <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-brand/30 blur-3xl animate-float" />
      <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-amber/15 blur-3xl animate-float-slow" />

      <div className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 ${isCenter ? "text-center" : "text-left"}`}>
        {crumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`flex flex-wrap items-center gap-1.5 text-xs text-white/60 ${isCenter ? "justify-center" : ""}`}
          >
            <button onClick={() => navigate("home")} className="hover:text-amber">Home</button>
            {crumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                {c.to ? (
                  <button onClick={() => navigate(c.to!)} className="hover:text-amber">{c.label}</button>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber ${isCenter ? "mx-auto" : ""}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            {eyebrow}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className={`mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] ${isCenter ? "mx-auto max-w-4xl" : "max-w-4xl"}`}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className={`mt-5 text-base sm:text-lg leading-relaxed text-white/75 ${isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Wave divider */}
      <div className="relative -mb-1">
        <svg className="block w-full h-12 lg:h-16" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
          <path d="M0 80V40C240 0 480 0 720 30C960 60 1200 60 1440 30V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
