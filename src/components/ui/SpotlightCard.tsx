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
  glowColor = "rgba(13, 148, 136, 0.05)",
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
      }}
      className="relative rounded-2xl p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/[0.02] h-full w-full"
    >
      {/* Outer Mouse-Tracking Border Glow (1px visible edge) */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: isFocused ? 1 : 0.35,
          background: isFocused 
            ? `radial-gradient(130px circle at ${coords.x}px ${coords.y}px, rgba(13, 148, 136, 0.35), transparent 100%)`
            : "rgba(13, 148, 136, 0.08)",
        }}
      />
      
      {/* Inner Card Body (Inherits padding, height, and flex from className) */}
      <div 
        className={`relative rounded-[15px] bg-white/75 backdrop-blur-xl h-full w-full overflow-hidden ${className}`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Spotlight Radial Background Glow */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500"
          style={{
            opacity: isFocused ? 1 : 0,
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
          }}
        />

        {/* Content - floats slightly above background for parallax depth */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between" style={{ transform: "translateZ(15px)" }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}
