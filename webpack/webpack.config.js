/* eslint-disable */

import { merge } from "webpack-merge";
import commonConfig from "./webpack.common.js";

const envConfig = import(`./webpack.${process.env.NODE_ENV}.js`);

const config = merge(commonConfig, envConfig);
export default config;
