/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.rawg.io",
      },
    ],
  },
}

module.exports = nextConfig
