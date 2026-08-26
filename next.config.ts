import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // basePath: "/gsap-animation-sample",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
