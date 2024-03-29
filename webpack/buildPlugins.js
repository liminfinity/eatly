const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = function buildPlugins({mode, paths}) {

    const isProd = mode === 'production';

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(paths.public, 'svg'),
                    to: path.resolve(paths.output, 'svg')
                }
            ]
        })
    ]

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[id].[contenthash:8].css'
        }))
    }

    return plugins
}