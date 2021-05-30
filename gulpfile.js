const gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

// Compile less 
gulp.task('less', function(){ 
  return gulp.src(['./src/assets/css/less/base.less']). 
    pipe(less()). 
    pipe(minifyCSS({})). 
    pipe(gulp.dest('./dist/assets/css'));
}); 

// Watch for changes in less 
gulp.task('watch', ['less'], function () { 
  gulp.watch('./src/assets/css/less/**/*.less', ['less']); 
});