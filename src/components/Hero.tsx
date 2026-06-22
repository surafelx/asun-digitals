"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative overflow-hidden pt-40 pb-28 px-6">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(212,168,67,0.15),transparent_60%)]"
      />
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-gold-soft">
          {t.eyebrow}
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.1]">
          {t.title}{" "}
          <span className="text-gradient-gold">{t.titleHighlight}</span>
        </h1>
        <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-full bg-gold px-8 py-3.5 text-base font-medium text-background hover:bg-gold-soft transition-colors"
          >
            {t.ctaPrimary}
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto rounded-full glass px-8 py-3.5 text-base font-medium text-foreground hover:bg-black/[0.04] transition-colors"
          >
            {t.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
