'use strict';

var test = require('assertit')
var through2 = require('through2')
var plugin = require('../index')
var gulp = require('gulp')

// DRY principle
function jstransformer (options, locals, callback) {
  var files = []
  var content = ''

  gulp.src('./test/*.octet')
    .pipe(plugin(options, locals))
    .pipe(through2.obj((file, enc, next) => {
      content = file.contents.toString()
      files.push(file)
      next()
    }, () => {
      callback(null, content)
    }))
}

test('gulp-jstransformer:', function () {
  test('should throw Error if no `options.engine` given', done => {
    function fixture () {
      plugin()
    }

    test.throws(fixture, Error)
    test.throws(fixture, /expect `options\.engine` to be defined/)
    done()
  });
  test('should work when given engine and options and locals', done => {
    jstransformer({engine: 'octet'}, {hello: 'Hello'}, (err, content) => {
      test.ifError(err)
      test.equal(content, '<p>Hello world</p>')
      done()
    })
  })
})
