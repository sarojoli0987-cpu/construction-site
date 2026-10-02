import { Button } from "@/components/ui/button";
import {
  HardHat,
  Buildings,
  House,
  Wrench,
  Ruler,
  Phone,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/contact-form";

const heading = "font-[family-name:var(--font-barlow)]";

const services = [
  {
    icon: House,
    title: "Residential building",
    text: "Houses, apartments and renovations, built to your plan and budget.",
  },
  {
    icon: Buildings,
    title: "Commercial construction",
    text: "Offices, shops and warehouses delivered on a fixed schedule.",
  },
  {
    icon: Ruler,
    title: "Design and planning",
    text: "Architectural drawings, structural plans and cost estimates.",
  },
  {
    icon: Wrench,
    title: "Repair and maintenance",
    text: "Structural repairs, waterproofing and upkeep for existing buildings.",
  },
];

const steps = [
  "Free site visit and discussion",
  "Written quote with timeline",
  "Construction with weekly updates",
  "Inspection and handover",
];

export default function Home() {
  return (
    <div className="bg-[#F2F1ED] text-[#1B2530]">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-[#1B2530]/15 bg-[#F2F1ED]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2">
            <HardHat size={30} weight="fill" className="text-[#F2B705]" />
            <span className={`${heading} text-2xl font-bold tracking-wide`}>
              WDC Company
            </span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#services">Services</a>
            <a href="#process">How we work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <Button asChild>
            <a href="#contact">Get a quote</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="border-b border-[#1B2530]/15"
        style={{
          backgroundImage:
            "linear-gradient(#1F4E7914 1px, transparent 1px), linear-gradient(90deg, #1F4E7914 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-36">
          <h1
            className={`${heading} max-w-3xl text-6xl font-bold leading-[0.95] md:text-8xl`}
          >
            Built right. Built to last.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            WDC Company builds homes and commercial buildings in Nepal, from
            first drawing to final handover.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="#contact">Request a free quote</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">See our services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className={`${heading} text-4xl font-bold md:text-5xl`}>
          What we build
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden border border-[#1B2530]/20 bg-[#1B2530]/20 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-[#F2F1ED] p-8">
              <Icon size={36} weight="duotone" className="text-[#1F4E79]" />
              <h3 className={`${heading} mt-4 text-2xl font-semibold`}>
                {title}
              </h3>
              <p className="mt-2 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-[#1B2530] text-[#F2F1ED]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className={`${heading} text-4xl font-bold md:text-5xl`}>
            How we work
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s} className="border-t-4 border-[#F2B705] pt-4">
                <span className={`${heading} text-3xl font-bold`}>
                  {i + 1}
                </span>
                <p className="mt-2 leading-relaxed">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <h2 className={`${heading} text-4xl font-bold md:text-5xl`}>
            A local team you can visit and call
          </h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              WDC Company is a construction company based in Nepal. We use
              quality materials, follow safety rules on every site, and give
              you a written quote before any work begins.
            </p>
            <p>
              Replace this text with your real company story, years of
              experience and completed projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-[#1B2530]/15 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
          <div>
            <h2 className={`${heading} text-4xl font-bold md:text-5xl`}>
              Tell us about your project
            </h2>
            <p className="mt-4 max-w-md leading-relaxed">
              Send a message and we will reply within one working day.
            </p>
            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={22} /> +977-98XXXXXXXX
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeSimple size={22} /> info@wdccompany.com.np
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={22} /> Kathmandu, Nepal
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-[#1B2530] py-6 text-center text-sm text-[#F2F1ED]">
        © {new Date().getFullYear()} WDC Company. All rights reserved.
      </footer>
    </div>
  );
}
