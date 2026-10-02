import { steps } from "@/data/steps";

const heading = "font-[family-name:var(--font-barlow)]";

export default function HowWeWork() {
  return (
    <section id="process" className="bg-[#1B2530] text-[#F2F1ED]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F2B705] md:text-sm">
            How We Work
          </p>
          <h2
            className={`${heading} mt-4 text-4xl font-bold leading-tight md:text-5xl`}
          >
            A Clear Process. A Reliable Result.
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              {i < steps.length - 1 && (
                <div
                  className="absolute left-full top-4 hidden h-px w-full bg-[#F2F1ED]/15 md:block"
                  aria-hidden="true"
                />
              )}

              <div className="relative inline-flex h-9 items-center rounded-full bg-[#F2B705] px-4">
                <span className={`${heading} text-sm font-bold text-[#1B2530]`}>
                  {step.number}
                </span>
              </div>

              <h3
                className={`${heading} mt-6 text-xl font-semibold leading-snug md:text-2xl`}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#F2F1ED]/70 md:text-base">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}