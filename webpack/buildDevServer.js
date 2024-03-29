module.exports = function buildDevServer({mode}) {
    const isDev = mode === 'development'
    return isDev ? {
        port: 5000,
        open: true
    } : undefined
}