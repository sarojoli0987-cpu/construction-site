import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustHighlights from "@/components/trust-highlights";
import About from "@/components/about";
import Services from "@/components/services";
import HowWeWork from "@/components/how-we-work";
import Projects from "@/components/projects";
import WhyChooseUs from "@/components/why-choose-us";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Reveal from "@/components/reveal";

export default function Home() {
  return (
    <div className="bg-[#F2F1ED] text-[#1B2530]">
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <TrustHighlights />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <HowWeWork />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <WhyChooseUs />
        </Reveal>
        <Reveal>
          <CTA />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}