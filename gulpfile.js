/**
 * Tests using gulp-jstransformer through Gulp.
 */

var gulp = require('gulp');
var jstransformer = require(__dirname);
var rename = require('gulp-rename');

gulp.task('default', function() {
  var options = {
    engine: "octet"
  };
  var locals = {
    name: "World"
  };
  return gulp.src(['test/input.octet'])
    .pipe(jstransformer(options, locals))
    .pipe(rename(function (path) {
      path.extname = ".html"
    }))
    .pipe(gulp.dest('build/Release'));
});
