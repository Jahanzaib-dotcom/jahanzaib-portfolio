import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  emoji: string;
  image: string;
  ribbon: string;
  features: readonly string[];
  tags: readonly string[];
}

export const ProjectCard = ({
  title,
  description,
  link,
  emoji,
  image,
  ribbon,
  features,
  tags,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(4,7,18,0.92)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col group h-full justify-between hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(112,66,248,0.18)]"
    >
      {/* Visual Banner */}
      <div className="h-[185px] w-full relative overflow-hidden flex items-center justify-center flex-shrink-0">
        {/* Project Image */}
        <Image
          src={`/${image}`}
          alt={title}
          fill
          className="object-cover absolute inset-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />

        {/* Clean dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent z-5" />

        {/* Floating Emoji */}
        <span className="text-6xl z-30 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] select-none transform transition-transform duration-500 group-hover:scale-110 absolute">
          {emoji}
        </span>

        {/* Skill Tag Ribbon */}
        <span className="absolute top-3 right-3 z-40 px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-[10px] font-bold tracking-wider uppercase text-purple-300 backdrop-blur-sm">
          {ribbon}
        </span>
      </div>

      {/* Card Content body */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">{description}</p>
          
          {/* Features bullet list */}
          <ul className="mt-4 space-y-1.5 border-t border-purple-500/10 pt-4 mb-5">
            {features.map((feature, idx) => (
              <li key={idx} className="text-xs text-gray-400 flex items-start leading-relaxed">
                <span className="text-[#b49bff] mr-2 font-bold">▸</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold bg-[rgba(112,66,248,0.08)] border border-[rgba(112,66,248,0.18)] rounded px-2 py-0.5 text-gray-400 group-hover:border-purple-500/35 group-hover:text-purple-300 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
