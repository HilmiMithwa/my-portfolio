"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Welcome",        // English
  "Bienvenue",      // French
  "Bienvenido",     // Spanish
  "Willkommen",     // German
  "ようこそ",        // Japanese (Yōkoso)
  "환영합니다",      // Korean (Hwanyeonghamnida)
  "欢迎",           // Chinese (Huānyíng)
  "Selamat Datang"  // Indonesian
];

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [index, setIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle window dimensions
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cycle through the words
  useEffect(() => {
    if (index === words.length - 1) {
      // Hold "Selamat Datang" for a bit longer before completing
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 180); // Speed of greeting cycle (180ms per word)

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  // If dimensions are not calculated yet, render a plain black cover to avoid layout flash
  if (dimensions.width === 0) {
    return (
      <div className="fixed inset-0 bg-[#000000] z-[9999]" />
    );
  }

  // Define paths for SVG curved background
  const initialPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${dimensions.height} Q${dimensions.width / 2} ${dimensions.height + 300} 0 ${dimensions.height} Z`;
  const targetPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${dimensions.height} Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height} Z`;

  // Animation variants
  const slideUp = {
    initial: {
      y: 0,
    },
    exit: {
      y: "-100vh",
      transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  } as const;

  const pathAnimation = {
    initial: {
      d: initialPath,
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
    },
  } as const;

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[9999] overflow-visible pointer-events-none select-none"
    >
      {/* Background SVG covering screen and animating/morphing */}
      <svg className="absolute top-0 left-0 w-full h-[calc(100%+300px)] fill-[#0b0b0f] z-[-1]">
        <motion.path
          variants={pathAnimation}
          initial="initial"
          exit="exit"
        />
      </svg>

      {/* Main intro content */}
      <div className="flex flex-col items-center gap-6 relative z-10">
        {/* Pulsing indicator dot */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#2176FF] block shadow-[0_0_12px_#2176FF]" />
          <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-gray-500 font-poppins">
            HILMI MITHWA
          </span>
        </motion.div>

        {/* Text transition container */}
        <div className="h-[70px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-white text-3xl md:text-5xl lg:text-6xl font-medium tracking-wide font-poppins"
            >
              {words[index]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
