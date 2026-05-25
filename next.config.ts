import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d3benx6w5yjcsf.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hblimg.mmtcdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;