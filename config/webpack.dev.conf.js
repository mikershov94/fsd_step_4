const merge = require('webpack-merge');
const commonWebpackConf = require('./webpack.common.conf');
const path = require('path');

module.exports = merge(commonWebpackConf, {

    mode: 'development',

    devtool: 'inline-cheap-module-source-map',

    devServer: {
        contentBase: path.join(__dirname, '../'),
        open: true,
        overlay: true,
        stats: 'errors-only',
        port: 3000
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }

});