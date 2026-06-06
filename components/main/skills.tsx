"use client";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
} from "@/constants";

export const Skills = () => {
  // Triple the lists to ensure seamless looping on larger displays
  const row1Items = [...FRONTEND_SKILL, ...FRONTEND_SKILL, ...FRONTEND_SKILL];
  const row2Items = [
    ...BACKEND_SKILL,
    ...FULLSTACK_SKILL,
    ...BACKEND_SKILL,
    ...FULLSTACK_SKILL,
    ...BACKEND_SKILL,
    ...FULLSTACK_SKILL,
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 z-30"
    >
      <SkillText />

      {/* Row 1: Frontend & Mobile Scrolling Marquee */}
      <div className="mq-wrap w-full my-4">
        <div className="mq-track">
          {row1Items.map((skill, i) => (
            <SkillDataProvider
              key={`${skill.skill_name}-${i}`}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Row 2: Backend, Databases & Dev Tools Scrolling Marquee */}
      <div className="mq-wrap w-full my-4">
        <div className="mq-track rev">
          {row2Items.map((skill, i) => (
            <SkillDataProvider
              key={`${skill.skill_name}-${i}`}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Skills background video */}
      <div className="w-full h-full absolute inset-0 -z-10 opacity-30">
        <div className="w-full h-full flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto min-h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
