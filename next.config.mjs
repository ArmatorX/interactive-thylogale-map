/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/interactive-thylogale-map",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
