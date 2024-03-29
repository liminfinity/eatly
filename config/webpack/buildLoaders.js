const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function buildLoaders({mode}) {
    
    const isProd = mode === 'production';

    const cssLoader = {
        test: /\.css$/i,
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
    }
    return [
        cssLoader
    ]
}