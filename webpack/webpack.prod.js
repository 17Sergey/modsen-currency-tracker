/* eslint-disable */

import Dotenv from "dotenv-webpack";
import TerserPlugin from "terser-webpack-plugin";

import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { dirname, resolve } from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
    mode: "production",
    devtool: "source-map",
    entry: resolve(__dirname, "../src/index.tsx"),
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        plugins: [
            new TsconfigPathsPlugin({
                extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: "asset/inline",
            },
            {
                test: /\.svg$/i,
                type: "asset",
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
                use: ["@svgr/webpack"],
            },
        ],
    },
    output: {
        path: resolve(__dirname, "../dist"),
        filename: "bundle.js",
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new Dotenv({
            systemvars: true,
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "../src/index.html"),
        }),
        new CopyPlugin({
            patterns: [{ from: "public", to: "./public" }],
        }),
    ],
    stats: "errors-only",
};

export default config;
