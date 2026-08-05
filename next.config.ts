import type { NextConfig } from "next";

const repoBasePath = process.env.GITHUB_ACTIONS ? "/sunavigation-modern" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: repoBasePath ? `${repoBasePath}/` : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
