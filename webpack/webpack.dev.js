const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: "[name].dev.js",
        path: path.resolve(`${__dirname}/../build`),
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    }
});