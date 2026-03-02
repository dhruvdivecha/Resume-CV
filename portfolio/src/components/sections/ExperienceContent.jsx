import { ChevronRight } from "lucide-react";
import { EXPERIENCE } from "../../data/portfolio";

export default function ExperienceContent() {
  return (
    <div className="space-y-6 font-sans">
      <div className="font-mono text-xs text-green-400/70 mb-2">
        <span className="text-white/40">$</span> cat ~/work_history.log
      </div>

      {EXPERIENCE.map((exp, i) => (
        <div key={i} className="relative pl-5 border-l-2 border-purple-500/30">
          <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-purple-500 border-2 border-slate-900" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <div>
              <h3 className="text-sm font-bold text-white">{exp.company}</h3>
              <p className="text-purple-300 text-xs">{exp.role}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-white/40 text-xs">{exp.location}</p>
              <p className="text-amber-400/70 text-xs font-mono">
                {exp.period}
              </p>
            </div>
          </div>
          <ul className="space-y-1.5">
            {exp.bullets.map((b, j) => (
              <li
                key={j}
                className="text-white/60 text-xs flex items-start gap-2"
              >
                <ChevronRight className="w-3 h-3 text-purple-400 mt-0.5 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
