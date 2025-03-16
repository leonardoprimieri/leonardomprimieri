import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // configs
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
      },
      {
        hostname: "media.licdn.com",
      },
    ],
  },
};

export default nextConfig;
