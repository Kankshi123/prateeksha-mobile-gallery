import { useState, useEffect } from "react";
import { SHOP_CONFIG } from "../data/config";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("pmg-theme") || SHOP_CONFIG.defaultTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("pmg-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "sunrise" ? "midnight" : "sunrise"));

  return { theme, toggleTheme };
};
