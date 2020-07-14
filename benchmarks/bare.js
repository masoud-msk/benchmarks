'use strict'

const { CONTENT_TYPE, TYPE_JSON, stringify } = require('../lib/utils')

const server = require('http').createServer(function (req, res) {
  res.setHeader(CONTENT_TYPE, TYPE_JSON)
  res.end(stringify({ hello: 'world' }))
})

server.listen(3000)
