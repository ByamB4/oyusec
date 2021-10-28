module.exports = {
  traillingSlash: true,
  swcMinify: true,
  future: {
    poweredByHeader: false,
    reactStrictMode: true,
    strictPostcssConfiguration: true,
  },
  images: {
    domains: ["placeimg.com"],
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       fs: false,
  //     };
  //   }

  //   return config;
  // },
  env: {
    STATIC_ROOT: process.env.STATIC_ROOT,
  },
};
