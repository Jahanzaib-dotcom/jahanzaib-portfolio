"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 mt-40 w-full z-[20] max-w-[1240px] m-auto gap-12"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start max-w-[650px]">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] uppercase tracking-wider font-semibold">
            Fullstack &amp; iOS Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-extrabold text-white leading-tight w-auto h-auto"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
            project experience.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-5 leading-relaxed"
        >
          I&apos;m Jahanzaib Shakeel, a Full-Stack &amp; iOS Developer building high-performance systems from SwiftUI applications to C# ASP.NET Core backends. Currently shipping features at <strong className="text-[#b49bff]">Zeetech App</strong>.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="py-3 px-8 text-center text-white cursor-pointer rounded-lg button-primary font-bold uppercase text-sm transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="py-3 px-8 text-center text-[#b49bff] border border-[#7042f88b] rounded-lg font-bold uppercase text-sm hover:bg-[#7042f81a] transition-all duration-200 cursor-pointer"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center max-w-[550px]"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={550}
          width={550}
          draggable={false}
          className="select-none filter drop-shadow-[0_0_30px_rgba(112,66,248,0.25)]"
        />
      </motion.div>
    </motion.div>
  );
};
