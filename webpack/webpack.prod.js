/* eslint-disable */

import Dotenv from "dotenv-webpack";
import TerserPlugin from "terser-webpack-plugin";

const config = {
    mode: "production",
    devtool: "source-map",
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new Dotenv({
            systemvars: true,
        }),
    ],
};

export default config;
