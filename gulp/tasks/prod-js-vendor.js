var gulp = require('gulp');
var config = require('../config').prodJsVendor;
var concat = require('gulp-concat');

gulp.task('prod-js-vendor', function () {
    gulp.src(config.src)
        .pipe(concat(config.concatFile))
        .pipe(gulp.dest(config.dest));
});