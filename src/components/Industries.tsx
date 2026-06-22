const industries = [
  "Construction & Engineering",
  "Import / Export & Trading",
  "Manufacturing",
  "Consultancy & Training",
  "Hospitality",
];

export default function Industries() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Industries We Serve
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full glass px-6 py-3 text-sm text-foreground/80 hover:bg-black/[0.03] transition-colors"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
