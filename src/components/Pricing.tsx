"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Pricing() {
  const { language } = useLanguage();
  const t = translations[language].pricing;

  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-foreground/65">{t.subtitle}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3 items-start">
          {t.tiers.map((tier, index) => {
            const popular = index === 1;
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 ${
                  popular ? "glass-strong lg:-translate-y-3" : "glass"
                }`}
              >
                {popular && (
                  <span className="absolute -top-3 right-8 rounded-full bg-gold px-3 py-1 text-xs font-medium text-background">
                    {t.mostPopular}
                  </span>
                )}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold text-gradient-gold">
                    {tier.price}
                  </span>
                  <span className="text-sm text-foreground/55">
                    {t.currency}
                  </span>
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-foreground/75"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block text-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                    popular
                      ? "bg-gold text-background hover:bg-gold-soft"
                      : "glass hover:bg-black/[0.04] text-foreground"
                  }`}
                >
                  {t.choosePrefix} {tier.name}
                </a>
              </div>
            );
          })}
        </div>
        <p className="mt-12 text-center text-sm text-foreground/55">
          {t.includes}
        </p>
      </div>
    </section>
  );
}
