var gulp = require('gulp');
var config = require('../config').prodCssCustom;

var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('prod-css-custom', function () {
    gulp.src(config.src)
        .pipe(scss())
        .pipe(autoprefixer())
        .pipe(concat(config.concatFile))
        .pipe(gulp.dest(config.dest))
    ;
});
