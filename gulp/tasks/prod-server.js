var gulp = require('gulp');
var config = require('../config').prodServer;

var webserver = require('gulp-webserver');

gulp.task('prod-server', function () {
    gulp.src(config.dest)
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 9000
        }))
    ;
});
