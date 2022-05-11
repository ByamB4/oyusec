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
// module.exports = {
//   reactStrictMode: true,
//   traillingSlash: true,
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   experimental: {
//     outputStandalone: true,
//   },

//   // swcMinify: true,
//   // images: {
//   //   domains: ["placeimg.com"],
//   // },
//   // webpack: (config, { isServer }) => {
//   //   if (!isServer) {
//   //     config.resolve.fallback = {
//   //       fs: false,
//   //     };
//   //   }

//   //   return config;
//   // },
//   // parserOptions: {
//   //   project: "tsconfig.json",
//   //   tsconfigRootDir: __dirname,
//   //   sourceType: "module",
//   // },
//   env: {
//     PUBLIC_BACKEND_API_URL: process.env.PUBLIC_BACKEND_API_URL,
//     STATIC_ROOT: process.env.STATIC_ROOT,
//   },
// };
