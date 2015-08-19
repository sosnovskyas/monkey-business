var gulp = require('gulp');
var config = require('../config').devCssVendor;

var concat = require('gulp-concat');
var browserSync  = require('browser-sync');
var changed    = require('gulp-changed');

gulp.task('dev-css-vendor', function () {
    return gulp.src(config.src)
        .pipe(changed(config.dest)) // Ignore unchanged files
        .pipe(concat('lib.css'))
        .pipe(gulp.dest(config.dest))

        .pipe(browserSync.reload({stream:true}));
});
