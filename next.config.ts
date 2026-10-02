import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-dec09f4deacc4957bdfead7c6a91e46e.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;