var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("./scss/main.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(csscomb())
        .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

