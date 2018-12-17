/**
 * Dependencies
 */

const test = require('tape')
const convert = require('..')


test('convert string into bits #1', assert => {
  assert.plan(1)
  assert.equal(
    convert('hello world'),
    '01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100'
  )
})
