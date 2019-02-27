let path = require('path');
let webpack = require("webpack");
let HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let CleanWebpackPlugin = require('clean-webpack-plugin');
const resolve = require('path').resolve;
let basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    mode: 'development',

    target: "web",

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    node: {
        fs: "empty",
        net: "empty"
    },
    entry: {
        styles: './scss/index.scss',
        app: [
            '../index.tsx'
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css'
        ]
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js',
        publicPath: '/'
    },

    watchOptions: {
        ignored: /node_modules/
    },

    devServer: {
        stats: {
            hash: false,
            version: false,
            timings: true,
            assets: true,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: true,
            warnings: true,
            publicPath: true
        },
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: './dist',
        inline: true,
        host: '0.0.0.0',
        port: 3002,
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*"
        }
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader'
                }]
            },
            {
                test: /\.(html)$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: {
                                safe: true
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {}
                    }
                ]
            },
            {
                test: /\.(less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: "url-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.svg$|\.woff$|\.ttf$|\.mp4$|\.wav$|\.mp3$|\.pdf$/,
                use: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    plugins: [
/*        new CleanWebpackPlugin(['./dist'], {
            //root: basePath,
            verbose: true,   // Write logs to console
            dry: false,     // Use boolean "true" to test/emulate delete. (will not remove files).
            // (Default: "false", remove files)
            watch: true     // If true, remove files on recompile. (Default: false)
            //exclude: ['RunExpress.js']
        }),*/

        //new FaviconsWebpackPlugin('../favicon.ico'),

        new MiniCssExtractPlugin({
            // Options similar to the same lineChartOptions in webpackOptions.output
            // both lineChartOptions are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: 'index.html', //Name of template in ./src
            hash: false
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        //new FaviconsWebpackPlugin('../favicon.ico'),
        /*        new SWPrecacheWebpackPlugin(
                    {
                        cacheId: 'my-domain-cache-id',
                        dontCacheBustUrlsMatching: /\.\w{8}\./,
                        filename: 'service-worker.js',
                        minify: true,
                        navigateFallback: 'index.html',
                        staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
                    }
                ),*/
        /*        new WebpackPwaManifest({
                    name: 'Asclepios',
                    short_name: 'Asclepios',
                    description: 'Asclepios frontend project',
                    display: "standalone",
                    background_color: '#63acb2',
                    theme_color: '#63acb2',
                    'theme-color': '#63acb2',
                    start_url: '/',
                    icons: [
                        {
                            src: path.resolve('favicon.ico'),
                            sizes: [96, 128, 192, 256, 384, 512],
                            destination: path.join('assets', 'icons')
                        }
                    ]
                })*/
    ]
};