# gulp-jstransformer [![The MIT License][license-img]][license-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/gulp-jstransformer.svg)](https://greenkeeper.io/)

[Gulp](http://gulpjs.com) support for [JSTransformers][jstransformers-url]

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]


## Install
```
npm install gulp-jstransformer --save
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

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


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jstransformers/gulp-jstransformer/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/gulp-jstransformer
[npmjs-img]: https://img.shields.io/npm/v/gulp-jstransformer.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/jstransformers/gulp-jstransformer
[travis-img]: https://img.shields.io/travis/jstransformers/gulp-jstransformer.svg

[coveralls-url]: https://coveralls.io/r/jstransformers/gulp-jstransformer
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/gulp-jstransformer.svg

[david-url]: https://david-dm.org/jstransformers/gulp-jstransformer
[david-img]: https://img.shields.io/david/jstransformers/gulp-jstransformer.svg

[jstransformers-url]: http://github.com/jstransformers
