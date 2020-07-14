'use strict'

const polka = require('polka')
const { CONTENT_TYPE, TYPE_JSON, stringify } = require('../lib/utils')

const app = polka()

app.get('/', (req, res) => {
  res.setHeader(CONTENT_TYPE, TYPE_JSON)
  res.end(stringify({ hello: 'world' }))
})

app.listen(3000)
