var gulp = require('gulp'),
    browserSync = require('browser-sync');
require('./pug.task');
require('./style.task');
require('./js.task');

gulp.task('watch', function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: './dist/view'
    }
  });
  gulp.watch('./src/styles/**/*.css', ['cssInject']);
  gulp.watch('./src/pug/**/*.pug', ['pug']);
  gulp.watch('./src/js/**/*.js', ['scripts']);
  gulp.watch('./dist/view/index.html', function(){
    browserSync.reload();
  });
  gulp.watch('./dist/view/js/*.js', function(){
    browserSync.reload();
  });
});
