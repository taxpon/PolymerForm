var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('uglify', function(){
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(rename('jquery.polymer-form.min.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', function(){
    gulp.watch('src/*.js', ['uglify']);
});

gulp.task('deafault', ['watch'], function(){
});