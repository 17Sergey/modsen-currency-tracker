const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const envConfig = require(`./webpack.${process.env.NODE_ENV}.js`);

const config = merge(commonConfig, envConfig);
module.exports = config;
