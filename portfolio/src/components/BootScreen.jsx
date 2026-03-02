import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  HardDrive,
  MemoryStick,
  Wifi,
  Monitor,
  CheckCircle2,
} from "lucide-react";

const ICON_MAP = {
  cpu: Cpu,
  memory: MemoryStick,
  hdd: HardDrive,
  wifi: Wifi,
  monitor: Monitor,
  check: CheckCircle2,
};

export default function BootScreen({ lines, loginPhase, loginText, loggedIn }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, loginText]);

  const renderIcon = (icon) => {
    const Icon = ICON_MAP[icon];
    if (!Icon) return null;
    const cls =
      icon === "check"
        ? "inline w-4 h-4 mr-1 text-green-400"
        : "inline w-4 h-4 mr-1 text-amber-400";
    return <Icon className={cls} />;
  };

  return (
    <motion.div
      className="fixed inset-0 bg-[#0a0a1e] flex items-center justify-center"
      style={{ zIndex: 9999 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-3xl mx-4 relative">
        {/* CRT frame */}
        <div className="border border-amber-500/30 rounded-lg bg-black/80 p-1">
          <div
            ref={scrollRef}
            className="border border-amber-500/10 rounded p-6 min-h-[500px] max-h-[80vh] overflow-y-auto font-mono text-sm"
          >
            {/* BIOS header */}
            <div className="text-center mb-4 text-amber-500/60 text-xs tracking-widest whitespace-pre">
{`\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551         DIVECHA SYSTEMS BIOS v3.1.4          \u2551
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D`}
            </div>

            {/* Boot lines */}
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
                className="leading-relaxed"
              >
                {line.text === "" ? (
                  <br />
                ) : (
                  <span
                    className={
                      line.icon === "check"
                        ? "text-green-400"
                        : "text-amber-400"
                    }
                  >
                    {line.icon && renderIcon(line.icon)}
                    {line.text}
                  </span>
                )}
              </motion.div>
            ))}

            {/* Login prompt */}
            {loginPhase && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6"
              >
                <div className="text-green-400 mb-2">
                  {"\u2500\u2500\u2500\u2500 Login \u2500\u2500\u2500\u2500"}
                </div>
                <div className="flex items-center">
                  <span className="text-green-400">{loginText}</span>
                  {!loggedIn && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="text-green-400 ml-0.5"
                    >
                      {"\u2588"}
                    </motion.span>
                  )}
                </div>
                {loggedIn && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 text-green-300"
                  >
                    <span className="text-green-500">{"\u2713"}</span> Desktop
                    environment loading...
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-lg"
          style={{
            background:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 3px)",
          }}
        />
      </div>
    </motion.div>
  );
}
