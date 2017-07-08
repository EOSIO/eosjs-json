/* eslint-env mocha */

const assert = require('assert')
const Fcbuffer = require('fcbuffer')
const schema = require('./schema')

describe('syntax', () => {
  for (const fn of [
    './api',
    './schema'
  ]) {
    it(fn, function () {
      require(fn)
    })
  }
})

describe('fcbuffer', () => {

  it('parses', () => {
    const fcbuffer = Fcbuffer(schema)
    const errors = JSON.stringify(fcbuffer.errors, null, 4)
    assert.equal(errors, '[]')
  })

})
