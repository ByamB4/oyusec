module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
};
