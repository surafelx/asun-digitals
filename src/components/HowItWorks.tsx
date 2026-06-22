"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function HowItWorks() {
  const { language } = useLanguage();
  const t = translations[language].howItWorks;

  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm text-gold-soft">
            {t.timeline}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {t.steps.map((step) => (
            <div
              key={step.number}
              className="glass rounded-2xl p-8 hover:bg-black/[0.03] transition-colors"
            >
              <span className="text-sm font-mono text-gold">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-foreground/65 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
