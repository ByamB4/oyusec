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
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  env: {
    PUBLIC_BACKEND_API_URL: process.env.PUBLIC_BACKEND_API_URL,
    STATIC_ROOT: process.env.STATIC_ROOT,
  },
};
