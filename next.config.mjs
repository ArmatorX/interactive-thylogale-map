/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/docs",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
