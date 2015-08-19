var gulp = require('gulp');
var config = require('../config').devWatch;

gulp.task('dev-watch', function () {
    gulp.watch(config.js, ['dev-js-custom']);
    gulp.watch(config.css, ['dev-css-custom']);
    gulp.watch(config.markup, ['dev-markup']);
});