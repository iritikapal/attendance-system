import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",           // when frontend calls /api/...
        destination: "http://localhost:5000/:path*", // redirect to backend
      },
    ];
  },
};

export default nextConfig;
