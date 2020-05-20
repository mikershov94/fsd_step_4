const merge = require('webpack-merge');
const commonWebpackConf = require('./webpack.common.conf');
const path = require('path');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    test: path.join(__dirname, '../tests'),
    testDist: path.join(__dirname, '../tests-dist'),
    public: path.join(__dirname, './public')
};

module.exports = merge(commonWebpackConf, {

    mode: 'development',

    entry: {
        app: PATHS.test + '/index.test.js'
    },
    output: {
        filename: 'app-test.js',
        path: PATHS.testDist
    },

    devtool: 'source-map'



})