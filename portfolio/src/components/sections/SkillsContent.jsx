import { Code2, Layers, Database, Wrench, Globe } from "lucide-react";
import { SKILLS } from "../../data/portfolio";

const CATEGORY_ICONS = {
  Programming: <Code2 className="w-4 h-4 text-blue-400" />,
  Frameworks: <Layers className="w-4 h-4 text-green-400" />,
  Databases: <Database className="w-4 h-4 text-amber-400" />,
  Tools: <Wrench className="w-4 h-4 text-red-400" />,
  Other: <Globe className="w-4 h-4 text-purple-400" />,
};

export default function SkillsContent() {
  return (
    <div className="space-y-5 font-sans">
      <div className="font-mono text-xs text-green-400/70 mb-4">
        <span className="text-white/40">$</span> cat /etc/skills.conf
      </div>

      {Object.entries(SKILLS).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-sm font-semibold text-white/80 mb-2.5 flex items-center gap-2">
            {CATEGORY_ICONS[category]}
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-md text-xs bg-white/5 text-white/70 border border-white/10 hover:border-purple-500/40 hover:text-white hover:bg-purple-500/10 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
