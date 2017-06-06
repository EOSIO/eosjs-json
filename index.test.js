/* eslint-env mocha */

describe('syntax', function () {
  for (const fn of [
    './api/v1',
    './schema/operations'
  ]) {
    it(fn, function () {
      require(fn)
    })
  }
})
