const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: "app.min.js",
    path: path.resolve(`${__dirname}/../build`)
  },
  plugins: [
    new UglifyJsPlugin({
      test: /(.js$|.jsx$)/i,
      sourceMap: true,
      parallel: true, // Using multi-core to compile the code
      exclude: /node_modules/i,
      extractComments: true, // Remove all the comments
    })
  ]
});