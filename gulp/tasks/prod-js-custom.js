var gulp = require('gulp');
var config = require('../config').prodJsCustom;
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
// var obfuscate = require('gulp-obfuscate');

gulp.task('prod-js-custom', function () {
    gulp.src(config.src)
        .pipe(concat(config.concatFile))
        .pipe(ngAnnotate())
        .pipe(uglify())
        // .pipe(obfuscate({replaceMethod: obfuscate.ZALGO})) // обфускация
        .pipe(gulp.dest(config.dest))
    ;
});