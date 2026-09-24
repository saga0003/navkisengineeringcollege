"use client";

import { Home, ArrowLeft } from "lucide-react";
import { useNav } from "@/lib/use-router";
import { CTAButton } from "../ui-bits";

export function NotFoundPage() {
  const { navigate } = useNav();
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-50" />
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-brand/30 blur-3xl animate-float" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-amber/15 blur-3xl animate-float-slow" />

      <div className="relative text-center px-4">
        <div className="font-display text-7xl sm:text-9xl font-extrabold text-gradient">404</div>
        <h1 className="mt-4 font-display text-2xl sm:text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-white/70 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <CTAButton to="home" variant="amber" icon={<Home className="h-4 w-4" />}>Back to Home</CTAButton>
          <CTAButton onClick={() => window.history.back()} variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white" icon={<ArrowLeft className="h-4 w-4" />}>
            Go Back
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
