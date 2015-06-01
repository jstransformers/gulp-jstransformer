'use strict';

var through = require('through2');
var jstransformer = require('jstransformer')(require('jstransformer-jstransformer'));
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

module.exports = function (options, locals) {
  // Prepare the options.
  options = options || {};
  locals = locals || {};

  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new PluginError('gulp-jstransformer', 'Steam not supported'));
      return cb();
    }

    if (file.isBuffer()) {
      var result = jstransformer.render(file.contents.toString(), options, locals);
      file.contents = new Buffer(result.body);

      this.push(file);
      return cb();
    }
  });
};
