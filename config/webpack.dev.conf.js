const merge = require('webpack-merge');
const commonWebpackConf = require('./webpack.common.conf');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const PATHS = require('./webpack.paths');

const PAGE_DIR = `${PATHS.src}/pages`;
const PAGES = fs.readdirSync(PAGE_DIR).filter(page => page.endsWith('.pug'));

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
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main-[hash:7].css'
        }),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGE_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/, '.html')}`
        })),
        //new CopyWebpackPlugin([
            //{ from: `${PATHS.public}/img`, to: `${PATHS.dist}/img` },
            //{ from: `${PATHS.public}/icons`, to: `${PATHS.dist}/icons` },
            //{ from: `${PATHS.public}/fonts`, to: `${PATHS.dist}/fonts` },
        //])
    ]

});