module.exports = {
  images: {},
  traillingSlash: true,
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
