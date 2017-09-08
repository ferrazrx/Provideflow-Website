var gulp = require('gulp');
require('');

gulp.task('watch', function(){
  gulp.watch('./src/styles/**/*.css', ['style']);
    gulp.watch('./src/pug/**/*.pug', ['pug']);
});
