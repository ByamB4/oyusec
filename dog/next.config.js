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
    STATIC_ROOT: process.env.STATIC_ROOT,
    BACKEND_API_LOCAL_URL: process.env.BACKEND_API_LOCAL_URL,
  },
}

module.exports = nextConfig
