'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var jstransformer = require('./index');

var options = {
  engine: 'octet'
};
var locals = {
  hello: 'Hello'
};

gulp.task('default', function () {
  return gulp.src('test/*.octet')
    .pipe(jstransformer(options, locals))
    .pipe(rename(function (path) {
      path.basename = 'expected'
      path.extname = ".html"
    }))
    .pipe(gulp.dest('logs/'));
});
