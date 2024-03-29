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
    entry: {
        fsdSlider: PATHS.src + '/index.ts',
        app: PATHS.src + '/page-script.ts',
    },
    output: {
        filename: 'js/[name]-[hash:7].js',
        path: PATHS.dist
    },

    mode: 'development',

    devtool: 'inline-cheap-module-source-map',

    stats: 'errors-only',

    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, '../'),
        },
        client: {
            overlay: true,
        },
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
            filename: 'main-[hash:7].css'
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