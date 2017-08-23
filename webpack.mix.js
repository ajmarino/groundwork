var sassdoc = require('sassdoc');
const { mix } = require('laravel-mix');

// mix.js('resources/assets/js/bootstrap.js', 'public/js/plugins.js')
   // .js('resources/assets/js/app.js', 'public/js')
mix.sass('resources/assets/sass/groundwork.scss', 'dist/css', {
        includePaths: ['node_modules']
    });

sassdoc('./resources/assets/sass', {
    verbose: true,
    dest: './public/sassdocs'
});
