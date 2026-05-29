import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb", // Raises for the photo upload in the contact form
    },
  },
};

export default nextConfig;
