var gulp = require('gulp'),
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber');
    
gulp.task('pug', function(){
  gulp.src('./src/pug/**/*.pug')
  .pipe(plumber({
    errorHandler: function(err){
      console.log(err);
    }
  }))
  .pipe(pug())
  .pipe(gulp.dest('./dist/view'))
});
