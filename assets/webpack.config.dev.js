var webpack = require("webpack");
var webpackBase = require("./webpack.config.base");

var cfg = Object.assign(webpackBase, {
    devtool: "cheap-module-eval-source-map",
});

module.exports = cfg;