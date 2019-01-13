var sassdoc = require('sassdoc');
var tailwindcss = require('tailwindcss');
const { mix } = require('laravel-mix');
require('laravel-mix-purgecss');


mix.sass('src/sass/groundwork.scss', 'dist/css', {
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

sassdoc('./src/sass', {
    display: {
        access: ['public'],
    },
    verbose: true,
    dest: './public',
});
