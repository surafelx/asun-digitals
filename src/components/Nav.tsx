"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Nav() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-black/5 bg-background/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight">
          Asun <span className="text-gradient-gold">Digitals</span>
        </span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
          <a href="#how-it-works" className="hover:text-foreground transition-colors">
            {t.howItWorks}
          </a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">
            {t.portfolio}
          </a>
          <a href="#pricing" className="hover:text-foreground transition-colors">
            {t.pricing}
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            {t.contact}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full glass px-3 py-1.5 text-xs font-medium text-foreground hover:bg-black/[0.04] transition-colors"
            aria-label="Toggle language"
          >
            {language === "en" ? "አማ" : "EN"}
          </button>
          <a
            href="#contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-background hover:bg-gold-soft transition-colors"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
