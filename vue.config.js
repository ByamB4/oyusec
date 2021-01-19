// Github page
module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === "production" ? "/oyusec/" : "/",
};

// Development
// module.exports = {
//   productionSourceMap: false,
//   publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
// };
