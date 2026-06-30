"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  glowColor = "rgba(181, 148, 104, 0.08)",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Subtly rotate the card in 3D space on hover (max 4.5 degrees)
  const rotateX = useTransform(y, [0, 1], ["4.5deg", "-4.5deg"]);
  const rotateY = useTransform(x, [0, 1], ["-4.5deg", "4.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate relative mouse position (0 to 1)
    const mouseX = (e.clientX - rect.left) / width;
    const mouseY = (e.clientY - rect.top) / height;

    x.set(mouseX);
    y.set(mouseY);

    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsFocused(true);
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
    // Reset tilt smoothly
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
        background: "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      className={`relative overflow-hidden rounded-2xl border border-slate-200/60 p-8 transition-all duration-300 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/[0.02] ${className}`}
    >
      {/* Spotlight Radial Background Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
          transform: "translateZ(0px)",
        }}
      />

      {/* Spotlight Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(100px circle at ${coords.x}px ${coords.y}px, rgba(181, 148, 104, 0.1), transparent 100%)`,
          border: "1px solid rgba(181, 148, 104, 0.2)",
          transform: "translateZ(0px)",
        }}
      />

      {/* Content - floats slightly above background for parallax depth */}
      <div className="relative z-10" style={{ transform: "translateZ(15px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
