// Github page
module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
};

// Development
// module.exports = {
//   productionSourceMap: false,
//   publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
// };
