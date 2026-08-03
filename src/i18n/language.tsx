import React, { createContext, useContext, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { translations, type Lang, type TranslationKey } from "./translations";

interface LanguageContextType {
  lang: Lang;
  t: (key: TranslationKey) => string;
  switchLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const lang: Lang = useMemo(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const first = segments[0] as Lang | undefined;
    return first === "ru" || first === "en" ? first : "ru";
  }, [location.pathname]);

  const t = useMemo(
    () => (key: TranslationKey) => translations[key]?.[lang] ?? key,
    [lang]
  );

  const switchLang = (newLang: Lang) => {
    const segments = location.pathname.split("/").filter(Boolean);
    const first = segments[0];
    const isRouted = first === "ru" || first === "en";
    const rest = isRouted ? "/" + segments.slice(1).join("/") : location.pathname;
    const newPath = "/" + newLang + (rest === "/" ? "" : rest);
    navigate(newPath);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, switchLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
}
