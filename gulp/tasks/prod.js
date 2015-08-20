var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', function (callback) {
    runSequence(
        'prod-clean',
        [
            'prod-img',
            'prod-js-vendor',
            'prod-js-custom',
            'prod-css-vendor',
            'prod-css-custom',
            'prod-markup'
        ],
        // 'prod-server',
        // 'prod-watch',
        callback);
});