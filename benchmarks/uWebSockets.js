'use strict'

const uWS = require('uWebSockets.js')
const { CONTENT_TYPE, TYPE_JSON, stringify } = require('../lib/utils')

uWS.App().get('/', (res, req) => {
  res.writeHeader(CONTENT_TYPE, TYPE_JSON).end(stringify({ hello: 'world' }))
}).listen(3000, (token) => {
  if (!token) {
    console.error('Failed to listen to port ' + 3000)
  }
})