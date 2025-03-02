import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: false, // Set to true if you want to ignore ESLint errors during production builds
  },
  images: {
    domains: ["res.cloudinary.com"], // Allow Cloudinary images
  },
};

export default nextConfig;
