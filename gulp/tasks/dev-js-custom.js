var gulp = require('gulp');
var config = require('../config').devJsCustom;

var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var browserSync  = require('browser-sync');

// developer JS
gulp.task('dev-js-custom', function () {
    // custom scripts
    gulp.src([config.src])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest(config.dest))

        .pipe(browserSync.reload({stream: true}));
});