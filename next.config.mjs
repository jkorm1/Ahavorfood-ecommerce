/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 'standalone' is for Vercel. Cloudflare uses OpenNext which handles its own output.
  // We only apply it when NOT building for Cloudflare.
  ...(process.env.BUILD_TARGET !== "cloudflare" && {
    output: "standalone",
  }),
};

export default nextConfig;