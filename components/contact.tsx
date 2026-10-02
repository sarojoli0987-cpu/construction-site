import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";
import { company } from "@/data/company";
import ContactForm from "@/components/contact-form";

const heading = "font-[family-name:var(--font-barlow)]";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[#1B2530]/15 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
        {/* Left: details */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1F4E79]">
            Contact Us
          </p>
          <h2
            className={`${heading} mt-4 text-4xl font-bold leading-tight md:text-5xl`}
          >
            Let's Discuss Your Project.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-[#1B2530]/70">
            Send us a message and we will reply within one working day.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <Phone size={22} weight="duotone" className="mt-0.5 text-[#F2B705]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[#1B2530]/50">
                  Phone
                </p>
                <a
                  href={`tel:${company.phone}`}
                  className="text-lg font-medium transition-colors hover:text-[#1F4E79]"
                >
                  {company.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <EnvelopeSimple
                size={22}
                weight="duotone"
                className="mt-0.5 text-[#F2B705]"
              />
              <div>
                <p className="text-xs uppercase tracking-widest text-[#1B2530]/50">
                  Email
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-lg font-medium transition-colors hover:text-[#1F4E79]"
                >
                  {company.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin size={22} weight="duotone" className="mt-0.5 text-[#F2B705]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[#1B2530]/50">
                  Address
                </p>
                <p className="text-lg font-medium">{company.address}</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: form */}
        <div className="border border-[#1B2530]/15 bg-[#F2F1ED] p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}