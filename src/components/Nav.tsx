export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-black/5 bg-background/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight">
          Asun <span className="text-gradient-gold">Digitals</span>
        </span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
          <a href="#how-it-works" className="hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">
            Portfolio
          </a>
          <a href="#pricing" className="hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-background hover:bg-gold-soft transition-colors"
        >
          Start Your Website
        </a>
      </div>
    </header>
  );
}
