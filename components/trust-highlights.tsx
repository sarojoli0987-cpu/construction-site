import {
  ShieldCheck,
  Gear,
  ClipboardText,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";
import { company } from "@/data/company";

const heading = "font-[family-name:var(--font-barlow)]";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Quality Construction",
    text: "Built to last with attention to structural quality and finishing.",
  },
  {
    icon: Gear,
    title: "Reliable Execution",
    text: "Projects delivered responsibly from planning through completion.",
  },
  {
    icon: ClipboardText,
    title: "Professional Approach",
    text: "Clear planning, communication, and management on every project.",
  },
  {
    icon: TrendUp,
    title: "Long-Term Value",
    text: "Infrastructure designed to serve communities for years to come.",
  },
];

export default function TrustHighlights() {
  return (
    <section
      id="highlights"
      className="border-b border-[#1B2530]/15 bg-[#F2F1ED]"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-16">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#1F4E79]">
          {company.experienceLine} · Since {company.foundedBS}
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col">
              <Icon size={28} weight="duotone" className="text-[#F2B705]" />
              <h3 className={`${heading} mt-4 text-xl font-semibold`}>{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-[#1B2530]/70">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}