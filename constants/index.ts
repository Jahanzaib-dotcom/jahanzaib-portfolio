import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Swift",
    image: "swift.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SwiftUI",
    image: "swiftui.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C#",
    image: "csharp.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "ASP.NET Core",
    image: "dotnet.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/JahanzaibDev",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/muhammad-jahanzaib-69a33733b",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "SwiftUI",
    image: "swiftui.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "UIKit",
    image: "uikit.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Swift",
    image: "swift.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flutter",
    image: "flutter.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Dart",
    image: "dart.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "C#",
    image: "csharp.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "ASP.NET Core",
    image: "dotnet.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "SQL Server",
    image: "sqlserver.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Xcode",
    image: "xcode.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [] as const;

export interface ProjectType {
  title: string;
  description: string;
  link: string;
  emoji: string;
  image: string;
  ribbon: string;
  features: readonly string[];
  tags: readonly string[];
}

export const PROJECTS: readonly ProjectType[] = [
  {
    title: "Daily Visiting App (iOS)",
    description: "Service provider platform with real-time maps, resident timelines, and a full C# ASP.NET Core + MySQL backend.",
    link: "https://github.com/JahanzaibDev",
    emoji: "🗺️",
    image: "projects/daily-visiting-app.png",
    ribbon: "SwiftUI",
    features: [
      "SwiftUI MVVM frontend",
      "ASP.NET Core + Dapper + MySQL",
      "Map coordinate integration",
      "Multi-table SQL timeline joins"
    ],
    tags: ["SwiftUI", "ASP.NET Core", "MySQL", "Dapper"]
  },
  {
    title: "Service Booking Platform",
    description: "Full-stack web app for booking home services — repair, cleaning, maintenance — with admin and technician dashboards.",
    link: "https://github.com/JahanzaibDev",
    emoji: "🔧",
    image: "projects/service-booking.png",
    ribbon: "ASP.NET",
    features: [
      "JWT user authentication",
      "Service booking & tracking",
      "Admin & technician portals",
      "RESTful API backend"
    ],
    tags: ["ASP.NET Core", "C#", "SQL Server", "JS"]
  },
  {
    title: "Hospital Management System",
    description: "Complete desktop system for managing patients, doctors, appointments and hospital operations end-to-end.",
    link: "https://github.com/JahanzaibDev",
    emoji: "🏥",
    image: "projects/hospital-management.png",
    ribbon: "Java",
    features: [
      "Patient registration & management",
      "Doctor & staff management",
      "Appointment scheduling system",
      "Full CRUD via JDBC + SQL Server"
    ],
    tags: ["Java", "Swing", "JDBC", "SQL Server"]
  },
  {
    title: "Library Management System",
    description: "Windows Forms app for managing library operations including book issue, returns and fine calculation.",
    link: "https://github.com/JahanzaibDev",
    emoji: "📚",
    image: "projects/library-system.png",
    ribbon: "C#",
    features: [
      "Book issue and return system",
      "Student record management",
      "Automatic fine calculation",
      "Secure admin dashboard"
    ],
    tags: ["C#", "Windows Forms", "SQL Server"]
  },
  {
    title: "CPU Scheduling Visualizer",
    description: "Interactive OS simulation tool that visually demonstrates CPU scheduling algorithms in real time.",
    link: "https://github.com/JahanzaibDev",
    emoji: "⚡",
    image: "projects/cpu-scheduling.png",
    ribbon: "Java",
    features: [
      "FCFS, SJF, Priority, Round Robin",
      "Visual execution timeline",
      "Waiting & turnaround time calc",
      "User input process handling"
    ],
    tags: ["Java", "Swing", "AWT"]
  },
  {
    title: "Smart Study Assistant",
    description: "Productivity-focused cross-platform mobile app for students to manage study schedules, tasks and reminders.",
    link: "https://github.com/JahanzaibDev",
    emoji: "📱",
    image: "projects/study-assistant.png",
    ribbon: "Flutter",
    features: [
      "Task scheduling and reminders",
      "Study planning system",
      "Clean minimal UI/UX",
      "Android & iOS support"
    ],
    tags: ["Flutter", "Dart", "Firebase"]
  }
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/JahanzaibDev",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/muhammad-jahanzaib-69a33733b",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:jahanzaibshakeel5@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/JahanzaibDev",
};
