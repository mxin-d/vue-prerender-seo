const path = require("path");
const PrerenderSpaPlugin = require("prerender-spa-plugin");
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false,
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        new PrerenderSpaPlugin({
          // 输出目录的绝对路径
          staticDir: path.join(__dirname, "dist"),
          // 预渲染的路由
          routes: ["/home"]
        })
      );
    }
  }
};
