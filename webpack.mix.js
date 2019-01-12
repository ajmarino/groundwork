var sassdoc = require('sassdoc');
var tailwindcss = require('tailwindcss');
const { mix } = require('laravel-mix');
require('laravel-mix-purgecss');

// mix.js('resources/assets/js/bootstrap.js', 'public/js/plugins.js')
   // .js('resources/assets/js/app.js', 'public/js')
mix.sass('src/sass/groundwork.scss', 'dist/css', {
        outputStyle: 'compressed',
        includePaths: [
            'node_modules/include-media/dist/',
            'node_modules/normalize.css/'
        ]
    })
    .options({
        processCssUrls: false,
        postCss: [
            require('css-mqpacker')(),
            tailwindcss('./tailwind.js')
        ]
    });

sassdoc('./src/sass', {
    display: {
        access: ['public'],
    },
    verbose: true,
    dest: './public',
});
