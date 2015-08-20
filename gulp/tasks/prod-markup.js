var gulp = require('gulp');
var config = require('../config').prodMarkup;
var jade = require('gulp-jade');

gulp.task('prod-markup', function () {
    var YOUR_LOCALS = {};
    gulp.src(config.src)
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        .on('error', console.log)
        .pipe(gulp.dest(config.dest))
    ;
});
