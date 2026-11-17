"use client";

import { useState, useEffect } from "react";

export default function AddProjectPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Building Construction",
    imageUrl: "",
  });
  const [status, setStatus] = useState("");
  const [projects, setProjects] = useState<any[]>([]);

  // 1. Fetch projects from the database
  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    if (res.ok) {
      const data = await res.json();
      setProjects(data);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // 2. Handle adding a new project
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Saving...");

    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Project added successfully!");
      setFormData({ title: "", description: "", category: "Building Construction", imageUrl: "" });
      fetchProjects(); 
    } else {
      setStatus("Failed to add project.");
    }
  };

  // 3. Handle deleting a project
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    const res = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      fetchProjects(); 
    } else {
      alert("Failed to delete project.");
    }
  };

  return (
    <div className="max-w-4xl space-y-8">
      {/* FORM SECTION */}
      <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Add New Project</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Project Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 w-full border border-gray-300 p-2 rounded focus:border-[#EAB308] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="mt-1 w-full border border-gray-300 p-2 rounded focus:border-[#EAB308] focus:outline-none"
            >
              <option>Building Construction</option>
              <option>Road & Transportation</option>
              <option>Bridge & Civil</option>
              <option>Government Projects</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="mt-1 w-full border border-gray-300 p-2 rounded focus:border-[#EAB308] focus:outline-none"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 w-full border border-gray-300 p-2 rounded focus:border-[#EAB308] focus:outline-none"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#0F172A] text-white px-6 py-2 rounded font-semibold hover:bg-slate-800 transition-colors"
          >
            Save Project
          </button>
        </form>

        {status && <p className="mt-4 font-medium text-green-600">{status}</p>}
      </div>

      {/* LIST SECTION */}
      <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Existing Projects</h2>
        
        {projects.length === 0 ? (
          <p className="text-gray-500">No projects found. Add one above!</p>
        ) : (
          <div className="space-y-4">
            {projects.map((project: any) => (
              <div key={project._id} className="flex items-center justify-between p-4 border border-gray-100 rounded bg-gray-50">
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.category}</p>
                  </div>
                </div>
                
                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(project._id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1 rounded text-sm font-medium transition-colors"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}