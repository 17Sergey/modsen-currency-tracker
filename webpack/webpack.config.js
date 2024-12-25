/* eslint-disable */

import { merge } from "webpack-merge";

import commonConfig from "./webpack.common.js";
import developmentConfig from "./webpack.dev.js";
import productionConfig from "./webpack.prod.js";

let envConfig;

if (process.env.NODE_ENV === "production") {
    envConfig = productionConfig;
} else {
    envConfig = developmentConfig;
}

const config = merge(commonConfig, envConfig);
export default config;
