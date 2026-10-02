// Project gallery entries.
//
// ── HOW TO EDIT ──────────────────────────────────────────────────────
// Replace these example entries with real projects when ready.
// Set `isPlaceholder: false` once you fill in real information.
// If `year` or `location` is empty, that field is simply not displayed.
//
// To use a real photo:
//   1. Drop the image into  public/images/projects/
//   2. Set `image: "/images/projects/your-file.jpg"`
// ─────────────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  category: "Building Construction" | "Road Infrastructure" | "Bridge & Civil Infrastructure" | "Government Project";
  description: string;
  image: string;
  location?: string;
  year?: string;
  isPlaceholder?: boolean;
};

export const projects: Project[] = [
  {
    title: "Residential Building Project",
    category: "Building Construction",
    description:
      "A multi-storey residential building delivered with attention to structural quality and finishing.",
    image: "/images/projects/project-01.jpg",
    location: "",
    year: "",
    isPlaceholder: true,
  },
  {
    title: "Road Infrastructure Project",
    category: "Road Infrastructure",
    description:
      "Road construction and grading work focused on durability and safe connectivity.",
    image: "/images/projects/project-02.jpg",
    location: "",
    year: "",
    isPlaceholder: true,
  },
  {
    title: "Bridge & Civil Works",
    category: "Bridge & Civil Infrastructure",
    description:
      "Civil infrastructure executed with a focus on safety, strength, and long-term performance.",
    image: "/images/projects/project-03.jpg",
    location: "",
    year: "",
    isPlaceholder: true,
  },
];