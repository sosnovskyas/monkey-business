var gulp = require('gulp');
var config = require('../config').prodCss;

var sourcemaps = require('gulp-sourcemaps');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var browserSync  = require('browser-sync');


gulp.task('prod-css',function(){
    gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(scss())
        .pipe(autoprefixer())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest));

    gulp.src([
        // bootstrap
        'bower/bootstrap/dist/css/bootstrap.css',
        'bower/bootstrap/dist/css/bootstrap-theme.css',
        //for ng-cloak working
        'bower/angular/angular-csp.css'
    ])
        .pipe(concat('lib.css'))
        .pipe(gulp.dest(config.dest))

        .pipe(browserSync.reload({stream:true}))
});
