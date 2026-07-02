"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import ja from "../messages/ja";
import vi from "../messages/vi";

export type Language = "ja" | "vi";

const dictionaries = {
  ja,
  vi,
};

type Dictionary = typeof ja;

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("ja");

  // 初回読み込み
  useEffect(() => {
    const saved = localStorage.getItem("language");

    if (saved === "ja" || saved === "vi") {
      setLanguage(saved);
    }
  }, []);

  // 保存
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ja" ? "vi" : "ja"));
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: dictionaries[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}