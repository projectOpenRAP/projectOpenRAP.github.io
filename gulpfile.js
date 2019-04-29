const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

gulp.task('minify-default-head-script', function() {
  gulp.src(['./assets/js/default/jquery-3.3.1.min.js','./assets/js/default/popper.min.js','./assets/js/default/bootstrap.min.js','./assets/js/default/custom.js'])
    .pipe(concat('default-head.js'))
    .pipe(minify())
    .pipe(gulp.dest('./assets/js/dist/'))
});

gulp.task('minify-default-foot-script', function() {
  gulp.src(['./assets/js/default/telemetry_service.js','./assets/js/default/main.js','./assets/js/default/verticals.js','./assets/js/default/key-milestone.js'])
    .pipe(concat('default-foot.js'))
    .pipe(minify())
    .pipe(gulp.dest('./assets/js/dist/'))
});

gulp.task('watch', function() {
  gulp.watch('./assets/js/default/*.js', ['minify-default-head-script']);
  gulp.watch('./assets/js/default/*.js', ['minify-default-foot-script']);
});

gulp.task('default', ['watch']);