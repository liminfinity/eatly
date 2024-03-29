const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = function buildOptimization({mode}) {
    const isProd = mode === 'production'

    return isProd ? {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
    } : undefined
}