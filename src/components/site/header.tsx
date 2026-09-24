"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu, X, ChevronDown, Phone, Mail, ArrowRight, MapPin,
} from "lucide-react";
import { NAV, SITE, type RouteId } from "@/lib/site-data";
import { useNav } from "@/lib/use-router";
import { CTAButton } from "./ui-bits";

export function Header() {
  const { route, navigate } = useNav();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer whenever the route (hash) changes.
  useEffect(() => {
    const onHashChange = () => setMobileOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const isActive = (id: RouteId) => route.page === id;

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-navy text-white/90 text-xs">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE.contact.primaryPhoneRaw}`} className="inline-flex items-center gap-1.5 hover:text-amber transition-colors">
              <Phone className="h-3 w-3" /> {SITE.contact.primaryPhone}
            </a>
            <a href={`mailto:${SITE.contact.admissionsEmail}`} className="inline-flex items-center gap-1.5 hover:text-amber transition-colors">
              <Mail className="h-3 w-3" /> {SITE.contact.admissionsEmail}
            </a>
            <span className="inline-flex items-center gap-1.5 text-white/60">
              <MapPin className="h-3 w-3" /> Hassan, Karnataka
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60">AICTE Approved · VTU Affiliated · UGC 2(f)</span>
            <a
              href="#/apply"
              onClick={(e) => { e.preventDefault(); navigate("apply"); }}
              className="inline-flex items-center gap-1 text-amber hover:text-amber-deep font-semibold"
            >
              Apply Now <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-premium border-b border-border/60"
            : "bg-white/0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => navigate("home")}
              className="flex items-center gap-3 focus-ring rounded-lg"
              aria-label="Navkis College of Engineering — Home"
            >
              <div className="relative h-10 lg:h-12 w-10 lg:w-12 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center shadow-glow overflow-hidden">
                <span className="font-display font-extrabold text-white text-lg lg:text-xl">N</span>
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-amber animate-float" />
              </div>
              <div className="text-left leading-tight">
                <div className="font-display font-bold text-navy text-base lg:text-lg tracking-tight">Navkis</div>
                <div className="text-[10px] lg:text-xs text-muted-ink font-medium tracking-wide">
                  College of Engineering
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    onClick={() => navigate(item.id)}
                    data-active={isActive(item.id)}
                    className="nav-underline inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy hover:text-brand transition-colors"
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                  </button>

                  {/* Mega menu */}
                  <AnimatePresence>
                    {item.children && openMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="mega-menu absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[320px]"
                      >
                        <div className="rounded-2xl bg-white shadow-premium border border-border/60 overflow-hidden">
                          <div className="p-2">
                            {item.children.map((c, idx) => (
                              <button
                                key={`${c.label}-${idx}`}
                                onClick={() => {
                                  if (c.label.includes("CSE")) navigate("department", "cse");
                                  else if (c.label.includes("ECE")) navigate("department", "ece");
                                  else if (c.label.includes("AI & ML")) navigate("department", "aiml");
                                  else if (c.label.includes("AI & DS")) navigate("department", "aids");
                                  else if (c.label.includes("Civil")) navigate("department", "civil");
                                  else if (c.label.includes("Mechanical")) navigate("department", "mech");
                                  else if (c.label.includes("MCA")) navigate("department", "mca");
                                  else navigate(c.id);
                                  setOpenMenu(null);
                                }}
                                className="group w-full text-left px-3 py-2.5 rounded-xl hover:bg-brand-pale transition-colors flex items-start gap-3"
                              >
                                <div className="h-8 w-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                                  <ArrowRight className="h-4 w-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm font-semibold text-navy">{c.label}</div>
                                  {c.description && (
                                    <div className="text-xs text-muted-ink truncate">{c.description}</div>
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-2">
              <CTAButton to="admissions" size="sm" className="hidden sm:inline-flex" iconRight={<ArrowRight className="h-3.5 w-3.5" />}>
                Admissions 2025
              </CTAButton>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden h-10 w-10 rounded-xl bg-navy/5 hover:bg-navy/10 flex items-center justify-center text-navy"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-navy/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="fixed right-0 top-0 z-[70] h-full w-[88%] max-w-sm bg-white shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                    <span className="font-display font-extrabold text-white">N</span>
                  </div>
                  <span className="font-display font-bold text-navy">Navkis</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="h-10 w-10 rounded-xl bg-navy/5 hover:bg-navy/10 flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-navy" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
                {NAV.map((item) => (
                  <MobileNavSection key={item.label} item={item} onNavigate={(id, p) => { navigate(id, p); setMobileOpen(false); }} activeId={route.page} />
                ))}
              </div>

              <div className="p-5 border-t border-border space-y-3">
                <CTAButton to="apply" className="w-full justify-center" iconRight={<ArrowRight className="h-4 w-4" />}>
                  Apply Now
                </CTAButton>
                <div className="flex flex-col gap-2 text-xs text-muted-ink">
                  <a href={`tel:${SITE.contact.primaryPhoneRaw}`} className="inline-flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-brand" /> {SITE.contact.primaryPhone}
                  </a>
                  <a href={`mailto:${SITE.contact.admissionsEmail}`} className="inline-flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-brand" /> {SITE.contact.admissionsEmail}
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavSection({
  item, onNavigate, activeId,
}: { item: typeof NAV[number]; onNavigate: (id: RouteId, param?: string) => void; activeId: RouteId }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <button
        onClick={() => onNavigate(item.id)}
        className={`w-full text-left px-4 py-3 rounded-xl font-medium text-navy hover:bg-brand-pale ${activeId === item.id ? "bg-brand-pale text-brand" : ""}`}
      >
        {item.label}
      </button>
    );
  }
  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-navy hover:bg-brand-pale"
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pr-2 py-1 space-y-1">
              {item.children.map((c, idx) => (
                <button
                  key={`${c.label}-${idx}`}
                  onClick={() => {
                    if (c.label.includes("CSE")) onNavigate("department", "cse");
                    else if (c.label.includes("ECE")) onNavigate("department", "ece");
                    else if (c.label.includes("AI & ML")) onNavigate("department", "aiml");
                    else if (c.label.includes("AI & DS")) onNavigate("department", "aids");
                    else if (c.label.includes("Civil")) onNavigate("department", "civil");
                    else if (c.label.includes("Mechanical")) onNavigate("department", "mech");
                    else if (c.label.includes("MCA")) onNavigate("department", "mca");
                    else onNavigate(c.id);
                  }}
                  className="w-full text-left px-4 py-2.5 rounded-lg text-sm text-muted-ink hover:text-brand hover:bg-brand-pale/60"
                >
                  {c.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
