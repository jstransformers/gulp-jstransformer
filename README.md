# gulp-jstransformer

[Gulp](http://gulpjs.com) support for [JSTransformers][jstransformers-url]

[![Build Status](https://img.shields.io/travis/jstransformers/gulp-jstransformer/master.svg)](https://travis-ci.org/jstransformers/gulp-jstransformer)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/gulp-jstransformer/master.svg)](https://codecov.io/gh/jstransformers/gulp-jstransformer)
[![Dependency Status](https://img.shields.io/david/jstransformers/gulp-jstransformer/master.svg)](http://david-dm.org/jstransformers/gulp-jstransformer)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/gulp-jstransformer.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/gulp-jstransformer.svg)](https://www.npmjs.org/package/gulp-jstransformer)

## Install
```
npm install gulp-jstransformer --save
```

## Usage

```js
'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var jstransformer = require('gulp-jstransformer');

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
    .pipe(gulp.dest('dest/'));
});
```

or just `git clone` this repository and run `gulp`

## License

MIT
