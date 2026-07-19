import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 for the dense text-heavy project screenshots; 75 stays the default
    qualities: [75, 90],
  },
};

export default nextConfig;
