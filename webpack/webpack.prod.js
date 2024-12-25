/* eslint-disable */

import Dotenv from "dotenv-webpack";

const config = {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new Dotenv({
            systemvars: true,
        }),
    ],
};

export default config;
