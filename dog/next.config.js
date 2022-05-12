/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    outputStandalone: true,
  },
  trailingSlash: true,
  env: {
    PUBLIC_BACKEND_API_URL: process.env.PUBLIC_BACKEND_API_URL,
    STATIC_ROOT: process.env.STATIC_ROOT,
  },
}

module.exports = nextConfig