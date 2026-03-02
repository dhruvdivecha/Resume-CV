import { useState, useRef, useEffect } from "react";
import {
  PROFILE,
  SKILLS,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
  LEADERSHIP,
} from "../../data/portfolio";

/* ── Helper: coloured output line ── */
const c = (text, color = "text-white/70") => ({ text, color });
const g = (t) => c(t, "text-green-400");
const a = (t) => c(t, "text-amber-400");
const p = (t) => c(t, "text-purple-400");
const r = (t) => c(t, "text-red-400");
const d = (t) => c(t, "text-white/40");
const w = (t) => c(t, "text-white");
const cyan = (t) => c(t, "text-cyan-400");

/* ── Neofetch-style ASCII ── */
const NEOFETCH_ART = [
  "        ╔══════════╗",
  "        ║  DhruvOS ║",
  "        ║  v3.1.4  ║",
  "        ╚══════════╝",
  "     ┌──────────────┐",
  "     │  ██████████  │",
  "     │  ██  DD  ██  │",
  "     │  ██████████  │",
  "     └──────────────┘",
];

/* ── Command handlers ── */
const COMMANDS = {
  help: () => [
    g("Available commands:"),
    c(""),
    a("  help              ") , d("  Show this help message"),
    a("  whoami            "), d("  Who is Dhruv?"),
    a("  neofetch          "), d("  System info"),
    a("  contact           "), d("  Contact information"),
    a("  skills            "), d("  Technical skills"),
    a("  ls projects       "), d("  List all projects"),
    a("  cat project <n>   "), d("  View project details (1-" + PROJECTS.length + ")"),
    a("  experience        "), d("  Work experience"),
    a("  education         "), d("  Education history"),
    a("  certs             "), d("  List certifications"),
    a("  open <slug>       "), d("  View a certificate PDF"),
    a("  leadership        "), d("  Leadership & activities"),
    a("  clear             "), d("  Clear terminal"),
    a("  echo <text>       "), d("  Echo text back"),
    a("  date              "), d("  Current date & time"),
    a("  uname             "), d("  System info (short)"),
    c(""),
    d("  Tip: Use Tab key... just kidding, type it out :)"),
  ],

  whoami: () => [
    g("┌─────────────────────────────────────────┐"),
    g("│  " + PROFILE.name.padEnd(39) + "│"),
    g("│  " + PROFILE.title.padEnd(39) + "│"),
    g("│  " + PROFILE.location.padEnd(39) + "│"),
    g("└─────────────────────────────────────────┘"),
    c(""),
    c("CS student @ University of Dar-es-Salaam."),
    c("Full-stack developer who builds things that work."),
    c("From chatbots to classroom managers to restaurant apps."),
  ],

  contact: () => [
    p("╔═ Contact Info ═══════════════════════════╗"),
    c(""),
    w("  Email    : " + PROFILE.email),
    w("  Phone    : " + PROFILE.phone),
    w("  GitHub   : " + PROFILE.github),
    w("  LinkedIn : " + PROFILE.linkedin),
    c(""),
    p("╚══════════════════════════════════════════╝"),
  ],

  skills: () => {
    const lines = [g("── Technical Skills ──"), c("")];
    Object.entries(SKILLS).forEach(([cat, items]) => {
      lines.push(a("  " + cat + ":"));
      lines.push(c("    " + items.join("  •  ")));
      lines.push(c(""));
    });
    return lines;
  },

  "ls projects": () => {
    const lines = [g("── Projects ──"), c("")];
    PROJECTS.forEach((p, i) => {
      lines.push(a("  [" + (i + 1) + "]  " + p.name));
      lines.push(d("       " + p.tech.slice(0, 4).join(", ")));
    });
    lines.push(c(""));
    lines.push(d("  Use 'cat project <n>' for details."));
    return lines;
  },

  experience: () => {
    const lines = [g("── Work Experience ──"), c("")];
    EXPERIENCE.forEach((exp) => {
      lines.push(a("  " + exp.company + "  —  " + exp.role));
      lines.push(d("  " + exp.location + "  |  " + exp.period));
      exp.bullets.forEach((b) => lines.push(c("    • " + b)));
      lines.push(c(""));
    });
    return lines;
  },

  education: () => {
    const lines = [g("── Education ──"), c("")];
    EDUCATION.forEach((edu) => {
      lines.push(a("  " + edu.school));
      lines.push(w("  " + edu.degree));
      if (edu.extra) lines.push(w("  " + edu.extra));
      lines.push(d("  " + edu.location + "  |  " + edu.period));
      lines.push(c(""));
    });
    return lines;
  },

  certs: () => {
    const lines = [g("── Certifications ──"), c("")];
    CERTIFICATIONS.forEach((cert) => {
      lines.push(a("  " + cert.name));
      lines.push(d("    " + cert.period + "    slug: " + cert.slug));
    });
    lines.push(c(""));
    lines.push(d("  Use 'open <slug>' to view a certificate."));
    return lines;
  },

  leadership: () => {
    const lines = [g("── Leadership & Activities ──"), c("")];
    LEADERSHIP.forEach((item) => lines.push(c("  • " + item)));
    return lines;
  },

  neofetch: () => {
    const info = [
      ["OS", "DhruvOS v3.1.4 (Portfolio Edition)"],
      ["Host", PROFILE.name],
      ["Kernel", "React 19 + Vite 7"],
      ["Shell", "portfolio-sh 1.0"],
      ["Resolution", window.innerWidth + "x" + window.innerHeight],
      ["Theme", "Deep Navy / Amber Terminal"],
      ["Icons", "lucide-react"],
      ["Terminal", "DhruvOS Terminal Emulator"],
      ["CPU", "Fueled by coffee & curiosity"],
      ["Memory", "∞ ideas / limited RAM"],
      ["Uptime", "Since October 2024"],
    ];

    const lines = [];
    const maxArt = NEOFETCH_ART.length;
    const maxInfo = info.length;
    const max = Math.max(maxArt, maxInfo);

    for (let i = 0; i < max; i++) {
      const art = i < maxArt ? NEOFETCH_ART[i].padEnd(26) : " ".repeat(26);
      if (i < maxInfo) {
        lines.push({
          text: art + info[i][0].padEnd(14) + info[i][1],
          color: i < maxArt ? "text-purple-400" : "text-white/70",
          split: true,
          artLen: 26,
        });
      } else {
        lines.push(p(art));
      }
    }

    // Color bar
    lines.push(c(""));
    lines.push({
      text: " ".repeat(26) + "███████████████████████████████",
      color: "text-white",
      colorBar: true,
    });

    return lines;
  },

  uname: () => [c("DhruvOS 3.1.4 portfolio x86_64 React/19 Vite/7")],

  date: () => [c("  " + new Date().toString())],
};

/* ── Dynamic command: cat project <n> ── */
function handleCatProject(n) {
  const idx = parseInt(n, 10) - 1;
  if (isNaN(idx) || idx < 0 || idx >= PROJECTS.length) {
    return [r("  Error: project " + n + " not found. Use 1-" + PROJECTS.length)];
  }
  const proj = PROJECTS[idx];
  const lines = [
    g("── " + proj.name + " ──"),
    c(""),
    w("  " + proj.description),
    c(""),
    a("  Tech: " + proj.tech.join(", ")),
    c(""),
  ];
  proj.bullets.forEach((b) => lines.push(c("  • " + b)));
  lines.push(c(""));
  if (proj.github) lines.push(cyan("  GitHub  : " + proj.github));
  if (proj.githubBackend) lines.push(cyan("  Backend : " + proj.githubBackend));
  if (proj.live) lines.push(cyan("  Live    : " + proj.live));
  return lines;
}

/* ── Dynamic command: open <slug> ── */
function handleOpen(slug, onOpenPdf) {
  const cert = CERTIFICATIONS.find((c) => c.slug === slug);
  if (!cert) {
    const slugs = CERTIFICATIONS.map((c) => c.slug).join(", ");
    return [
      r("  Certificate '" + slug + "' not found."),
      d("  Available slugs: " + slugs),
    ];
  }
  if (onOpenPdf) onOpenPdf(cert);
  return [g("  Opening " + cert.name + "...")];
}

/* ── Parse & execute ── */
function execute(input, onOpenPdf) {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) return [];

  // Built-in exact matches
  if (COMMANDS[trimmed]) return COMMANDS[trimmed]();

  // cat project <n>
  if (trimmed.startsWith("cat project ")) {
    return handleCatProject(trimmed.split(" ")[2]);
  }

  // open <slug>
  if (trimmed.startsWith("open ")) {
    return handleOpen(trimmed.slice(5).trim(), onOpenPdf);
  }

  // echo
  if (trimmed.startsWith("echo ")) {
    return [c("  " + input.trim().slice(5))];
  }

  // clear is handled in the component
  if (trimmed === "clear") return "__CLEAR__";

  return [r("  command not found: " + trimmed), d("  Type 'help' for available commands.")];
}

/* ─────────────────────────────────────────
   TERMINAL COMPONENT
   ───────────────────────────────────────── */

export default function TerminalContent({ onOpenPdf }) {
  const [history, setHistory] = useState([
    g("DhruvOS Terminal v1.0"),
    d("Type 'help' to see available commands."),
    c(""),
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on click anywhere in the terminal
  const focusInput = () => inputRef.current?.focus();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input;
    const prompt = { text: "dhruv@portfolio:~$ " + cmd, color: "text-green-400", isPrompt: true };

    const result = execute(cmd, onOpenPdf);

    if (result === "__CLEAR__") {
      setHistory([]);
    } else {
      setHistory((prev) => [...prev, prompt, ...result, c("")]);
    }

    if (cmd.trim()) {
      setCmdHistory((prev) => [cmd, ...prev]);
    }
    setHistoryIdx(-1);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(next);
      if (cmdHistory[next]) setInput(cmdHistory[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = historyIdx - 1;
      if (next < 0) {
        setHistoryIdx(-1);
        setInput("");
      } else {
        setHistoryIdx(next);
        setInput(cmdHistory[next] || "");
      }
    }
  };

  return (
    <div
      className="h-full flex flex-col bg-[#0d0d1a] -m-6 p-4 font-mono text-sm cursor-text"
      onClick={focusInput}
    >
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-0.5 pb-2">
        {history.map((line, i) => {
          if (line.colorBar) {
            // Render colour blocks
            return (
              <div key={i} className="flex gap-0">
                <span className="text-transparent select-none">{" ".repeat(26)}</span>
                {["bg-red-500","bg-green-500","bg-amber-500","bg-blue-500","bg-purple-500","bg-cyan-500","bg-white"].map(
                  (bg, j) => <span key={j} className={"inline-block w-4 h-4 " + bg} />
                )}
              </div>
            );
          }

          if (line.split) {
            // neofetch split: art (purple) + key (cyan) + value (white)
            const art = line.text.slice(0, line.artLen);
            const rest = line.text.slice(line.artLen);
            const colonIdx = rest.indexOf("  ");
            const key = rest.slice(0, 14);
            const val = rest.slice(14);
            return (
              <div key={i}>
                <span className="text-purple-400">{art}</span>
                <span className="text-cyan-400 font-bold">{key}</span>
                <span className="text-white/70">{val}</span>
              </div>
            );
          }

          return (
            <div key={i} className={line.color || "text-white/70"}>
              {line.text}
            </div>
          );
        })}

        {/* Active prompt */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-green-400 shrink-0">dhruv@portfolio:~$&nbsp;</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-green-300 outline-none caret-green-400"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}
