/* eslint-env mocha */

describe('syntax', function () {
  for (const fn of [
    './api/v1',
    './schema'
  ]) {
    it(fn, function () {
      require(fn)
    })
  }
})
