'use strict'

const through = require('through2')
const jstransformer = require('jstransformer')(require('jstransformer-jstransformer'))
const PluginError = require('gulp-util').PluginError

module.exports = function (options, locals) {
  options = options && typeof options === 'object' ? options : {}
  locals = locals && typeof locals === 'object' ? locals : {}

  if (!options.engine) {
    throw new Error('gulp-jstransformer expect `options.engine` to be defined')
  }

  return through.obj((file, enc, next) => {
    if (file.isBuffer()) {
      try {
        const contents = file.contents.toString(options.encoding)
        const result = jstransformer.render(contents, options, locals)
        file.contents = Buffer.from(result.body)
      } catch (err) {
        this.emit('error', new PluginError('gulp-jstransformer', err))
        return next(err)
      }
      return next(null, file)
    }
    next()
  })
}
