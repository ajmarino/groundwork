var tailwindcss = require('tailwindcss');
const { mix } = require('laravel-mix');
require('laravel-mix-purgecss');

mix.js('resources/js/bootstrap.js', 'public/js/plugins.js')
    .js('resources/js/app.js', 'public/js');

mix.sass('resources/sass/app.scss', 'public/css', {
        outputStyle: 'compressed',
        includePaths: [
            'node_modules/include-media/dist/',
        ]
    })
    .options({
        processCssUrls: false,
        postCss: [
            require('css-mqpacker')(),
            tailwindcss('./tailwind.js')
        ]
    });

if (!mix.inProduction()) {
    mix.sourceMaps();
}
