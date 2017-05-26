'use strict'
const appName = 'dimensionalStore'
console.log(appName + ' engine')
const DimensionalStore = require('DimensionalStore')
var express = require('express'),
  http = require('http'),
  app = express()
global.developmentMode = ('development' === app.get('env'))

// all environments
app.set('port', process.env.PORT || 3999)
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(app.router)
function errorHandler (err, req, res, next) {
  console.error('errorHandler ' + err + (err.stack ? err.stack : ''))
  if (res.headersSent) {
    return next(err)
  }
  if (err.message.substr(0, 7) === 'parser ') {
    res.status(400).send(err.message)
  }
  res.status(500).send('Internal error')
}
app.use(errorHandler)
if (global.developmentMode) {
  app.use(express.logger('dev'))
  console.log('development mode')
  app.all('*', function (req, res, next) {
    console.log('debug request ' + stringify(req))
    return next()
  })
}
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})
console.log(appName + ' main finished')
