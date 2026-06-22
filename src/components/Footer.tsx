export default function Footer() {
  return (
    <footer className="border-t border-black/5 px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/45">
        <span>
          Asun Digitals &middot; trading as AgriSun Ethiopia Trading and
          Engineering Plc
        </span>
        <span>&copy; {new Date().getFullYear()} Asun Digitals</span>
      </div>
    </footer>
  );
}
