const projects = [
  {
    client: "Coming Soon",
    industry: "Construction & Engineering",
    deliverable: "Multi-page business website",
    placeholder: true,
  },
  {
    client: "Coming Soon",
    industry: "Import / Export & Trading",
    deliverable: "Single-page launch site",
    placeholder: true,
  },
  {
    client: "Coming Soon",
    industry: "Hospitality",
    deliverable: "Full website with gallery",
    placeholder: true,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Recent Work
          </h2>
          <p className="mt-4 text-foreground/65">
            A growing portfolio of fast, professional sites for Ethiopian
            businesses.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.industry}
              className="group rounded-2xl glass overflow-hidden hover:bg-black/[0.03] transition-colors"
            >
              <div className="aspect-video bg-gradient-to-br from-background-soft to-background flex items-center justify-center border-b border-black/5">
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/35">
                  Coming Soon
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-gold-soft">
                  {project.industry}
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  {project.client}
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
