var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    importCSS = require('postcss-import'),
    plumber = require('gulp-plumber');

gulp.task('style', function(){
  gulp.src('./src/styles/styles.css')
  .pipe(plumber({
    errorHandler: function(err){
      console.log(err);
    }
  }))
  .pipe(postcss([importCSS, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function(){
  gulp.watch('./src/styles/**/*.css', ['style']);
});
