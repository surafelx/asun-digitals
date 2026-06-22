const tiers = [
  {
    name: "Starter",
    price: "15,000",
    popular: false,
    features: [
      "Single-page website",
      "Mobile-friendly",
      "Delivery in 2 days",
      "1 revision round",
      "WhatsApp support",
    ],
  },
  {
    name: "Professional",
    price: "30,000",
    popular: true,
    features: [
      "Multi-page website (up to 6 pages)",
      "Professional copywriting",
      "Mobile, tablet, desktop",
      "Google Maps integration",
      "Contact form",
      "2 revision rounds",
      "Delivery in 3 days",
    ],
  },
  {
    name: "Enterprise",
    price: "45,000",
    popular: false,
    features: [
      "Full website (up to 12 pages)",
      "Premium copywriting + SEO",
      "All device optimization",
      "Image sourcing included",
      "Gallery / portfolio section",
      "WhatsApp + SMS integration",
      "3 revision rounds",
      "Delivery in 5 days",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Pricing
          </h2>
          <p className="mt-4 text-foreground/65">
            Fixed price. No hidden fees. No jargon.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.popular
                  ? "glass-strong lg:-translate-y-3"
                  : "glass"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 right-8 rounded-full bg-gold px-3 py-1 text-xs font-medium text-background">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-gradient-gold">
                  {tier.price}
                </span>
                <span className="text-sm text-foreground/55">ETB</span>
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
                  tier.popular
                    ? "bg-gold text-background hover:bg-gold-soft"
                    : "glass hover:bg-black/[0.04] text-foreground"
                }`}
              >
                Choose {tier.name}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-foreground/55">
          All packages include: hosting for first year, SSL certificate,
          basic SEO, lifetime WhatsApp support
        </p>
      </div>
    </section>
  );
}
