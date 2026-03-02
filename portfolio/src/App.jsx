import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

import { SECTIONS } from "./data/portfolio";

import useBootSequence from "./hooks/useBootSequence";
import useWindowManager from "./hooks/useWindowManager";

import BootScreen from "./components/BootScreen";
import MatrixBackground from "./components/MatrixBackground";
import DesktopIcons from "./components/DesktopIcons";
import Taskbar from "./components/Taskbar";
import OSWindow from "./components/OSWindow";
import PdfViewer from "./components/PdfViewer";

import SectionContent from "./components/sections";
import TerminalContent from "./components/sections/TerminalContent";

import "./App.css";

/* ──────────────────────────────────────────────
   PDF VIEWER WINDOW MANAGER
   Cert PDFs open as their own draggable windows.
   ────────────────────────────────────────────── */

function usePdfWindows(baseZCounter) {
  const [pdfs, setPdfs] = useState([]); // { cert, id, x, y, zIndex, minimized, maximized }
  const [z, setZ] = useState(baseZCounter + 500);

  const openPdf = useCallback(
    (cert) => {
      setPdfs((prev) => {
        const existing = prev.find((p) => p.cert.slug === cert.slug);
        if (existing) {
          return prev.map((p) =>
            p.cert.slug === cert.slug
              ? { ...p, minimized: false, zIndex: z + 1 }
              : p
          );
        }
        const offset = prev.length * 28;
        return [
          ...prev,
          {
            cert,
            id: "pdf-" + cert.slug,
            x: 180 + offset,
            y: 40 + offset,
            zIndex: z + 1,
            minimized: false,
            maximized: false,
          },
        ];
      });
      setZ((c) => c + 1);
    },
    [z]
  );

  const closePdf = useCallback((id) => {
    setPdfs((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const minimizePdf = useCallback((id) => {
    setPdfs((prev) =>
      prev.map((p) => (p.id === id ? { ...p, minimized: true } : p))
    );
  }, []);

  const maximizePdf = useCallback((id) => {
    setPdfs((prev) =>
      prev.map((p) => (p.id === id ? { ...p, maximized: !p.maximized } : p))
    );
  }, []);

  const bringPdfToFront = useCallback(
    (id) => {
      setPdfs((prev) =>
        prev.map((p) => (p.id === id ? { ...p, zIndex: z + 1 } : p))
      );
      setZ((c) => c + 1);
    },
    [z]
  );

  const updatePdfPosition = useCallback((id, x, y) => {
    setPdfs((prev) =>
      prev.map((p) => (p.id === id ? { ...p, x, y } : p))
    );
  }, []);

  return {
    pdfs,
    openPdf,
    closePdf,
    minimizePdf,
    maximizePdf,
    bringPdfToFront,
    updatePdfPosition,
  };
}

/* ──────────────────────────────────────────────
   MAIN APP
   ────────────────────────────────────────────── */

export default function App() {
  const { lines, done, loginPhase, loginText, loggedIn } = useBootSequence();
  const {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    bringToFront,
    updatePosition,
  } = useWindowManager();
  const {
    pdfs,
    openPdf,
    closePdf,
    minimizePdf,
    maximizePdf,
    bringPdfToFront,
    updatePdfPosition,
  } = usePdfWindows(200);

  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-br from-[#0a0a2e] via-[#0f0f35] to-[#1a0a30] font-mono">
      {/* ── Boot sequence ── */}
      <AnimatePresence>
        {!done && (
          <BootScreen
            lines={lines}
            loginPhase={loginPhase}
            loginText={loginText}
            loggedIn={loggedIn}
          />
        )}
      </AnimatePresence>

      {/* ── Desktop ── */}
      {done && (
        <>
          <MatrixBackground />

          {/* Subtle grid overlay */}
          <div
            className="fixed inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              zIndex: 0,
            }}
          />

          <DesktopIcons onOpen={openWindow} />

          {/* ── Section windows ── */}
          <AnimatePresence>
            {windows.map((w) => {
              const section = SECTIONS.find((s) => s.id === w.id);
              if (!section || w.minimized) return null;
              return (
                <OSWindow
                  key={w.id}
                  windowData={w}
                  section={section}
                  onClose={closeWindow}
                  onMinimize={minimizeWindow}
                  onMaximize={maximizeWindow}
                  onBringToFront={bringToFront}
                  onUpdatePosition={updatePosition}
                >
                  {w.id === "terminal" ? (
                    <TerminalContent onOpenPdf={openPdf} />
                  ) : (
                    <SectionContent id={w.id} onOpenPdf={openPdf} />
                  )}
                </OSWindow>
              );
            })}
          </AnimatePresence>

          {/* ── PDF viewer windows ── */}
          <AnimatePresence>
            {pdfs.map((pw) =>
              pw.minimized ? null : (
                <PdfViewer
                  key={pw.id}
                  cert={pw.cert}
                  windowData={pw}
                  onClose={closePdf}
                  onMinimize={minimizePdf}
                  onMaximize={maximizePdf}
                  onBringToFront={bringPdfToFront}
                  onUpdatePosition={updatePdfPosition}
                />
              )
            )}
          </AnimatePresence>

          <Taskbar onOpen={openWindow} windows={windows} />
        </>
      )}
    </div>
  );
}
