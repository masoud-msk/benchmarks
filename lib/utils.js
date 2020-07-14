'use strict'

const CONTENT_TYPE = 'content-type'
const TYPE_JSON = 'application/json; charset=utf-8'

const stringify = require('fast-json-stringify')({
  type: 'object',
  properties: {
    hello: {
      type: 'string'
    }
  }
})

module.exports = {
  CONTENT_TYPE,
  TYPE_JSON,

  stringify,
}
