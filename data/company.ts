// Centralized company information.
// Update this file to change company details across the entire website.

export const company = {
  name: "Western Development Construction Pvt. Ltd.",
  shortName: "WDC",
  legalName: "Western Development Construction Pvt. Ltd.",
  tagline: "Built with Trust. Delivered with Excellence.",

  // Contact
  phone: "9857823540",
  phoneDisplay: "+977 9857823540",
  email: "wdc2074@gmail.com",
  address: "Kathmandu, Nepal",
  addressShort: "Kathmandu, Nepal",

  // Trust line
  // Shows in Trust / Highlights section and footer.
  experienceLine: "Nearly a decade of experience",
  foundedBS: "2074 B.S.",
  serviceArea: "Kathmandu, Nepal",

  // About
  about: "Western Development Construction Pvt. Ltd. is a construction company committed to delivering reliable, durable, and quality infrastructure solutions. We undertake building, road, bridge, civil infrastructure, and government contract projects with a focus on responsible execution and timely completion. Our goal is to contribute to sustainable development by building infrastructure that serves communities for years to come.",

  // SEO
  meta: {
    title:
      "Western Development Construction Pvt. Ltd. | Construction & Infrastructure",
    description:
      "Western Development Construction Pvt. Ltd. provides reliable construction and infrastructure solutions including building, road, bridge, civil, and government contract projects in Nepal.",
    url: "https://wdccompany.com.np",
  },
} as const;

export type Company = typeof company;
