"use client";
import { useEffect, useState } from "react";
export default function Screensize() {
  const [isBigScreen, setIsBigScreen] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(min-width: 62rem)").matches) {
      setIsBigScreen(true);
    } else {
      setIsBigScreen(false);
    }
  }, []);
  window.matchMedia("(min-width: 62rem)").addEventListener("change", (e) => {
    if (e.matches) {
      return setIsBigScreen(true);
    } else {
      return setIsBigScreen(false);
    }
  });
  return isBigScreen;
}
