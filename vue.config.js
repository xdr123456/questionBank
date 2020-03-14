module.exports = {
    lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true
            }
        }
    }
}