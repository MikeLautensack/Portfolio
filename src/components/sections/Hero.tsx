"use client";

import React from "react";
import HeroContent from "../misc/HeroContent";
import { FaAnglesDown } from "react-icons/fa6";
import * as motion from "framer-motion/client";
import dynamic from "next/dynamic";

// Dynamic import with SSR disabled for 3D scene
const Scene = dynamic(() => import("../scene/Scene"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
    </div>
  ),
});

const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)] flex-col justify-center overflow-hidden bg-bg">
      {/* Ambient glow + dotted grid */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] [background-size:34px_34px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div
        id="content-and-scene"
        className="relative z-10 mx-auto flex w-full max-w-content flex-col items-start gap-12 px-6 py-24 md:flex-row md:items-center md:px-10 md:py-0 lg:justify-start"
      >
        <HeroContent />
        <motion.div
          id="scene-container"
          className="pointer-events-none absolute right-0 top-60 z-0 flex w-full opacity-50 md:top-52 md:opacity-100 lg:top-auto lg:h-2/3 lg:w-1/2 lg:flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            backgroundColor: "transparent", // Prevent white flash
          }}
        >
          <Scene />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        initial={{ y: -8, opacity: 0.4 }}
        animate={{ y: 4, opacity: 1 }}
        transition={{ duration: 1.4, repeat: Infinity, repeatType: "reverse" }}
      >
        <FaAnglesDown className="text-accent" />
      </motion.div>
    </section>
  );
};

export default Hero;
