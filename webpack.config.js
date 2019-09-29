const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: '[hash].min.js',
    path: path.resolve(`${__dirname}/dist/docs`),
  },
  optimization: {
      splitChunks: {
          chunks: 'all'
      }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: true,
      hash: true
    }),
  ],
  devServer: {
    port: 8080,
    compress: true,
  }
};