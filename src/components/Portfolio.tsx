"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Portfolio() {
  const { language } = useLanguage();
  const t = translations[language].portfolio;

  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-foreground/65">{t.subtitle}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.projects.map((project) => (
            <div
              key={project.industry}
              className="group rounded-2xl glass overflow-hidden hover:bg-black/[0.03] transition-colors"
            >
              <div className="aspect-video bg-gradient-to-br from-background-soft to-background flex items-center justify-center border-b border-black/5">
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/35">
                  {t.comingSoon}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-gold-soft">
                  {project.industry}
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  {t.comingSoon}
                </h3>
                <p className="mt-1 text-sm text-foreground/60">
                  {project.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
