import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // 👈 'https' likhna zaroori hai
        hostname: "images.unsplash.com", // 👈 Domain sirf hostname mein aayega
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
