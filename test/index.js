'use strict';

var gulpJsTransformer = require('..');
var assert = require('assert');
var gutil = require('gulp-util');
var test = require('testit');
var fs = require('fs');

var input = fs.readFileSync(__dirname + '/input.octet', 'utf8').trim();
var expected = fs.readFileSync(__dirname + '/expected.html', 'utf8').trim();
var options = require('./options');
var locals = require('./locals');

test('gulp-jstransformer', function(done) {
  var stream = gulpJsTransformer(options, locals);
  stream.on('data', function(data) {
    assert.strictEqual(data.contents.toString().trim(), expected);
    done();
  });

  stream.write(new gutil.File({
    contents: new Buffer('<h1>Hello, <%this.name%>!</h1>')
  }));

  stream.end();
});
