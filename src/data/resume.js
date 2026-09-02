/* ──────────────────────────────────────────────────────────────
   Every piece of resume content lives here.
   Edit this file to update the resume — components never hold copy.
   ────────────────────────────────────────────────────────────── */

export const PROFILE = {
  name: "Dhruv Hitesh Divecha",
  title: "Computer Science Student · Full-Stack & Infrastructure",
  location: "Dar es Salaam, Tanzania",
  email: "dhruv.divecha23@gmail.com",
  phone: "+255 785 511 991",
  linkedin: {
    label: "linkedin.com/in/dhruv-divecha-054618320",
    href: "https://www.linkedin.com/in/dhruv-divecha-054618320",
  },
  github: {
    label: "github.com/dhruvdivecha",
    href: "https://github.com/dhruvdivecha",
  },
};

export const EDUCATION = [
  {
    school: "University of Dar es Salaam",
    degree: "Bachelor of Science in Computer Science",
    location: "Kijitonyama, Dar es Salaam",
    periods: ["October 2024 – August 2027 (expected)"],
  },
  {
    school: "Al Muntazir Islamic International School",
    degree: "Cambridge International AS and A-Levels (GCE)",
    degreeSecondary:
      "International General Certificate of Secondary Education (IGCSE)",
    location: "Upanga, Dar es Salaam",
    periods: ["August 2022 – May 2024", "August 2018 – May 2022"],
  },
];

export const EXPERIENCE = [
  {
    company: "e-Government Authority (eGA)",
    role: "Software Engineering Intern",
    location: "Posta, Dar es Salaam",
    period: "August 2026 – Present",
    bullets: [
      "Working on Linux kernel customisation; project specifics under NDA.",
      "Configuring and building modified kernel images, with validation testing in progress.",
    ],
  },
  {
    company: "Neurotech Africa",
    role: "Chatbot Developer Intern",
    location: "Sky-City Mall, Dar es Salaam",
    period: "July 2025 – September 2025",
    bullets: [
      "Developed and deployed RAG chatbots for client customer-support workloads.",
      "Integrated the WhatsApp Business API to deliver the bot on the channel customers already used.",
      "Improved answer accuracy and response latency through Pydantic schema validation and vector index tuning.",
    ],
  },
  {
    company: "Academic Mentor & Home Tutor",
    role: "IGCSE & A-Level Tutor",
    location: "Upanga, Dar es Salaam",
    period: "January 2025 – Present",
    bullets: [
      "Tutored 30+ students in Chemistry, Mathematics and Physics.",
      "Improved student grades through targeted revision and past-paper drilling.",
    ],
  },
];

export const SKILLS = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Bash", "SQL", "HTML/CSS"],
  },
  {
    label: "Frameworks",
    items: [
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "React Native",
      "Refine",
      "Tailwind CSS",
      "RESTful API design",
    ],
  },
  {
    label: "AI / ML",
    items: [
      "Retrieval-Augmented Generation (RAG)",
      "OpenAI API (GPT-4o)",
      "DeepSeek V4 Flash",
      "Qwen (self-hosted)",
      "Pinecone vector database",
      "Embeddings & semantic search",
      "Tool calling / agents",
      "Prompt engineering",
      "Pydantic",
    ],
  },
  {
    label: "Infrastructure",
    items: [
      "Linux (Ubuntu)",
      "Docker & Docker Compose",
      "systemd",
      "cron",
      "Nginx",
      "Cloudflare Tunnel",
      "Portainer",
      "Backup & disaster recovery",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Drizzle ORM"],
  },
  {
    label: "Networking",
    items: ["Reverse proxies & TLS termination", "DNS"],
  },
  {
    label: "Tools",
    items: [
      "Git & GitHub",
      "SSH / deploy keys",
      "Postman",
      "Google Sheets API",
      "WebSockets",
      "Chrome DevTools Protocol",
    ],
  },
];

/* ── Projects ──────────────────────────────────────────────────
   `group` drives the sub-headings in the Projects section.
   ────────────────────────────────────────────────────────────── */

export const PROJECT_GROUPS = [
  {
    id: "infrastructure",
    title: "Infrastructure & Self-Hosting",
    projects: [
      {
        name: "Public Web App Deployment via Cloudflare Tunnel",
        summary:
          "Invoice Ninja published to the public internet with zero inbound ports opened on the home network.",
        bullets: [
          "Deployed the stack on Docker Compose (MySQL 8, Redis, Nginx, PHP) and exposed it through a Cloudflare Tunnel, with TLS terminated at the edge.",
          "Managed secrets and app config through environment files, including correct URL handling behind a reverse proxy.",
          "Built an automated backup pipeline — nightly and on-boot MySQL dumps plus volume snapshots, auto-rotated — engineered around an unreliable power grid.",
        ],
        tech: [
          "Docker Compose",
          "MySQL 8",
          "Redis",
          "Nginx",
          "Cloudflare Tunnel",
          "cron",
          "systemd",
        ],
      },
      {
        name: "Self-Hosted Home Infrastructure & Media Stack",
        summary:
          "An Ubuntu server running a 10+ service Dockerized media and automation stack, engineered to survive an unreliable power grid.",
        bullets: [
          "Orchestrated 10+ containerized services (qBittorrent, Sonarr, Radarr, Prowlarr, Bazarr, Jellyfin, Jellyseerr, Portainer) with Docker Compose.",
          "Configured persistent volumes, restart policies and health-gated startup ordering so the stack self-heals on boot.",
          "Running continuously since August 2025; survives power cuts with unattended recovery in ~2 minutes, no manual intervention.",
        ],
        tech: [
          "Ubuntu Server",
          "Docker Compose",
          "systemd",
          "Portainer",
          "Jellyfin",
        ],
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    projects: [
      {
        name: "Hermes — Personal AI Ops Agent",
        note: "Deployment, integration and operations of the Nous Research agent",
        summary:
          "An autonomous agent that administers the home server in natural language — and the agent that now manages every other infrastructure project on this resume.",
        bullets: [
          "Operated over Discord and a CLI, driving 8 scheduled automations including minute-interval power-loss alerts, a CPU temperature watchdog and daily API spend checks.",
          "Performs real system work through tool calling: terminal commands, file edits, web research, and browser automation over the Chrome DevTools Protocol.",
          "Routes inference to DeepSeek V4 Flash, with a local Qwen model (llama.cpp) absorbing routine status checks at zero API cost.",
        ],
        tech: [
          "DeepSeek V4 Flash",
          "Qwen / llama.cpp",
          "Tool calling",
          "Discord",
          "cron",
          "Chrome DevTools Protocol",
          "Linux",
        ],
      },
      {
        name: "RAG Chatbot on WhatsApp",
        note: "Built at Neurotech Africa · repository private",
        summary:
          "A retrieval-augmented chatbot answering customer questions from a client's own knowledge base, delivered over WhatsApp.",
        bullets: [
          "Built the retrieval pipeline end to end: document chunking, embedding generation, and semantic search against a Pinecone vector index.",
          "Grounded GPT-4o responses in retrieved context so answers stayed on-source instead of hallucinating.",
          "Exposed the bot through a FastAPI service handling WhatsApp Business API webhooks and multi-turn conversation state.",
          "Enforced structured model output with Pydantic schemas and tuned indexing to bring retrieval latency down.",
        ],
        tech: [
          "Python",
          "FastAPI",
          "GPT-4o",
          "Pinecone",
          "RAG",
          "Embeddings",
          "WhatsApp Business API",
          "Pydantic",
        ],
      },
      {
        name: "Personal Finance Agent",
        summary:
          "An LLM agent that turns free-form spending notes into a structured ledger, using a Google Sheet as its datastore.",
        bullets: [
          "Wired DeepSeek V4 Flash to the Google Sheets API through tool calling, so the agent writes ledger rows directly instead of returning text to copy out.",
          "Parses unstructured transaction descriptions into categorised, validated entries.",
          "Keeps the entire financial record in a spreadsheet already owned by the user, with no third-party finance service holding the data.",
        ],
        tech: [
          "Python",
          "DeepSeek V4 Flash",
          "Tool calling",
          "Google Sheets API",
        ],
      },
    ],
  },
  {
    id: "web",
    title: "Web Applications",
    projects: [
      {
        name: "Zeusda’s School — Classroom Manager",
        summary:
          "A classroom management platform with role-based dashboards and access control for admins, teachers and students.",
        bullets: [
          "Role-based access for Admin, Teacher and Student with an adaptive sidebar and per-role dashboards.",
          "Student join-request workflow gated by teacher and admin approval.",
          "Express 5 backend on Neon PostgreSQL via Drizzle ORM, with Arcjet security.",
          "Cloudinary image uploads, dark/light mode and a Cmd+K command palette.",
          "Session-based authentication with Better Auth, plus CSRF protection and rate limiting.",
        ],
        tech: [
          "React 19",
          "TypeScript",
          "Refine v5",
          "shadcn/ui",
          "Tailwind CSS v4",
          "Better Auth",
          "Drizzle ORM",
          "PostgreSQL",
          "Express 5",
        ],
        links: [
          {
            label: "Frontend",
            href: "https://github.com/dhruvdivecha/Classroom-Frontend",
          },
          {
            label: "Backend",
            href: "https://github.com/dhruvdivecha/classroom-backend",
          },
          {
            label: "Live Demo",
            href: "https://classroom-frontend-teal.vercel.app/",
          },
        ],
      },
      {
        name: "Modern Restaurant Management System",
        summary:
          "A real-time restaurant operations platform covering ordering, the kitchen floor and owner analytics.",
        bullets: [
          "Real-time order tracking and kitchen management over WebSockets.",
          "Owner dashboard with menu management and sales analytics.",
          "Customer-facing interactive menu that updates live as the kitchen responds.",
        ],
        tech: ["React 18", "TypeScript", "WebSockets", "Node.js"],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/dhruvdivecha/RestaurantApp",
          },
          {
            label: "Live Demo",
            href: "https://restaurantapp-frontend-zptb.onrender.com/",
          },
        ],
      },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    name: "CISCO Cyber Threat Management",
    period: "January 2025 – February 2025",
    file: "certifications/CyberThreatManagementUpdate20250209-27-zmq6nu.pdf",
  },
  {
    name: "CISCO Introduction to Cybersecurity",
    period: "November 2024",
    file: "certifications/Introduction_to_Cybersecurity_Badge20241210-27-g0x6sn.pdf",
  },
  {
    name: "CS50’s Introduction to Programming with Python",
    period: "August 2024 – November 2024",
    file: "certifications/CS50P.pdf",
  },
  {
    name: "HAAPPS Hands-On Python Workshop",
    period: "July 2024",
    file: "certifications/Python_certificate_haapps.pdf",
  },
  {
    name: "Professional Course in Core Java Programming",
    period: "June 2023 – July 2023",
    file: "certifications/JAVA-CERTIFICATE.pdf",
  },
  {
    name: "ALMIIS Cambridge A-Level Mathematics Topper Certificate",
    period: "May 2024",
    file: "certifications/Mathematics-topper.pdf",
  },
];
