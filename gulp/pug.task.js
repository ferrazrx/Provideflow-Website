var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function(){
  gulp.src('./src/pug/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./dist/view'))
});
