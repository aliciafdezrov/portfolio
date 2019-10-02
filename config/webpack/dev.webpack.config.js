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
        }]
      }
    ],
  },
  plugins: [
    new forkTsCheckerWebpackPlugin({
      tsconfig: '../tsconfig.json',
      async: false,
    }),
  ],
});
