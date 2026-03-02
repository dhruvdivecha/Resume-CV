import { Github, ExternalLink, ChevronRight } from "lucide-react";
import { PROJECTS } from "../../data/portfolio";

export default function ProjectsContent() {
  return (
    <div className="space-y-5 font-sans">
      <div className="font-mono text-xs text-green-400/70 mb-2">
        <span className="text-white/40">$</span> ls ~/projects/ --detail
      </div>

      {PROJECTS.map((proj, i) => (
        <div
          key={i}
          className="rounded-lg bg-white/[0.03] border border-white/5 hover:border-purple-500/20 transition-all p-4"
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-sm font-bold text-white">{proj.name}</h3>
            <div className="flex items-center gap-2 shrink-0">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors"
                  title="Frontend"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {proj.githubBackend && (
                <a
                  href={proj.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors"
                  title="Backend"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-purple-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <p className="text-white/50 text-xs mb-3">{proj.description}</p>

          <ul className="space-y-1 mb-3">
            {proj.bullets.map((b, j) => (
              <li
                key={j}
                className="text-white/60 text-xs flex items-start gap-2"
              >
                <ChevronRight className="w-3 h-3 text-green-400 mt-0.5 shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {proj.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded text-[10px] bg-purple-500/10 text-purple-300 border border-purple-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
