"use client";

import React from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 relative z-30 px-4 md:px-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-[1240px] flex flex-col items-center justify-center"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] mb-6"
        >
          <BriefcaseIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] uppercase tracking-wider font-semibold">
            03 — Journey &amp; Experience
          </h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="w-full flex flex-col gap-10 items-center">
          
          {/* Card 1: Frontend Developer (Next.js) */}
          <motion.div
            variants={slideInFromLeft(0.6)}
            className="w-full max-w-[800px] bg-[rgba(3,0,20,0.6)] border border-[#7042f83b] rounded-2xl p-8 shadow-xl shadow-purple-500/10 backdrop-blur-md relative overflow-hidden group hover:border-[#7042f88b] transition-all duration-300"
          >
            {/* Glowing Accent Bar */}
            <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-gradient-to-b from-purple-500 to-cyan-500" />

            {/* Glowing Background Radial */}
            <div className="absolute -right-20 -top-20 w-[200px] h-[200px] rounded-full bg-purple-500/5 blur-[50px] pointer-events-none group-hover:bg-purple-500/10 transition-all duration-300" />

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Frontend Developer (Next.js)
                </h3>
                <p className="text-[#b49bff] text-lg font-medium mt-1">
                  Freelance &amp; Open Source
                </p>
              </div>

              <div className="self-start flex items-center gap-2 bg-[#00d4ff1a] border border-[#00d4ff3d] rounded-full px-4 py-1.5 text-[#00d4ff] text-xs font-semibold uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] animate-pulse shadow-[0_0_8px_#00d4ff]" />
                Web Applications
              </div>
            </div>

            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Designed and engineered interactive web interfaces, optimized client performance, and integrated secure serverless api structures.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Building responsive, semantic user interfaces using Next.js 14/15, React, and TypeScript",
                "Designing premium aesthetic structures with Tailwind CSS and Framer Motion micro-animations",
                "Implementing Next.js server actions and setting up Nodemailer SMTP form transmissions",
                "Optimizing page render speeds, LCP, and CLS scores via Server-Side Rendering (SSR)",
                "Managing remote REST APIs and local client caching trees with React Query",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start text-gray-400 text-sm leading-relaxed">
                  <span className="text-[#b49bff] mr-3 font-bold">→</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {[
                "Next.js 14",
                "React",
                "Tailwind CSS",
                "TypeScript",
                "Framer Motion",
                "Nodemailer API",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.22)] rounded-full px-3 py-1 text-[#00d4ff] text-xs font-medium tracking-wide hover:border-[#00d4ff7b] transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Junior iOS Developer (Zeetech App) */}
          <motion.div
            variants={slideInFromRight(0.6)}
            className="w-full max-w-[800px] bg-[rgba(3,0,20,0.6)] border border-[#7042f83b] rounded-2xl p-8 shadow-xl shadow-purple-500/10 backdrop-blur-md relative overflow-hidden group hover:border-[#7042f88b] transition-all duration-300"
          >
            {/* Glowing Accent Bar */}
            <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-gradient-to-b from-purple-500 to-cyan-500" />

            {/* Glowing Background Radial */}
            <div className="absolute -right-20 -top-20 w-[200px] h-[200px] rounded-full bg-purple-500/5 blur-[50px] pointer-events-none group-hover:bg-purple-500/10 transition-all duration-300" />

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Junior iOS Developer
                </h3>
                <p className="text-[#b49bff] text-lg font-medium mt-1">
                  Zeetech App
                </p>
              </div>

              <div className="self-start flex items-center gap-2 bg-[#7042f81a] border border-[#7042f83d] rounded-full px-4 py-1.5 text-[#b49bff] text-xs font-semibold uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7042f8] animate-pulse shadow-[0_0_8px_#7042f8]" />
                Current Role
              </div>
            </div>

            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Working on a live service-based mobile application, contributing real features to production, integrating REST APIs, and collaborating with the development team daily.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Developing and maintaining iOS features using SwiftUI",
                "Implementing modern UI screens with MVVM architecture",
                "Integrating REST APIs with frontend iOS systems",
                "Debugging and resolving production-level issues",
                "Improving app performance, stability, and user experience",
                "Building service-based workflows: bookings, user requests, handling systems",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start text-gray-400 text-sm leading-relaxed">
                  <span className="text-[#b49bff] mr-3 font-bold">→</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {[
                "SwiftUI",
                "Swift",
                "REST APIs",
                "Xcode",
                "MVVM",
                "Firebase",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-[rgba(112,66,248,0.08)] border border-[rgba(112,66,248,0.22)] rounded-full px-3 py-1 text-[#b49bff] text-xs font-medium tracking-wide hover:border-[#7042f87b] transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};
