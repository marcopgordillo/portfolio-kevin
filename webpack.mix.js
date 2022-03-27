const mix = require('laravel-mix')
const LiveReloadPlugin = require('webpack-livereload-plugin');

mix.sass('src/style.scss', 'assets')
    .options({
        processCssUrls: false,
    })
    .webpackConfig({
        plugins: [new LiveReloadPlugin()]
    })
