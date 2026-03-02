import { useRef } from "react";
import { motion } from "framer-motion";
import { Minus, Square, X } from "lucide-react";

export default function OSWindow({
  windowData,
  section,
  onClose,
  onMinimize,
  onMaximize,
  onBringToFront,
  onUpdatePosition,
  children,
}) {
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (windowData.maximized) return;
    isDragging.current = true;
    dragOffset.current = {
      x: e.clientX - windowData.x,
      y: e.clientY - windowData.y,
    };
    onBringToFront(windowData.id);

    const handleMouseMove = (ev) => {
      if (!isDragging.current) return;
      onUpdatePosition(
        windowData.id,
        ev.clientX - dragOffset.current.x,
        Math.max(0, ev.clientY - dragOffset.current.y)
      );
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  if (windowData.minimized) return null;

  const SectionIcon = section.icon;

  const style = windowData.maximized
    ? { position: "fixed", top: 0, left: 0, right: 0, bottom: 48, zIndex: windowData.zIndex }
    : { position: "fixed", top: windowData.y, left: windowData.x, zIndex: windowData.zIndex };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={
        windowData.maximized
          ? "flex flex-col"
          : "flex flex-col w-[700px] max-w-[90vw] min-h-[400px] max-h-[80vh]"
      }
      style={style}
      onMouseDown={() => onBringToFront(windowData.id)}
    >
      <div className="flex flex-col h-full rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 backdrop-blur-xl bg-white/[0.08]">
        {/* ── Title bar ── */}
        <div
          className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-slate-800/90 to-slate-700/90 border-b border-white/10 cursor-grab active:cursor-grabbing select-none shrink-0"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <SectionIcon className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="text-white/90 text-sm font-medium truncate">
              {section.label}
            </span>
            <span className="text-white/30 text-xs font-mono truncate hidden sm:inline">
              {"\u2014"} {section.path}
            </span>
          </div>

          {/* Traffic-light buttons */}
          <div className="flex items-center gap-1.5 shrink-0 ml-4">
            <button
              onClick={(e) => { e.stopPropagation(); onMinimize(windowData.id); }}
              className="w-3.5 h-3.5 rounded-full bg-amber-500 hover:bg-amber-400 flex items-center justify-center transition-colors group"
            >
              <Minus className="w-2.5 h-2.5 text-amber-900 opacity-0 group-hover:opacity-100" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onMaximize(windowData.id); }}
              className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center transition-colors group"
            >
              <Square className="w-2 h-2 text-green-900 opacity-0 group-hover:opacity-100" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onClose(windowData.id); }}
              className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 flex items-center justify-center transition-colors group"
            >
              <X className="w-2.5 h-2.5 text-red-900 opacity-0 group-hover:opacity-100" />
            </button>
          </div>
        </div>

        {/* ── Content ── */}
        <div
          className={
            windowData.maximized
              ? "flex-1 overflow-y-auto p-6 bg-slate-900/70"
              : "flex-1 overflow-y-auto p-6 bg-slate-900/70 max-h-[calc(80vh-44px)]"
          }
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}
