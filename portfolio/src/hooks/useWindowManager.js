import { useState, useCallback } from "react";

export default function useWindowManager() {
  const [windows, setWindows] = useState([]);
  const [zCounter, setZCounter] = useState(100);

  const openWindow = useCallback(
    (id) => {
      setWindows((prev) => {
        const existing = prev.find((w) => w.id === id);
        if (existing) {
          return prev.map((w) =>
            w.id === id ? { ...w, minimized: false, zIndex: zCounter + 1 } : w
          );
        }
        const offset = prev.length * 30;
        return [
          ...prev,
          {
            id,
            x: 120 + offset,
            y: 60 + offset,
            zIndex: zCounter + 1,
            minimized: false,
            maximized: false,
          },
        ];
      });
      setZCounter((c) => c + 1);
    },
    [zCounter]
  );

  const closeWindow = useCallback((id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: true } : w))
    );
  }, []);

  const maximizeWindow = useCallback((id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w))
    );
  }, []);

  const bringToFront = useCallback(
    (id) => {
      setWindows((prev) =>
        prev.map((w) => (w.id === id ? { ...w, zIndex: zCounter + 1 } : w))
      );
      setZCounter((c) => c + 1);
    },
    [zCounter]
  );

  const updatePosition = useCallback((id, x, y) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, x, y } : w))
    );
  }, []);

  return {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    bringToFront,
    updatePosition,
  };
}
