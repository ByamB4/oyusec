module.exports = {
  traillingSlash: true,
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
