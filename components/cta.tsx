import { Phone, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { company } from "@/data/company";
import { Button } from "@/components/ui/button";

const heading = "font-[family-name:var(--font-barlow)]";

export default function CTA() {
  return (
    <section className="bg-[#1F4E79] text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className={`${heading} text-4xl font-bold leading-tight md:text-5xl`}>
              Let's Build Something That Lasts.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Have a construction or infrastructure project in mind? Get in touch
              with {company.legalName}.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact" className="gap-2">
                Contact Us <ArrowRight size={18} weight="bold" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`tel:${company.phone}`} className="gap-2">
                <Phone size={18} weight="bold" /> Call {company.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
