const {merge} = require("webpack-merge");
const common = require("./base.js");
const helpers = require('./helpers');

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        port: 3002,
        stats: "errors-only",
        host: '0.0.0.0',
    },
    output: {
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }, {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            javascriptEnabled: true,
                            modifyVars: {
                                '@enable-css-reset': false,
                                "@primary-color": "#bc7bd4",
                                "@body-bg": "#2c2c2c",
                                "@text-color": "#ffffff",
                                "@text-primary": "#ffffff",
                                "@primary-bg-color": "#2c2c2c",
                                '@base-color': "#bc7bd4",
                                '@B300': "#bc7bd4",
                                "@violet": "#bc7bd4",
                            },
                        }
                    },
                },
                ],
            },
        ],
    },
});
