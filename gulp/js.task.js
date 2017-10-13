var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/view/js/'));
});
