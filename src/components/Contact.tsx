export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="glass-strong rounded-3xl p-10 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Ready to get started?
          </h2>
          <p className="mt-4 text-foreground/65">
            Asun Digitals, trading as AgriSun Ethiopia Trading and
            Engineering Plc.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@asundigitals.com"
              className="w-full sm:w-auto rounded-full bg-gold px-8 py-3.5 text-base font-medium text-background hover:bg-gold-soft transition-colors"
            >
              Start Your Website
            </a>
            <a
              href="https://wa.me/251000000000"
              className="w-full sm:w-auto rounded-full glass px-8 py-3.5 text-base font-medium text-foreground hover:bg-black/[0.04] transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-foreground/45">
            hello@asundigitals.com &middot; WhatsApp: +251 00 000 0000
          </p>
        </div>
      </div>
    </section>
  );
}
