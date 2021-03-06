var gulp = require('gulp');
var config = require('../config').prodImg;
// отслеживет изменение чтоб не пересоздавать файлы которые не изменились
var changed    = require('gulp-changed');
// минифицирует изображения
var imagemin   = require('gulp-imagemin');

gulp.task('prod-img', function () {
    gulp.src(config.src)
        .pipe(changed(config.dest)) // Ignore unchanged files
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest))
    ;
});