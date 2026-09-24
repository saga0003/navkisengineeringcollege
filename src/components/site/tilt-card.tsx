"use client";

import { useRef, useState } from "react";

/**
 * TiltCard — 3D perspective tilt on mouse move.
 * Lightweight, GPU-accelerated, no external deps.
 */
interface Props {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // 1-20
  glare?: boolean;
}

export function TiltCard({ children, className = "", intensity = 8, glare = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, o: 0 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) - 0.5;
    const py = (y / rect.height) - 0.5;
    const rx = (-py * intensity).toFixed(2);
    const ry = (px * intensity).toFixed(2);
    setTransform(`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`);
    setGlarePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, o: 0.18 });
  }

  function onLeave() {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)");
    setGlarePos((g) => ({ ...g, o: 0 }));
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt-card relative ${className}`}
      style={{ transform }}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.o}) 0%, transparent 60%)`,
            opacity: glarePos.o > 0 ? 1 : 0,
          }}
        />
      )}
    </div>
  );
}
