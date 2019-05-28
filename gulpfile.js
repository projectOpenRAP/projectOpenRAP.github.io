const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('scss', function () {
  return gulp.src('./assets/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./assets/dist/css'));
});

gulp.task('js', function() {
  gulp.src(['./assets/js/jquery-3.3.1.min.js','./assets/js/popper.min.js','./assets/js/bootstrap.min.js','./assets/js/owl.carousel.min.js','./assets/js/custom.js'])
    .pipe(concat('script.js'))
    .pipe(minify())
    .pipe(gulp.dest('./assets/dist/js'))
});

gulp.task('watch', function() {
  gulp.watch('./assets/scss/**/*.scss', ['scss']);
  gulp.watch('./assets/js/*.js', ['js']);
});

gulp.task('default', ['scss','js','watch']);