"use client";
import { Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.section
      className="py-16 px-6 md:px-10 max-w-6xl mx-auto"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full flex flex-col gap-12">
        <div className="relative">
          <Typography
            variant="h4"
            className="text-white font-bold text-3xl md:text-4xl relative inline-block pb-2"
          >
            About Me
            <span className="absolute bottom-0 left-0 w-full md:w-3/4 h-1 bg-[#31B0E9] rounded-full"></span>
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-12 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                className="text-white text-lg leading-relaxed"
              >
                As a self-taught Full Stack Web Developer with 2.25 years of
                focused experience, I specialize in creating robust web
                applications using TypeScript, React, Next.js, and Vite. My
                expertise spans frontend, backend, and fullstack development,
                with a proven track record on Upwork as a Top Rated freelancer
                with a 100% Job Success Score.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography
                variant="body1"
                className="text-white text-lg leading-relaxed"
              >
                I excel in deploying Next.js applications on Vercel and RESTful
                APIs to Azure, delivering comprehensive cloud solutions. My
                projects, including an Estimate Generator for contractors and a
                real-time Socket.io Chat App, showcase my ability to implement
                complex features and integrate various technologies seamlessly.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Typography
                variant="body1"
                className="text-white text-lg leading-relaxed"
              >
                What sets me apart is my unique blend of technical expertise and
                business acumen, derived from prior entrepreneurial experience.
                This background enables me to build technically sound solutions
                that align closely with small business needs, particularly in
                developing SaaS products. My approach combines meticulous
                attention to detail with a forward-thinking mindset, driving me
                to create innovative web solutions that efficiently solve
                real-world problems.
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
