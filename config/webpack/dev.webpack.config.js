const merge = require('webpack-merge');
const common = require('./base.webpack.config');
const resolve = require('path').resolve;
const forkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const helpers = require('./helpers');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watchOptions: {
        ignored: /node_modules/,
    },

    output: {
        path: helpers.resolveFromRootPath('dist'),
        filename: '[name].js',
        publicPath: '/',
    },

    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: './dist',
        inline: true,
        host: '0.0.0.0',
        port: 3002,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
        },
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]_[local]_[hash]',
                            },
                            localsConvention: 'camelCase',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader",
                    options: {
                        javascriptEnabled: true,
                        modifyVars: {
                            "@body-bg": "#2c2c2c",
                            "@text-color": "#ffffff",
                            "@text-primary": "#ffffff",
                            "@primary-bg-color": "#2c2c2c",
                            "@list-item-drag-bg-color": "#2c2c2c",
                            "@list-item-placeholder-bg-color": "#2c2c2c",
                            "@list-item-placeholder-border-color": "#2c2c2c",
                            "@steps-icon-process-bg": "#bc7bd4",
                            "@steps-default-color": "#ffffff",
                            "@steps-content-process-color": "#ffffff",
                            "@steps-icon-process-color": "#bc7bd4",
                            "@steps-icon-finish-color": "#bc7bd4"
                        }
                    }
                }]
            }
        ],
    },
    plugins: [
        new forkTsCheckerWebpackPlugin({
            tsconfig: '../tsconfig.json',
            async: false,
        }),
        new CleanTerminalPlugin(),
    ],
})
;
