import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { company } from "@/data/company";
import { images } from "@/data/images";

const heading = "font-[family-name:var(--font-barlow)]";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div>
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden bg-[#E5E3DD]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: `url('${images.about.main}')` }}
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 h-1 w-24 bg-[#F2B705]" />
          </div>
          <p className="mt-4 text-sm text-[#1B2530]/60">
            Founder — {company.legalName}
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1F4E79]">
            About Us
          </p>
          <h2 className={`${heading} mt-4 text-4xl font-bold leading-tight md:text-5xl`}>
            Building Infrastructure That Lasts.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#1B2530]/80 md:text-lg">
            {company.about}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-[#1B2530]/15 pt-8">
            <div>
              <p className={`${heading} text-3xl font-bold text-[#1F4E79]`}>
                {company.foundedBS}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-[#1B2530]/60">
                Established
              </p>
            </div>
            <div>
              <p className={`${heading} text-3xl font-bold text-[#1F4E79]`}>
                {company.addressShort}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-[#1B2530]/60">
                Based In
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1F4E79] transition-colors hover:text-[#F2B705]"
          >
            Start a conversation <ArrowRight size={16} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}