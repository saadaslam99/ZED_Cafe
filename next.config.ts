import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Set output file tracing root to this local project folder
  outputFileTracingRoot: path.resolve(__dirname),

  // Configure webpack to prioritize local node_modules
  webpack: (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, "node_modules"),
      "node_modules"
    ];
    return config;
  }
};

export default nextConfig;
