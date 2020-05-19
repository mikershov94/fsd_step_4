const merge = require('webpack-merge');
const commonWebpackConf = require('./webpack.common.conf');

module.exports = merge(commonWebpackConf, {

    mode: 'production',

    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }

})