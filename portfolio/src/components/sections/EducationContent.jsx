import { EDUCATION } from "../../data/portfolio";

export default function EducationContent() {
  return (
    <div className="space-y-6 font-sans">
      <div className="font-mono text-xs text-green-400/70 mb-2">
        <span className="text-white/40">$</span> cat ~/education.md
      </div>

      {EDUCATION.map((edu, i) => (
        <div key={i} className="relative pl-5 border-l-2 border-green-500/30">
          <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-green-500 border-2 border-slate-900" />
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
            <div>
              <h3 className="text-sm font-bold text-white">{edu.school}</h3>
              <p className="text-green-300 text-xs">{edu.degree}</p>
              {edu.extra && (
                <p className="text-green-300/60 text-xs">{edu.extra}</p>
              )}
            </div>
            <div className="text-right shrink-0">
              <p className="text-white/40 text-xs">{edu.location}</p>
              <p className="text-amber-400/70 text-xs font-mono">
                {edu.period}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
