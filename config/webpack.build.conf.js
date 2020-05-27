const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonWebpackConf = require('./webpack.common.conf');
const PATHS = require('./webpack.paths');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const PAGE_DIR = `${PATHS.src}/pages`;
const PAGES = fs.readdirSync(PAGE_DIR).filter(page => page.endsWith('.pug'));

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
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGE_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/, '.html')}`
        })),
        new MiniCssExtractPlugin({
            filename: 'css/main-[hash:7].css'
        }),
        //new CopyWebpackPlugin([
            //{ from: `${PATHS.public}/img`, to: `${PATHS.dist}/img` },
            //{ from: `${PATHS.public}/icons`, to: `${PATHS.dist}/icons` },
            //{ from: `${PATHS.public}/fonts`, to: `${PATHS.dist}/fonts` },
        //])
    ]

})