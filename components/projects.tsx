import { MapPin, Calendar } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/data/projects";

const heading = "font-[family-name:var(--font-barlow)]";

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1F4E79]">
              Our Projects
            </p>
            <h2
              className={`${heading} mt-4 text-4xl font-bold leading-tight md:text-5xl`}
            >
              Work That Speaks for Itself.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-[#1B2530]/70 md:text-lg">
               Selected construction and infrastructure work delivered by our team.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden border border-[#1B2530]/15 bg-[#F2F1ED] transition-colors hover:border-[#1F4E79]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#DAD7CE]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                  aria-hidden="true"
                />
                {project.isPlaceholder && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1B2530]/60">
                    <span className="rounded-full border border-white/30 bg-black/30 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/90 backdrop-blur-sm">
                      Project Photo Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#1F4E79]">
                  {project.category}
                </p>
                <h3
                  className={`${heading} mt-2 text-2xl font-semibold leading-snug`}
                >
                  {project.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#1B2530]/70">
                  {project.description}
                </p>

                {/* Meta */}
                {(project.location || project.year) && (
                  <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-[#1B2530]/10 pt-4 text-xs text-[#1B2530]/60">
                    {project.location && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} /> {project.location}
                      </span>
                    )}
                    {project.year && (
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={14} /> {project.year}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="mt-10 text-center text-base text-[#1B2530]/50 md:text-lg">
              More projects will be added as they are completed.
        </p>
      </div>
    </section>
  );
}