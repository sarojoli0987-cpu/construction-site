import { ArrowRight, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { company } from "@/data/company";
import { images } from "@/data/images";
import { Button } from "@/components/ui/button";

const heading = "font-[family-name:var(--font-barlow)]";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-[#1B2530]/15 bg-[#1B2530]"
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${images.hero.main}')`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0F1720]/90 via-[#0F1720]/70 to-[#0F1720]/40"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2B705] md:text-sm">
          {company.legalName}
        </p>

        <h1
          className={`${heading} mt-5 max-w-4xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl`}
        >
          Built with Trust.
          <br />
          Delivered with Excellence.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          Reliable construction and infrastructure solutions built with quality,
          responsibility, and long-term value.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <a href="#contact" className="gap-2">
              Get in Touch <ArrowRight size={18} weight="bold" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
          >
            <a href="#services">Explore Our Services</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#highlights"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/60 transition-colors hover:text-white md:block"
      >
        <ArrowDown size={22} weight="bold" />
      </a>
    </section>
  );
}