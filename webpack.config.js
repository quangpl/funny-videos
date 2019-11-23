var webpack = require("webpack");

module.exports = {
  entry: "./client/src/index.js",
  output: {
    path: __dirname + "/public/build/",
    publicPath: "build/",
    filename: "bundle.js"
  },
};
