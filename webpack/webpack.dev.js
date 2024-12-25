/* eslint-disable */

import Dotenv from "dotenv-webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

const config = {
    mode: "development",
    devServer: {
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    devtool: "cheap-module-source-map",
    plugins: [new ReactRefreshWebpackPlugin(), new Dotenv()],
};

export default config;
