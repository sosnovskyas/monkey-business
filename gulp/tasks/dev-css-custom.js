var gulp = require('gulp');
var config = require('../config').devCssCustom;

var sourcemaps = require('gulp-sourcemaps');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var browserSync  = require('browser-sync');

gulp.task('dev-css-custom', function () {
    return gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(scss())
        .pipe(autoprefixer())
        .pipe(concat(config.concatFile))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest))

        .pipe(browserSync.reload({stream:true}));
});
