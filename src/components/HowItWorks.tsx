const steps = [
  {
    number: "01",
    title: "Design",
    description:
      "Tell us about your business. We design a layout that fits your brand and industry.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We build your site with real content, responsive on every device, ready for review.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "You approve, we deploy. Hosting, SSL, and basic SEO are set up from day one.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm text-gold-soft">
            3 days from brief to live
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
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
