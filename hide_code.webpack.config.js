const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    background: "./src/background/background.js",
    content: "./src/content.js",
    login: "./src/popup/popup.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.js?/,
  //       // include: "src",
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ["es2015"],
  //         },
  //       },
  //     },
  //   ],
  // },
  // devtool: 'cheap-module-source-map',
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public", to: "" }],
    }),
  ],
};
