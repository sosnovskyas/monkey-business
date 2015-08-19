var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function (callback) {
    runSequence(
        [
            'dev-img',
            'dev-js-vendor',
            'dev-js-custom',
            'dev-css-vendor',
            'dev-css-custom',
            'dev-markup'
        ],
        'dev-server',
        'dev-watch',
        callback);
});