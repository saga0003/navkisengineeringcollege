"use client";

import { motion } from "framer-motion";
import type { RouteId } from "@/lib/site-data";
import { useNav } from "@/lib/use-router";

/**
 * Reusable button with brand styling.
 */
type Variant = "primary" | "amber" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

interface Props {
  children: React.ReactNode;
  to?: RouteId;
  param?: string;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export function CTAButton({
  children, to, param, href, variant = "primary", size = "md", className = "", onClick, icon, iconRight,
}: Props) {
  const { navigate } = useNav();

  const variants: Record<Variant, string> = {
    primary:
      "bg-gradient-to-br from-brand to-brand-bright text-white shadow-glow hover:shadow-[0_10px_30px_rgba(44,128,211,0.45)] hover:-translate-y-0.5",
    amber:
      "bg-gradient-to-br from-amber to-amber-deep text-navy shadow-amber-glow hover:shadow-[0_10px_30px_rgba(255,153,0,0.45)] hover:-translate-y-0.5",
    outline:
      "border-2 border-brand/30 text-brand bg-white/60 backdrop-blur-md hover:border-brand hover:bg-brand-pale/40",
    ghost:
      "text-navy hover:bg-navy/5",
    white:
      "bg-white text-navy shadow-premium hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]",
  };

  const sizes: Record<Size, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const cls = `group relative inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-tight transition-all duration-300 focus-ring ${variants[variant]} ${sizes[size]} ${className}`;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
      return;
    }
    if (to) {
      e.preventDefault();
      navigate(to, param);
    } else if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  const content = (
    <>
      {icon && <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {iconRight && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">{iconRight}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={handleClick} className={cls} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={handleClick} className={cls}>
      {content}
    </button>
  );
}

/**
 * SectionHeading — eyebrow + title + optional description.
 */
interface HeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", className = "" }: HeadingProps) {
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center max-w-3xl" : "text-left max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 rounded-full bg-brand-pale px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand ${align === "center" ? "mx-auto" : ""}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-[1.05]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className={`mt-4 text-base sm:text-lg leading-relaxed text-muted-ink ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

/**
 * Badge — small label.
 */
export function Badge({ children, variant = "brand" }: { children: React.ReactNode; variant?: "brand" | "amber" | "navy" | "muted" }) {
  const variants = {
    brand: "bg-brand-pale text-brand",
    amber: "bg-amber/10 text-amber-deep",
    navy: "bg-navy/5 text-navy",
    muted: "bg-muted text-muted-ink",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]}`}>
      {children}
    </span>
  );
}
