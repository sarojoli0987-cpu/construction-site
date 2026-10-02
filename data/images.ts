// All image paths in one place.
// Images are hosted on Cloudflare R2.

const R2 = "https://pub-dec09f4deacc4957bdfead7c6a91e46e.r2.dev";

export const images = {
  logo: {
    mark: `${R2}/logo.jpeg`,
  },
  hero: {
    main: "", // Add when you have a hero photo — e.g. `${R2}/hero.jpg`
  },
  about: {
    main: `${R2}/founder.jpeg`,
  },
  services: {
    building: "",
    road: "",
    bridge: "",
    government: "",
  },
} as const;

export type Images = typeof images;