import { useRef } from "react";
import { Minus, Square, X, Download, ExternalLink } from "lucide-react";

export default function PdfViewer({
  cert,
  windowData,
  onClose,
  onMinimize,
  onMaximize,
  onBringToFront,
  onUpdatePosition,
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
          : "flex flex-col w-[800px] max-w-[92vw] h-[85vh]"
      }
      style={style}
      onMouseDown={() => onBringToFront(windowData.id)}
    >
      <div className="flex flex-col h-full rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 backdrop-blur-xl bg-white/[0.08]">
        {/* ── Title bar ── */}
        <div
          className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-amber-900/60 to-amber-800/40 border-b border-white/10 cursor-grab active:cursor-grabbing select-none shrink-0"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="text-amber-400 text-sm">📄</span>
            <span className="text-white/90 text-sm font-medium truncate">
              {cert.name}
            </span>
            <span className="text-white/30 text-xs font-mono truncate hidden sm:inline">
              — {cert.file}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-4">
            {/* Open in new tab */}
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-white/40 hover:text-white transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            {/* Download */}
            <a
              href={cert.file}
              download
              onClick={(e) => e.stopPropagation()}
              className="text-white/40 hover:text-white transition-colors"
              title="Download"
            >
              <Download className="w-3.5 h-3.5" />
            </a>

            <div className="w-px h-3 bg-white/10 mx-1" />

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

        {/* ── PDF embed ── */}
        <div className="flex-1 bg-slate-800">
          <iframe
            src={cert.file}
            title={cert.name}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </motion.div>
  );
}
