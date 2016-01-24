var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src/",
        port: 9000,
        tunnel: true,
    });

    gulp.watch("./src/scss/**/*.scss", ['sass']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    gulp.src("./src/scss/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(csscomb())
        .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
        .pipe(gulp.dest("./src/css"))
        .pipe(browserSync.stream());
});

gulp.task('img', () => {
    return gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('src/img'));
});

gulp.task('default', ['serve']);

