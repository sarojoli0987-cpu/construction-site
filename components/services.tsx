import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { services } from "@/data/services";

const heading = "font-[family-name:var(--font-barlow)]";

export default function Services() {
  return (
    <section id="services" className="border-y border-[#1B2530]/15 bg-[#F2F1ED]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        {/* Heading block */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1F4E79]">
            Our Services
          </p>
          <h2
            className={`${heading} mt-4 text-4xl font-bold leading-tight md:text-5xl`}
          >
            Construction Solutions Built Around Your Needs.
          </h2>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid gap-px overflow-hidden border border-[#1B2530]/20 bg-[#1B2530]/20 sm:grid-cols-2">
          {services.map(({ number, icon: Icon, title, description }) => (
            <a
              key={title}
              href="#contact"
              className="group relative flex flex-col justify-between overflow-hidden bg-[#F2F1ED] p-8 transition-colors duration-300 hover:bg-white md:p-10"
            >
              {/* Gold accent bar — slides in from left on hover */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 -translate-x-full bg-[#F2B705] transition-transform duration-300 group-hover:translate-x-0"
              />

              <div>
                <div className="flex items-start justify-between">
                  <span
                    className={`${heading} text-2xl font-bold text-[#1B2530]/30 transition-colors duration-300 group-hover:text-[#F2B705]`}
                  >
                    {number}
                  </span>
                  <Icon
                    size={32}
                    weight="duotone"
                    className="text-[#1F4E79] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-[#F2B705]"
                  />
                </div>

                <h3
                  className={`${heading} mt-8 text-2xl font-semibold leading-snug transition-transform duration-300 group-hover:translate-x-1 md:text-3xl`}
                >
                  {title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#1B2530]/70 md:text-lg">
                  {description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#1F4E79] transition-all duration-300 group-hover:gap-3 group-hover:text-[#F2B705]">
                Learn more{" "}
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}