const webpack = require('webpack')
const merge = require('webpack-merge');
const commonWebpackConf = require('./webpack.common.conf');
const path = require('path');

const { CleanWebpackPlugin }= require('clean-webpack-plugin');


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
        app: PATHS.test + '/index.test.ts'
    },
    output: {
        filename: 'app-test.js',
        path: PATHS.testDist
    },

    devtool: 'source-map',

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ]



})