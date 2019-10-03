const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./base.webpack.config');
const resolve = require('path').resolve;
const CompressionPlugin = require('compression-webpack-plugin');
const helpers = require('./helpers');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'cheap-source-map',
	output: {
		path: helpers.resolveFromRootPath('dist'),
		filename: '[hash].[name].js',
		publicPath: '/signin-user'
	},

	performance: {
		hints: false,
	},
	optimization: {
		minimize: true,
		//https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name(module) {
						// get the name. E.g. node_modules/packageName/not/this/part.js
						// or node_modules/packageName
						const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

						// npm package names are URL-safe, but some servers don't like @ symbols
						return `${packageName.replace('@', '')}`;
					},
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
		},
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
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
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(less)$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "less-loader",
						options: {
							javascriptEnabled: true,
							modifyVars: {
								"body-bg": "#EEEFF4",
								"H050": "#fff2f2",
								"H100": "#fccfcf",
								"H200": "#faa9a7",
								"H300": "#fa8682",
								"H400": "#f7635c",
								"H500": "#f44336",
								"H600": "#eb3626",
								"H700": "#d62915",
								"H800": "#b81c07",
								"H900": "#8f1300",
								"B050": "#f0fbff",
								"B200": "#b0c8d1",
								"B300": "#93aeba",
								"B400": "#7996a3",
								"B600": "#48738a"
							}
						}
					}
				],
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[chunkhash].css',
			chunkFilename: '[id].css',
		}),
		new webpack.optimize.ModuleConcatenationPlugin(),

		new webpack.HashedModuleIdsPlugin(),
		new CompressionPlugin({
			filename: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.jsx$|\.ts$|\.tsx$|\.scss$|\.css$|\.html$/,
			threshold: 1024,
			minRatio: 0.8,
		}),
	],
});
