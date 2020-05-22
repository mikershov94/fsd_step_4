const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = require('./webpack.paths');

module.exports = {

    entry: {
        app: PATHS.src + '/index.js'
    },
    output: {
        filename: 'js/app-[hash:7].js',
        path: PATHS.dist
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    { loader: 'ts-loader' }
                ],
                exclude: /node_modules/
            },

            {
                test: /\.pug$/,
                use: [
                    { loader: 'pug-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: { path: __dirname }
                        }
                    }
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { 
                            sourceMap: true,
                            config: { path: __dirname }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'img/[name]-[hash:7].[ext]' }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'fonts/[name].[ext]' }
                    }
                ]
            }

        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
}