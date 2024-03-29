const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function buildOptimization({mode}) {
    const isProd = mode === 'production'
    return isProd ? {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin(),
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true
              }
            }
          })
        ],
    } : undefined
}