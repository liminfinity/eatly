const path = require('path');
const buildWebpack = require('./webpack/buildWebpack');


module.exports = env => {
    const paths = {
        entry: path.resolve('src', 'index.js'),
        output: path.resolve('build'),
        html: path.resolve('public', 'index.html'),
        public: path.resolve('public')
    }

    const config = buildWebpack({
        mode: env.mode ?? 'development',
        paths
    })
    return config
}
