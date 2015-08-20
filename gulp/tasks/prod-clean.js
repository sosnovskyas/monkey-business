var gulp = require('gulp');
var config = require('../config').prodClean;
var del = require('del');

gulp.task('prod-clean', function (callback) {
    return del(config.dest, callback);
});