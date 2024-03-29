const buildDevServer = require("./buildDevServer")
const buildLoaders = require("./buildLoaders")
const buildOptimization = require("./buildOptimization")
const buildPlugins = require("./buildPlugins")

module.exports = function buildWebpack(options) {
    const {paths, mode} = options
    
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash:8].js',
            clean: true
        },
        optimization: buildOptimization(options),
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        devServer: buildDevServer(options)
    }
}