"use client";

import { Phone, Mail, MapPin, ArrowUpRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { NAV, SITE, type RouteId } from "@/lib/site-data";
import { useNav } from "@/lib/use-router";

export function Footer() {
  const { navigate } = useNav();

  return (
    <footer className="relative mt-auto bg-navy text-white/80 overflow-hidden">
      {/* Decorative aurora */}
      <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-brand/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-amber/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top CTA strip */}
        <div className="py-12 lg:py-16 border-b border-white/10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Your engineering journey starts here.
              </h3>
              <p className="mt-2 text-white/70 max-w-xl">
                Talk to our admissions team and discover the program that fits your ambition.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SITE.contact.primaryPhoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors"
              >
                <Phone className="h-4 w-4" /> {SITE.contact.primaryPhone}
              </a>
              <button
                onClick={() => navigate("apply")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-amber to-amber-deep text-navy px-6 py-3 text-sm font-semibold shadow-amber-glow hover:-translate-y-0.5 transition-transform"
              >
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand to-brand-bright flex items-center justify-center shadow-glow">
                <span className="font-display font-extrabold text-white text-xl">N</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">Navkis</div>
                <div className="text-xs text-white/60">College of Engineering</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              A state-of-the-art technical institution committed to academic excellence, innovation and holistic development. Established {SITE.established}.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {SITE.approvals.map((a) => (
                <span key={a} className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/85">
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <FooterCol title="Explore">
            {NAV.slice(0, 6).map((n) => (
              <FooterLink key={n.label} label={n.label} onClick={() => navigate(n.id)} />
            ))}
          </FooterCol>

          <FooterCol title="Admissions & Campus">
            <FooterLink label="Apply Online" onClick={() => navigate("apply")} />
            <FooterLink label="Admission Process" onClick={() => navigate("admissions")} />
            <FooterLink label="Scholarships" onClick={() => navigate("scholarships")} />
            <FooterLink label="Campus Life" onClick={() => navigate("campus-life")} />
            <FooterLink label="Facilities" onClick={() => navigate("facilities")} />
            <FooterLink label="Gallery" onClick={() => navigate("gallery")} />
            <FooterLink label="Careers" onClick={() => navigate("careers")} />
          </FooterCol>

          <FooterCol title="Reach Us">
            <li>
              <a href={`tel:${SITE.contact.primaryPhoneRaw}`} className="inline-flex items-start gap-2 text-sm text-white/70 hover:text-amber transition-colors">
                <Phone className="h-4 w-4 mt-0.5 text-amber shrink-0" /> {SITE.contact.primaryPhone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.contact.admissionsEmail}`} className="inline-flex items-start gap-2 text-sm text-white/70 hover:text-amber transition-colors break-all">
                <Mail className="h-4 w-4 mt-0.5 text-amber shrink-0" /> {SITE.contact.admissionsEmail}
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4 mt-0.5 text-amber shrink-0" /> {SITE.location.full}
            </li>
            <li className="flex items-center gap-3 pt-3">
              <SocialIcon href={SITE.social.facebook}><Facebook className="h-4 w-4" /></SocialIcon>
              <SocialIcon href={SITE.social.instagram}><Instagram className="h-4 w-4" /></SocialIcon>
              <SocialIcon href={SITE.social.linkedin}><Linkedin className="h-4 w-4" /></SocialIcon>
              <SocialIcon href={SITE.social.youtube}><Youtube className="h-4 w-4" /></SocialIcon>
            </li>
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>AICTE · VTU · UGC 2(f)</span>
            <span>Established {SITE.established}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white/90">{title}</h4>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="group inline-flex items-center gap-1 text-sm text-white/70 hover:text-amber transition-colors"
      >
        <span className="h-px w-0 group-hover:w-3 bg-amber transition-all duration-300" />
        {label}
      </button>
    </li>
  );
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-9 w-9 rounded-lg bg-white/10 hover:bg-amber hover:text-navy flex items-center justify-center transition-colors"
    >
      {children}
    </a>
  );
}

export type { RouteId };
