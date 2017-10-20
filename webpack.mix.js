var sassdoc = require('sassdoc');
const { mix } = require('laravel-mix');

// mix.js('resources/assets/js/bootstrap.js', 'public/js/plugins.js')
   // .js('resources/assets/js/app.js', 'public/js')
mix.sass('src/sass/groundwork.scss', 'dist/css', {
    outputStyle: 'compressed',
    includePaths: [
        'node_modules/include-media/dist/',
        'node_modules/normalize.css/'
    ]
});

sassdoc('./src/sass', {
    display: {
        access: ['public'],
    },
    verbose: true,
    dest: './dist/sassdocs',
});
