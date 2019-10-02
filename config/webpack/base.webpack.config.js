const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const basePath = __dirname;
const helpers = require('./helpers');

module.exports = {
  context: helpers.resolveFromRootPath('src'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    alias: {
      typings: path.resolve(__dirname, '../../src/typings/'),
      pods: path.resolve(__dirname, '../../src/pods/'),
      components: path.resolve(__dirname, '../../src/components/'),
      common: path.resolve(__dirname, '../../src/common/'),
      styles: path.resolve(__dirname, '../../src/scss/'),
      actions: path.resolve(__dirname, '../../src/actions/'),
      scenes: path.resolve(__dirname, '../../src/scenes/'),
    },
  },
  target: 'web',
  node: {
    fs: 'empty',
    net: 'empty',
  },
  entry: {
    styles: './scss/index.scss',
    app: [
      '../index.tsx',
    ],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(png|jpg|ico|gif)?$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.mp4$|\.wav$|\.mp3$|\.pdf$/,
        use: 'file-loader?name=[name].[ext]'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true,
    }),
  ],
};
