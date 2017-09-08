var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    importCSS = require('postcss-import'),
    uglifycss = require('gulp-uglifycss'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    mixinis = require('postcss-mixins');
    plumber = require('gulp-plumber');

gulp.task('style', function(){
  gulp.src('./src/styles/styles.css')
  .pipe(sourcemaps.init())
  .pipe(plumber({
    errorHandler: function(err){
      console.log(err);
    }
  }))
  .pipe(postcss([importCSS, mixinis, cssvars, nested, autoprefixer]))
  .pipe(uglifycss())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./dist/view/css'));
});

gulp.task('cssInject',['style'], function(){
  return gulp.src('./dist/view/css/styles.css')
  .pipe(browserSync.stream());
});
