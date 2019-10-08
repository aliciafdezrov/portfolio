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
		publicPath: '/portfolio/'
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
								"@body-bg": "#2c2c2c",
								"@text-color": "#ffffff",
								"@text-primary": "#ffffff",
								"@primary-bg-color": "#2c2c2c",
								"@steps-icon-process-bg": "#bc7bd4",
								"@steps-default-color": "#ffffff",
								"@steps-content-process-color": "#ffffff",
								"@steps-icon-process-color": "#bc7bd4",
								"@steps-icon-finish-color": "#bc7bd4",
								"@steps-bg": "#2c2c2c"
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
