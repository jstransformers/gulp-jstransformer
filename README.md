# gulp-jstransformer

Run [JSTransformers](http://github.com/jstransformers) through [Gulp](http://gulpjs.com).

[![Build Status](https://img.shields.io/travis/jstransformers/gulp-jstransformer/master.svg)](https://travis-ci.org/jstransformers/gulp-jstransformer)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/gulp-jstransformer/master.svg)](https://coveralls.io/r/jstransformers/gulp-jstransformer?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/gulp-jstransformer/master.svg)](http://david-dm.org/jstransformers/gulp-jstransformer)
[![NPM version](https://img.shields.io/npm/v/gulp-jstransformer.svg)](https://www.npmjs.org/package/gulp-jstransformer)

## Installation

    npm install gulp-jstransformer

## Example

```js
var gulp = require('gulp');
var jstransformer = require(__dirname);
var rename = require('gulp-rename');

gulp.task('default', function() {
  var options = {
    jstransformer: "octet"
  };
  var locals = {
    name: "World"
  };
  // Process each .octet file.
  return gulp.src(['**.octet'])
    // Invoke the JSTransformer Gulp plugin, passing in the options and locals.
    .pipe(jstransformer(options, locals))

    // Rename the outputed files accordingly.
    .pipe(rename(function (path) {
      path.extname = ".html"
    }))

    // Output all the files to the out directory.
    .pipe(gulp.dest('out'));
});
```

## License

MIT
