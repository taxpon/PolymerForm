var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var pleeease = require('gulp-pleeease');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

browserSync({
    server: './example'
});

gulp.task('uglify', function(){
    gulp.src('src/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename('jquery.polymer-form.min.js'))
        .pipe(gulp.dest('build/'))
        .pipe(gulp.dest('example/js'))
        .pipe(reload({stream:true}));
});

gulp.task('sass', function(){
    gulp.src('src/*.scss')
        .pipe(plumber())
        .pipe(sass({style:'compressed'}))
        .pipe(pleeease())
        .pipe(rename('jquery.polymer-form.min.css'))
        .pipe(gulp.dest('build/'))
        .pipe(gulp.dest('example/css'))
        .pipe(reload({stream:true}));
});

gulp.task('example', function(){
    gulp.src('example/index.html')
        .pipe(reload({stream:true}));

});

gulp.task('example-sass', function(){
    gulp.src('example/css/style.scss')
        .pipe(plumber())
        .pipe(sass({style:'compressed'}))
        .pipe(pleeease())
        .pipe(gulp.dest('example/css'))
        .pipe(reload({stream:true}));
});

gulp.task('watch', function(){
    gulp.watch('src/*.js', ['uglify']);
    gulp.watch('src/*.scss', ['sass']);
    gulp.watch('example/index.html', ['example']);
    gulp.watch('example/css/style.scss', ['example-sass']);
});

gulp.task('gh-sass', function(){
    gulp.src('gh-pages/css/*.scss')
        .pipe(plumber())
        .pipe(sass({style:'compressd'}))
        .pipe(pleeease())
        .pipe(gulp.dest('gh-pages/css/'))
});

gulp.task('gh', function(){
    gulp.watch(['gh/pages/css/*.scss'], ['gh-sass']);
});

gulp.task('deafault', ['watch'], function(){
});