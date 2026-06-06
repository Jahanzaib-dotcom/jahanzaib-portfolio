"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDelay = 0.05;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex items-center gap-2 bg-[rgba(3,0,20,0.75)] border border-[rgba(112,66,248,0.2)] rounded-full px-[18px] py-[10px] backdrop-blur-md hover:border-[#7042f8] hover:shadow-[0_0_15px_rgba(112,66,248,0.4)] transition-all duration-300 cursor-default"
    >
      <Image 
        src={`/skills/${src}`} 
        width={24} 
        height={24} 
        alt={name} 
        className="object-contain w-6 h-6"
      />
      <span className="text-white text-xs font-semibold tracking-wide">{name}</span>
    </motion.div>
  );
};
