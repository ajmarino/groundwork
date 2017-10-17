var sassdoc = require('sassdoc');
const { mix } = require('laravel-mix');

// mix.js('resources/assets/js/bootstrap.js', 'public/js/plugins.js')
   // .js('resources/assets/js/app.js', 'public/js')
mix.sass('src/sass/groundwork.scss', 'dist/css', {
    includePaths: ['node_modules']
});

sassdoc('./src/sass', {
    verbose: true,
    dest: './dist/sassdocs'
});
