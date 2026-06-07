import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroContent = () => {
  return (
    <motion.div
      className="relative z-10 flex w-full flex-col items-start gap-6 lg:w-7/12"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.span
        variants={item}
        className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-xs text-ink-muted"
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
        Based in Norristown, PA · Remote-friendly
      </motion.span>

      <motion.p
        variants={item}
        className="font-mono text-sm text-accent md:text-base"
      >
        Hi, I&apos;m Mike Lautensack
      </motion.p>

      <motion.h1
        variants={item}
        className="text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
      >
        Full-Stack
        <br />
        <span className="text-accent">Web Developer</span>
      </motion.h1>

      <motion.p
        variants={item}
        className="max-w-md text-base leading-relaxed text-ink-muted md:text-lg"
      >
        I build robust, production-grade web applications with{" "}
        <span className="text-ink">TypeScript</span>,{" "}
        <span className="text-ink">React</span>, and{" "}
        <span className="text-ink">Next.js</span>.
      </motion.p>

      <motion.div
        variants={item}
        className="flex flex-wrap items-center gap-3 pt-2"
      >
        <Link href="/projects">
          <Button variant="contained" color="primary" size="large">
            View Projects
          </Button>
        </Link>
        <Link href="/hire-me">
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: "rgba(255,255,255,0.18)",
              color: "#E7ECF2",
              "&:hover": {
                borderColor: "#31B0E9",
                backgroundColor: "rgba(49,176,233,0.08)",
              },
            }}
          >
            Get in Touch
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
