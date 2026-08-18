/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Disabled to allow Server Actions (Email) to work
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
