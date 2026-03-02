import { useState, useEffect } from "react";
import { BOOT_LINES } from "../data/portfolio";

export default function useBootSequence() {
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);
  const [loginPhase, setLoginPhase] = useState(false);
  const [loginText, setLoginText] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let timeout;
    let idx = 0;

    const addLine = () => {
      if (idx >= BOOT_LINES.length) {
        setTimeout(() => setLoginPhase(true), 500);
        return;
      }
      const line = BOOT_LINES[idx];
      timeout = setTimeout(() => {
        setLines((prev) => [...prev, line]);
        idx++;
        addLine();
      }, line.delay);
    };

    addLine();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loginPhase) return;
    const fullText = "dhruv@portfolio ~ $ startx --desktop";
    let i = 0;
    const interval = setInterval(() => {
      setLoginText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setLoggedIn(true);
          setTimeout(() => setDone(true), 800);
        }, 600);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [loginPhase]);

  return { lines, done, loginPhase, loginText, loggedIn };
}
