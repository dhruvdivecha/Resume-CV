/* ──────────────────────────────────────────────
   All portfolio data in one place.
   Edit this file to update your resume content.
   ────────────────────────────────────────────── */

import {
  User,
  Code2,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Award,
  Terminal,
} from "lucide-react";

// ─── Profile ───────────────────────────────────

export const PROFILE = {
  name: "Dhruv Hitesh Divecha",
  title: "Computer Science Student & Full-Stack Developer",
  location: "Dar es Salaam, Tanzania",
  email: "dhruv.divecha23@gmail.com",
  phone: "+255785511991",
  linkedin: "https://www.linkedin.com/in/dhruv-divecha-054618320",
  github: "https://github.com/dhruvdivecha",
};

// ─── Education ─────────────────────────────────

export const EDUCATION = [
  {
    school: "University Of Dar-es-Salaam",
    degree: "Bachelor Of Science in Computer Science",
    location: "Kijitonyama, Dar-es-Salaam",
    period: "October 2024 \u2013 Current",
  },
  {
    school: "Al Muntazir Islamic International School",
    degree: "Cambridge International AS and A-Levels (GCE)",
    extra: "The International General Certificate of Secondary Education (IGCSE)",
    location: "Upanga, Dar-es-Salaam",
    period: "August 2018 \u2013 May 2024",
  },
];

// ─── Experience ────────────────────────────────

export const EXPERIENCE = [
  {
    company: "Neurotech Africa",
    role: "Chatbot Developer Intern",
    location: "Sky-City Mall, Dar es Salaam",
    period: "July 2025 \u2013 September 2025",
    bullets: [
      "Developed and deployed chatbot solutions using Retrieval-Augmented Generation (RAG).",
      "Integrated WhatsApp Business API to automate customer interactions.",
      "Improved chatbot performance using Pydantic & indexing.",
    ],
  },
  {
    company: "Academic Mentor & Home Tutor",
    role: "IGCSE & A-Level Tutor",
    location: "Upanga, Dar es Salaam",
    period: "January 2025 \u2013 Current",
    bullets: [
      "Tutored students in Chemistry, Mathematics & Physics.",
      "Improved student grades through targeted revision.",
    ],
  },
];

// ─── Skills ────────────────────────────────────

export const SKILLS = {
  Programming: ["JavaScript", "TypeScript", "HTML", "Tailwind CSS", "Express", "Python"],
  Frameworks: ["React", "Node.js", "FastAPI", "React Native", "Refine"],
  Databases: ["MongoDB", "PostgreSQL"],
  Tools: ["Git", "GitHub", "npm", "Postman", "Pydantic", "OpenAI", "WhatsApp Business", "Drizzle ORM"],
  Other: ["RESTful APIs", "Responsive Design", "Deployment (Render, Vercel, Railway, GitHub Pages)"],
};

// ─── Projects ──────────────────────────────────

export const PROJECTS = [
  {
    name: "Zeusda\u2019s School \u2014 Classroom Manager",
    description:
      "A modern classroom management web app with role-based dashboards for admins, teachers, and students. Features session auth, join requests, Cloudinary uploads, command palette, and full CRUD.",
    tech: [
      "React 19", "TypeScript", "Refine v5", "shadcn/ui", "Tailwind CSS v4",
      "Recharts", "Better Auth", "Drizzle ORM", "PostgreSQL", "Express 5", "Arcjet",
    ],
    bullets: [
      "Role-based access: Admin, Teacher, Student with adaptive sidebar & dashboards.",
      "Student join-request workflow with teacher/admin approval.",
      "Full backend with Express 5, Drizzle ORM, Neon PostgreSQL, Arcjet security.",
      "Cloudinary image uploads, dark/light mode, command palette (Cmd+K).",
      "Session-based authentication with Better Auth, CSRF protection & rate limiting.",
    ],
    github: "https://github.com/dhruvdivecha/Classroom-Frontend",
    githubBackend: "https://github.com/dhruvdivecha/classroom-backend",
    live: "https://classroom-frontend-teal.vercel.app/",
  },
  {
    name: "Modern Restaurant Management System",
    description:
      "A comprehensive, real-time restaurant management solution built with React and TypeScript.",
    tech: ["React 18", "TypeScript", "WebSocket", "Node.js"],
    bullets: [
      "Real-time order tracking and kitchen management using WebSocket technology.",
      "Responsive dashboard for restaurant owners with menu management and sales analytics.",
      "Interactive menu interface for customers with real-time updates.",
    ],
    github: "https://github.com/dhruvdivecha/RestaurantApp",
    live: "https://restaurantapp-frontend-zptb.onrender.com/",
  },
  {
    name: "MERN Stack E-Commerce Store",
    description: "A full-stack e-commerce application built with the MERN stack.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript"],
    bullets: [
      "Complete e-commerce platform with product management and user authentication.",
      "Responsive design and modern UI components.",
    ],
    github: "https://github.com/dhruvdivecha/MERN-Stack-store",
    live: "https://mern-stack-store-8es0.onrender.com/",
  },
  {
    name: "Web Crawler",
    description: "A JavaScript utility to analyze website structure and count pages.",
    tech: ["JavaScript", "Node.js"],
    bullets: [
      "Crawls and analyzes website structure efficiently.",
      "Page counting and domain analysis with test coverage.",
    ],
    github: "https://github.com/dhruvdivecha/webCrawler",
  },
];

// ─── Certifications ────────────────────────────

export const CERTIFICATIONS = [
  {
    name: "CISCO Cyber Threat Management",
    period: "January 2025 \u2013 February 2025",
    file: "/certifications/CyberThreatManagementUpdate20250209-27-zmq6nu.pdf",
    slug: "cyber-threat",
  },
  {
    name: "CISCO Introduction to Cybersecurity",
    period: "November 2024",
    file: "/certifications/Introduction_to_Cybersecurity_Badge20241210-27-g0x6sn.pdf",
    slug: "intro-cybersecurity",
  },
  {
    name: "CS50\u2019s Introduction to Programming with Python",
    period: "August 2024 \u2013 November 2024",
    file: "/certifications/CS50P.pdf",
    slug: "cs50p",
  },
  {
    name: "HAAPPS Hands-On Python Workshop",
    period: "July 2024",
    file: "/certifications/Python_certificate_haapps.pdf",
    slug: "haapps-python",
  },
  {
    name: "Professional Course in Core Java Programming",
    period: "June 2023 \u2013 July 2023",
    file: "/certifications/JAVA-CERTIFICATE.pdf",
    slug: "core-java",
  },
  {
    name: "ALMIIS Cambridge A-level Mathematics Topper Certificate",
    period: "May 2024",
    file: "/certifications/Mathematics-topper.pdf",
    slug: "math-topper",
  },
];

// ─── Leadership ────────────────────────────────

export const LEADERSHIP = [
  "Served as a School Prefect",
  "Senior Organiser for Leos Host Club",
  "Maboresho wa Kijani (Tree planting event) Organising Committee",
  "Student Ambassador for Al Muntazir Islamic International School (August 2023 \u2013 May 2024)",
];

// ─── Boot Sequence ─────────────────────────────

export const BOOT_LINES = [
  { text: "DhruvOS BIOS v3.1.4 \u2014 Initializing...", delay: 0 },
  { text: "Copyright (C) 2026 Divecha Systems Inc.", delay: 150 },
  { text: "", delay: 100 },
  { text: "Detecting CPU........... Intel Core i9-14900K @ 6.0GHz [OK]", delay: 300, icon: "cpu" },
  { text: "Memory Test............. 32768 MB DDR5 [PASS]", delay: 400, icon: "memory" },
  { text: "Detecting Storage....... 2TB NVMe SSD [OK]", delay: 350, icon: "hdd" },
  { text: "Detecting Network....... Ethernet 10Gbps [CONNECTED]", delay: 300, icon: "wifi" },
  { text: "Detecting GPU........... NVIDIA RTX 4090 [OK]", delay: 300, icon: "monitor" },
  { text: "", delay: 80 },
  { text: "Loading kernel modules...", delay: 200 },
  { text: "  \u251C\u2500 react.module ............... loaded", delay: 150 },
  { text: "  \u251C\u2500 typescript.module .......... loaded", delay: 150 },
  { text: "  \u251C\u2500 node.runtime ............... loaded", delay: 150 },
  { text: "  \u251C\u2500 tailwind.css.engine ........ loaded", delay: 150 },
  { text: "  \u251C\u2500 framer-motion.driver ....... loaded", delay: 150 },
  { text: "  \u251C\u2500 postgresql.driver .......... loaded", delay: 150 },
  { text: "  \u2514\u2500 express.server ............. loaded", delay: 150 },
  { text: "", delay: 80 },
  { text: "Mounting filesystems............. [OK]", delay: 200 },
  { text: "Starting portfolio services...... [OK]", delay: 200 },
  { text: "Initializing desktop environment. [OK]", delay: 300 },
  { text: "", delay: 100 },
  { text: "All systems operational. Welcome, Dhruv.", delay: 400, icon: "check" },
];

// ─── Section Definitions ───────────────────────

export const SECTIONS = [
  { id: "about",      label: "About",      icon: User,           path: "C:\\Users\\Dhruv\\About.exe" },
  { id: "skills",     label: "Skills",     icon: Code2,          path: "C:\\Users\\Dhruv\\Skills.exe" },
  { id: "experience", label: "Experience", icon: Briefcase,      path: "C:\\Users\\Dhruv\\Experience.exe" },
  { id: "projects",   label: "Projects",   icon: FolderGit2,     path: "C:\\Users\\Dhruv\\Projects.exe" },
  { id: "education",  label: "Education",  icon: GraduationCap,  path: "C:\\Users\\Dhruv\\Education.exe" },
  { id: "certs",      label: "Certs",      icon: Award,          path: "C:\\Users\\Dhruv\\Certifications.exe" },
  { id: "terminal",   label: "Terminal",   icon: Terminal,       path: "C:\\Users\\Dhruv\\Terminal.exe" },
];
