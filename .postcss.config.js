module.exports = {
    "modules": true,
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
    ]
}