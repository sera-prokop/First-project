'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    plumber = require('gulp-plumber'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    build: {
      html: 'build/',
      js: 'build/js/',
      css: 'build/css/',
      img: 'build/img/',
      fonts: 'build/fonts/'
    },
    src: {
      html: 'src/*.html',
      js: 'src/js/main.js',
      md: 'src/js/modernizr.js',
      style: 'src/style/style.scss',
      ie8: 'src/style/ie8.scss',
      img: 'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*'
    },
    watch: {
      html: 'src/**/*.html',
      js: 'src/js/**/*.js',
      style: 'src/style/**/*.scss',
      img: 'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*'
    },
    test: {
      html: 'test/',
      js: 'test/js/',
      css: 'test/css/',
      img: 'test/img/',
      fonts: 'test/fonts/'
    },
    clean: './build',
    clean_test: './test/'

};

var config = {
  server: {
      baseDir: ["./build", "./test"]
  },
  // tunnel: true,
  host: 'localhost',
  port: 9000
};

gulp.task('webserver', function () {
  browserSync(config);
});

gulp.task('clean', function (cb) {
  rimraf(path.clean, cb);
});

gulp.task('clean_test', function (cb) {
  rimraf(path.clean_test, cb);
});

gulp.task('html:build', function () {
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true}));
});

gulp.task('html_test:build', function () {
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.test.html))
    .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
  gulp.src(path.src.js)
    .pipe(rigger())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}));
});

gulp.task('js_test:build', function () {
  gulp.src(path.src.js)
    .pipe(rigger())
    .pipe(gulp.dest(path.test.js))
    .pipe(reload({stream: true}));
});

gulp.task('md:build', function () {
  gulp.src(path.src.md)
    .pipe(rigger())
    .pipe(uglify())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}));
});

gulp.task('md_test:build', function () {
  gulp.src(path.src.md)
    .pipe(rigger())
    .pipe(gulp.dest(path.test.js))
    .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
  gulp.src(path.src.style)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
        includePaths: ['src/style/'],
        outputStyle: 'compressed',
        sourceMap: true,
        errLogToConsole: true

    }))
    .pipe(prefixer())
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({stream: true}));
});

gulp.task('ie8:build', function () {
  gulp.src(path.src.ie8)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
        includePaths: ['src/style/'],
        outputStyle: 'compressed',
        sourceMap: true,
        errLogToConsole: true
    }))
    .pipe(prefixer())
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({stream: true}));
});

gulp.task('style_test:build', function () {
  gulp.src(path.src.style)
    .pipe(plumber())
    .pipe(sass({
        includePaths: ['src/style/'],
        errLogToConsole: true
    }))
    .pipe(prefixer())
    .pipe(gulp.dest(path.test.css))
    .pipe(reload({stream: true}));
});

gulp.task('ie8_test:build', function () {
  gulp.src(path.src.ie8)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
        includePaths: ['src/style/'],
        errLogToConsole: true
    }))
    .pipe(prefixer())
    .pipe(gulp.dest(path.test.css))
    .pipe(reload({stream: true}));
});



gulp.task('image:build', function () {
  gulp.src(path.src.img)
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()],
        interlaced: true
    }))
    .pipe(gulp.dest(path.build.img))
    .pipe(reload({stream: true}));
});

gulp.task('image_test:build', function () {
  gulp.src(path.src.img)
    .pipe(gulp.dest(path.test.img))
    .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
});

gulp.task('fonts_test:build', function() {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.test.fonts))
});

gulp.task('build', [
  'html:build',
  'js:build',
  'md:build',
  'style:build',
  'ie8:build',
  'fonts:build',
  'image:build'
]);

gulp.task('test', [
  'html_test:build',
  'js_test:build',
  'md_test:build',
  'style_test:build',
  'ie8_test:build',
  'fonts_test:build',
  'image_test:build'
]);


gulp.task('watch', function(){
  watch([path.watch.html], function(event, cb) {
    gulp.start('html:build');
    });
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build'),
    gulp.start('ie8:build');
    });
  watch([path.watch.js], function(event, cb) {
    gulp.start('js:build');
    gulp.start('md:build');
    });
  watch([path.watch.img], function(event, cb) {
    gulp.start('image:build');
    });
  watch([path.watch.fonts], function(event, cb) {
    gulp.start('fonts:build');
    });
});

gulp.task('watch_test', function(){
  watch([path.watch.html], function(event, cb) {
    gulp.start('html_test:build');
    });
  watch([path.watch.style], function(event, cb) {
    gulp.start('style_test:build'),
    gulp.start('ie8_test:build');
    });
  watch([path.watch.js], function(event, cb) {
    gulp.start('js_test:build');
    gulp.start('md_test:build');
    });
  watch([path.watch.img], function(event, cb) {
    gulp.start('image_test:build');
    });
  watch([path.watch.fonts], function(event, cb) {
    gulp.start('fonts_test:build');
    });
});

gulp.task('pr', ['build', 'webserver', 'watch']);
gulp.task('default', ['test', 'webserver', 'watch_test']);