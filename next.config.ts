import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
        protocol: "https"
      }
    ]
  },

  turbopack: {},

  // Dev-only: ignore editor temp/backups and noisy files to prevent auto reloads when using webpack
  webpack: (config: any, { dev }: { dev: boolean }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
          "**/.git/**",
          "**/node_modules/**",
          "**/.vscode/**",
          "**/*.tmp",
          "**/*.swp",
          "**/globals copy.css"
        ]
      };
    }
    return config;
  }
};

export default nextConfig;
