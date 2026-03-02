import { motion } from "framer-motion";
import { SECTIONS } from "../data/portfolio";

export default function DesktopIcons({ onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="fixed top-4 left-4 flex flex-col gap-3"
      style={{ zIndex: 1 }}
    >
      {SECTIONS.map((section, i) => {
        const Icon = section.icon;
        return (
          <motion.button
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.08 }}
            onDoubleClick={() => onOpen(section.id)}
            className="flex flex-col items-center gap-1 w-16 py-2 rounded-lg hover:bg-white/10 transition-colors group cursor-default"
          >
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:border-purple-500/30 flex items-center justify-center transition-colors">
              <Icon className="w-5 h-5 text-white/70 group-hover:text-purple-400 transition-colors" />
            </div>
            <span className="text-white/70 text-[10px] font-sans group-hover:text-white transition-colors select-none">
              {section.label}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
