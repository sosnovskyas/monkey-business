var gulp = require('gulp');
var config = require('../config').prodCssVendor;
var concat = require('gulp-concat');

gulp.task('prod-css-vendor', function () {
    gulp.src(config.src)
            .pipe(concat(config.concatFile))
            .pipe(gulp.dest(config.dest))
    ;
});
