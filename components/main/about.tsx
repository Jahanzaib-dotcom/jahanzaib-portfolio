"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-20 relative z-30 px-6 md:px-10 max-w-[1240px] m-auto w-full"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        
        {/* Left: Decorative Space Orb Core (Floating & Spinning) */}
        <motion.div 
          variants={slideInFromLeft(0.5)}
          className="flex items-center justify-center relative w-full h-[350px] md:h-[450px]"
        >
          {/* Floating central core */}
          <div className="w-[240px] md:w-[300px] aspect-square rounded-full bg-gradient-to-tr from-[#5011cc] via-[#7042f8] to-[#00d4ff] flex items-center justify-center text-5xl font-black text-white shadow-[0_0_60px_rgba(112,66,248,0.4),0_0_120px_rgba(112,66,248,0.2)] animate-bounce" style={{ animationDuration: '4s' }}>
            JZ
          </div>
          
          {/* Outer orbital ring 1 */}
          <div className="absolute border border-purple-500/20 rounded-full w-[290px] md:w-[360px] aspect-square animate-[spin_20s_linear_infinite]">
            {/* Planet */}
            <div className="absolute w-3.5 h-3.5 rounded-full bg-[#b49bff] shadow-[0_0_10px_#b49bff] -top-1.5 left-1/2 transform -translate-x-1/2"></div>
          </div>

          {/* Outer orbital ring 2 */}
          <div className="absolute border border-purple-300/10 rounded-full w-[340px] md:w-[420px] aspect-square animate-[spin_35s_linear_infinite_reverse]"></div>
        </motion.div>

        {/* Right: Biography & Quick Stats */}
        <motion.div 
          variants={slideInFromRight(0.5)}
          className="flex flex-col gap-6"
        >
          <div className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]">
            <UserIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px] uppercase tracking-wider font-semibold">
              01 — Profile
            </h1>
          </div>

          <h2 className="text-4xl font-extrabold text-white">
            About <span className="italic text-purple-400">Me</span>
          </h2>
          
          <p className="text-gray-300 leading-relaxed text-base">
            I&apos;m a <strong className="text-white">passionate Full-Stack &amp; iOS Developer</strong> in my final semester of BSCS at Punjab University Jhelum. I specialize in building complete software products — shipping highly refined SwiftUI client interfaces coupled with C# ASP.NET Core database backends.
          </p>
          
          <p className="text-gray-300 leading-relaxed text-base">
            I currently work as a <strong className="text-white">Junior iOS Developer at Zeetech App</strong>, contributing daily to the deployment of commercial-grade updates and performance fixes to active production users.
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="p-5 bg-[rgba(3,0,20,0.6)] border border-[#7042f822] rounded-xl text-center hover:border-[#7042f899] hover:shadow-[0_0_15px_rgba(112,66,248,0.2)] transition-all duration-300">
              <div className="text-3xl font-bold text-[#b49bff]">6+</div>
              <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-2">Projects Built</div>
            </div>
            
            <div className="p-5 bg-[rgba(3,0,20,0.6)] border border-[#7042f822] rounded-xl text-center hover:border-[#7042f899] hover:shadow-[0_0_15px_rgba(112,66,248,0.2)] transition-all duration-300">
              <div className="text-3xl font-bold text-[#b49bff]">4+</div>
              <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-2">Languages</div>
            </div>
            
            <div className="p-5 bg-[rgba(3,0,20,0.6)] border border-[#7042f822] rounded-xl text-center hover:border-[#7042f899] hover:shadow-[0_0_15px_rgba(112,66,248,0.2)] transition-all duration-300">
              <div className="text-3xl font-bold text-[#b49bff]">1</div>
              <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-2">Production App</div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};
