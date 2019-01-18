const { mix } = require('laravel-mix');
require('laravel-mix-purgecss');
require('laravel-mix-tailwind');

mix.js('resources/js/bootstrap.js', 'public/js/plugins.js')
    .js('resources/js/app.js', 'public/js');

mix.sass('resources/sass/app.scss', 'public/css', {
        outputStyle: 'compressed',
        includePaths: [
            'node_modules/include-media/dist/',
            'node_modules/groundwork/src/sass/',
        ]
    })
    .options({
        processCssUrls: false,
        postCss: [
            require('css-mqpacker')(),
        ]
    })
    .tailwind();

if (!mix.inProduction()) {
    mix.sourceMaps();
} else {
    mix.purgeCss({
            enabled: true,

            globs: [
                path.join(__dirname, "resources/views/**/*.blade.php"),
                path.join(__dirname, "resources/assets/js/**/*.vue"),
            ],

            extensions: ['html', 'js', 'php', 'vue']
        })
        .version();
}
