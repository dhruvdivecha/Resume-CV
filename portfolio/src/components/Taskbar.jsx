import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";
import { SECTIONS } from "../data/portfolio";

export default function Taskbar({ onOpen, windows }) {
  const [hovered, setHovered] = useState(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const openIds = windows.filter((w) => !w.minimized).map((w) => w.id);

  return (
    <motion.div
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.3 }}
      className="fixed bottom-0 left-0 right-0 h-12 bg-slate-900/80 backdrop-blur-xl border-t border-white/10 flex items-center justify-between px-4"
      style={{ zIndex: 9000 }}
    >
      {/* Start button */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-purple-600/20 border border-purple-500/20 mr-4">
        <Terminal className="w-4 h-4 text-purple-400" />
        <span className="text-purple-300 text-xs font-bold font-mono hidden sm:inline">
          DhruvOS
        </span>
      </div>

      {/* Section icons */}
      <div className="flex items-center gap-1 flex-1 justify-center">
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          const isOpen = openIds.includes(section.id);
          return (
            <div key={section.id} className="relative">
              <motion.button
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onOpen(section.id)}
                onMouseEnter={() => setHovered(section.id)}
                onMouseLeave={() => setHovered(null)}
                className={
                  "p-2 rounded-lg transition-all " +
                  (isOpen
                    ? "bg-purple-500/20 border border-purple-500/30"
                    : "hover:bg-white/10 border border-transparent")
                }
              >
                <Icon
                  className={
                    "w-5 h-5 " +
                    (isOpen
                      ? "text-purple-400"
                      : "text-white/60 hover:text-white/90")
                  }
                />
                {isOpen && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400" />
                )}
              </motion.button>

              {/* Tooltip */}
              <AnimatePresence>
                {hovered === section.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-800 border border-white/10 text-white text-xs whitespace-nowrap shadow-xl"
                  >
                    {section.label}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-white/10 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Clock */}
      <div className="text-white/50 text-xs font-mono tabular-nums ml-4">
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
    </motion.div>
  );
}
