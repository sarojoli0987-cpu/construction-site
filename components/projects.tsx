"use client";

import { useState, useEffect } from "react";

interface Project {
  _id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        }
      } catch (error) {
        console.error("Failed to fetch projects", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="bg-[#F2F1ED] py-24 text-[#1E293B]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-16">
          <p className="mb-2 text-sm font-bold tracking-widest text-[#EAB308] uppercase">
            Our Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-gray-500">No projects added yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project._id} className="group relative overflow-hidden bg-white shadow-sm border border-gray-100">
                <div className="h-64 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs font-bold tracking-wider text-[#EAB308] uppercase">
                    {project.category}
                  </p>
                  <h3 className="mb-2 text-xl font-bold text-[#0F172A]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}