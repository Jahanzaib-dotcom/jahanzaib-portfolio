"use client";

import React, { useState } from "react";
import { motion as framerMotion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        alert("Transmission sent successfully! Jahanzaib has been notified.");
      } else {
        setStatus("error");
        alert("Failed to send transmission: " + data.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      alert("Failed to send transmission. Please check your connection.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 relative z-30 px-4 md:px-10"
    >
      <framerMotion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-[1240px] flex flex-col items-center justify-center"
      >
        <framerMotion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] mb-6"
        >
          <PaperAirplaneIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] uppercase tracking-wider font-semibold">
            05 — Send Transmission
          </h1>
        </framerMotion.div>

        <framerMotion.h2
          variants={slideInFromLeft(0.5)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-16"
        >
          Get In Touch
        </framerMotion.h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Info Side */}
          <framerMotion.div
            variants={slideInFromLeft(0.6)}
            className="flex flex-col h-full justify-between"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-[500px]">
              Whether you have a project, opportunity, or just want to connect — I&apos;m always open. Available for full-time roles and freelance projects.
            </p>

            <div className="flex flex-col gap-5">
              {/* Email Link */}
              <a
                href="mailto:jahanzaibshakeel5@gmail.com"
                className="flex items-center gap-5 p-5 bg-[rgba(3,0,20,0.6)] border border-[#7042f822] rounded-xl hover:border-[#7042f87a] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#7042f81a] border border-[#7042f83d] flex items-center justify-center text-[#b49bff] group-hover:bg-[#7042f83a] transition-all duration-300">
                  <EnvelopeIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Email</div>
                  <div className="text-white text-base font-medium mt-1">jahanzaibshakeel5@gmail.com</div>
                </div>
              </a>

              {/* Phone Link (Navigates to WhatsApp) */}
              <a
                href="https://wa.me/923145408919"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-5 p-5 bg-[rgba(3,0,20,0.6)] border border-[#7042f822] rounded-xl hover:border-[#7042f87a] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#7042f81a] border border-[#7042f83d] flex items-center justify-center text-[#b49bff] group-hover:bg-[#7042f83a] transition-all duration-300">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider font-semibold">WhatsApp / Phone</div>
                  <div className="text-white text-base font-medium mt-1">+92 314 5408919</div>
                </div>
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/JahanzaibDev"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-5 p-5 bg-[rgba(3,0,20,0.6)] border border-[#7042f822] rounded-xl hover:border-[#7042f87a] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#7042f81a] border border-[#7042f83d] flex items-center justify-center text-[#b49bff] group-hover:bg-[#7042f83a] transition-all duration-300">
                  <RxGithubLogo className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider font-semibold">GitHub</div>
                  <div className="text-white text-base font-medium mt-1">github.com/JahanzaibDev</div>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/muhammad-jahanzaib-69a33733b"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-5 p-5 bg-[rgba(3,0,20,0.6)] border border-[#7042f822] rounded-xl hover:border-[#7042f87a] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#7042f81a] border border-[#7042f83d] flex items-center justify-center text-[#b49bff] group-hover:bg-[#7042f83a] transition-all duration-300">
                  <RxLinkedinLogo className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider font-semibold">LinkedIn</div>
                  <div className="text-white text-base font-medium mt-1">Muhammad Jahanzaib</div>
                </div>
              </a>
            </div>
          </framerMotion.div>

          {/* Form Side */}
          <framerMotion.form
            variants={slideInFromRight(0.6)}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full p-8 bg-[rgba(3,0,20,0.6)] border border-[#7042f83b] rounded-2xl shadow-xl shadow-purple-500/5 backdrop-blur-md relative overflow-hidden group hover:border-[#7042f88b] transition-all duration-300"
          >
            {/* Top glowing bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500" />

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-[rgba(3,0,20,0.6)] border border-[#7042f83d] rounded-lg p-4 text-white text-sm outline-none focus:border-[#7042f8] focus:shadow-[0_0_12px_rgba(112,66,248,0.2)] transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Email</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-[rgba(3,0,20,0.6)] border border-[#7042f83d] rounded-lg p-4 text-white text-sm outline-none focus:border-[#7042f8] focus:shadow-[0_0_12px_rgba(112,66,248,0.2)] transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-[rgba(3,0,20,0.6)] border border-[#7042f83d] rounded-lg p-4 text-white text-sm outline-none resize-none focus:border-[#7042f8] focus:shadow-[0_0_12px_rgba(112,66,248,0.2)] transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="py-4 text-center text-white cursor-pointer rounded-lg button-primary font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2 hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-200 disabled:opacity-50"
            >
              {status === "sending" ? "Sending Transmission..." : "Send Transmission"}
              <PaperAirplaneIcon className="h-5 w-5 rotate-45 transform translate-x-1 -translate-y-0.5" />
            </button>
          </framerMotion.form>
        </div>
      </framerMotion.div>
    </section>
  );
};
