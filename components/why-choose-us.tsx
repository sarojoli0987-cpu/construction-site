import {
  Medal,
  Gear,
  ShieldCheck,
  ClipboardText,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";

const heading = "font-[family-name:var(--font-barlow)]";

const reasons = [
  {
    icon: Medal,
    title: "Quality Focus",
    text: "Attention to detail in materials, workmanship, and finishing on every project.",
  },
  {
    icon: Gear,
    title: "Reliable Execution",
    text: "Projects delivered with responsibility and a focus on timely completion.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Responsibility",
    text: "Safe practices and responsible management on every site we operate.",
  },
  {
    icon: ClipboardText,
    title: "Professional Project Management",
    text: "Clear planning, monitoring, and communication from start to completion.",
  },
  {
    icon: TrendUp,
    title: "Long-Term Value",
    text: "Infrastructure built to perform for years and serve communities reliably.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="border-y border-[#1B2530]/15 bg-[#F2F1ED]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1F4E79]">
            Why Choose Us
          </p>
          <h2 className={`${heading} mt-4 text-4xl font-bold leading-tight md:text-5xl`}>
            Built Around Quality and Responsibility.
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-[#1B2530]/20 bg-[#1B2530]/20 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-[#F2F1ED] p-6">
              <Icon size={26} weight="duotone" className="text-[#1F4E79]" />
              <h3 className={`${heading} mt-5 text-lg font-semibold leading-snug`}>
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1B2530]/70">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
