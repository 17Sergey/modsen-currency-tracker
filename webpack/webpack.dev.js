const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    mode: "development",
    devServer: {
        hot: true,
        open: true,
    },
    // optimal size and speed. Source map helps us to debug with comparing lines and expressions of compiled code and source
    devtool: "cheap-module-source-map",
    plugins: [new ReactRefreshWebpackPlugin()],
};
