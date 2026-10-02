import { HardHat, Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";

const heading = "font-[family-name:var(--font-barlow)]";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1B2530] text-[#F2F1ED]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <HardHat size={28} weight="fill" className="text-[#F2B705]" />
            <span className={`${heading} text-xl font-bold tracking-wide`}>
              {company.shortName}
            </span>
          </div>
          <p className={`${heading} mt-4 text-lg font-semibold leading-snug`}>
            {company.tagline}
          </p>
          <p className="mt-3 text-sm text-[#F2F1ED]/70">
            {company.legalName}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#F2B705]">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[#F2F1ED]/80 transition-colors hover:text-[#F2B705]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#F2B705]">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} />
              <a href={`tel:${company.phone}`} className="hover:text-[#F2B705]">
                {company.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <EnvelopeSimple size={18} />
              <a href={`mailto:${company.email}`} className="hover:text-[#F2B705]">
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#F2F1ED]/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-[#F2F1ED]/60">
          © {year} {company.legalName} All rights reserved.
        </p>
      </div>
    </footer>
  );
}