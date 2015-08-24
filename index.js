'use strict';

var through = require('through2');
var jstransformer = require('jstransformer')(require('jstransformer-jstransformer'));
var PluginError = require('gulp-util').PluginError;

module.exports = function gulpJstransformer (options, locals) {
  options = options && typeof options === 'object' ? options : {};
  locals = locals && typeof locals === 'object' ? locals : {};

  if (!options.engine) {
    throw new Error('gulp-jstransformer expect `options.engine` to be defined');
  }

  return through.obj(function (file, enc, next) {
    if (file.isBuffer()) {
      try {
        var contents = file.contents.toString(options.encoding);
        var result = jstransformer.render(contents, options, locals);
        file.contents = new Buffer(result.body);
      } catch (err) {
        this.emit('error', new PluginError('gulp-jstransformer', err));
        return next(err);
      }
      return next(null, file);
    }
    next();
  });
};
