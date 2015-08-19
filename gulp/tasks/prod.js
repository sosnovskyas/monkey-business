var gulp = require('gulp');
var config = require('../config').prod;


//production build
gulp.task('prod',[
    'prod-js',
    'prod-css',
    'prod-markup',
    'prod-img'
    //,
    //'prod-server'
]);

