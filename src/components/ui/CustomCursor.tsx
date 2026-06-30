"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 280, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Offset to center the 1.5-pixel dot inside the 32-pixel outer ring
  const dotX = useTransform(cursorXSpring, (val) => val + 13);
  const dotY = useTransform(cursorYSpring, (val) => val + 13);

  useEffect(() => {
    // Only enable on desktop/laptops (mouse pointer environments)
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-secondary pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 1.4 : 1,
          borderWidth: isHovered ? "1.5px" : "1px",
          backgroundColor: isHovered ? "rgba(13, 148, 136, 0.06)" : "rgba(13, 148, 136, 0)",
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-secondary rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
      />
    </>
  );
}
