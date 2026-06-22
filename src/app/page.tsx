import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Portfolio />
        <Pricing />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
