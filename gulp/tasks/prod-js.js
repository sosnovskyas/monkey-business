var gulp = require('gulp');
var config = require('../config').prodJs;

var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var obfuscate = require('gulp-obfuscate');
var browserSync  = require('browser-sync');

gulp.task('prod-js', function () {
    // vendor libtrarys
    gulp.src([
        'bower/jquery/dist/jquery.js',
        'bower/angular/angular.js',
        'bower/firebase/firebase.js',
        'bower/angularfire/dist/angularfire.js',
        'bower/angular-ui-router/release/angular-ui-router.js',
        'bower/angular-roure/angular-roure.js',
        'bower/bootstrap/dist/js/bootstrap.js'
    ])
        .pipe(concat('lib.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        // .pipe(obfuscate())  // обфускация
        .pipe(gulp.dest(config.dest));

    // custom scripts
    gulp.src(['src/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(obfuscate({replaceMethod: obfuscate.ZALGO})) // обфускация
        .pipe(gulp.dest(config.dest))

        .pipe(browserSync.reload({stream:true}));
});