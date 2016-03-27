/* global describe, before, beforeEach, afterEach,it */
require('mocha-generators').install()

var Nightmare = require('..')
var chai = require('chai')
var server = require('./server')
var should = chai.should()
var nmTest = function () {
  nmTest()
  if (should) {
  }
}
describe('TEST program Harry Potter Book', function () {
  before(function (done) {
    server.listen(7500, done)
  })

  describe('nightmare, mocha and chai', function () {
    var nightmare

    beforeEach(function () {
      nightmare = Nightmare()
    })

    afterEach(function * () {
      yield nightmare.end()
    })
    it('ซื้อเล่ม 1 --> 2 เล่ม, ซื้อเล่ม 2 --> 1 เล่ม ส่วนลดเท่ากับ 20', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('#b1')
        .click('#b1')
        .wait(1000)
        .click('#b2')
        .evaluate(function () {
          this.price = document.querySelector('#discountTotal').innerHTML
          return this.price
        })
      case1.should.equal('20')
    })
    it('ซื้อเล่ม 2 --> 3 เล่ม, ซื้อเล่ม 3 --> 3 เล่ม ส่วนลดท่ากับ 60', function * () {
      var case2 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .wait(1000)
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('#discountTotal').innerHTML
          return this.price
        })
      case2.should.equal('60')
    })
    it('ซื้อเล่ม 1 --> 1 เล่ม, ซื้อเล่ม 2 --> 2 เล่ม,ซื้อเล่ม 3 --> 1 เล่ม ส่วนลดเท่ากับ 60', function * () {
      var case3 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('#b1')
        .wait(1000)
        .click('#b2')
        .click('#b2')
        .wait(1000)
        .click('#b3')
        .evaluate(function () {
          this.price = document.querySelector('#discountTotal').innerHTML
          return this.price
        })
      case3.should.equal('60')
    })
    it('ซื้อเล่ม 3 --> 5 เล่ม, ซื้อเล่ม 4 --> 4 เล่ม, เล่ม 5 --> 3 ส่วนลดเท่ากับ 200', function * () {
      var case4 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .wait(1000)
        .click('#b4')
        .click('#b4')
        .click('#b4')
        .click('#b4')
        .wait(1000)
        .click('#b5')
        .click('#b5')
        .click('#b5')
        .evaluate(function () {
          this.price = document.querySelector('#discountTotal').innerHTML
          return this.price
        })
      case4.should.equal('200')
    })
    it('ซื้อเล่ม 3 --> 10 เล่ม ส่วนลดเท่ากับ 0', function * () {
      var case5 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .evaluate(function () {
          this.price = document.querySelector('#discountTotal').innerHTML
          return this.price
        })
      case5.should.equal('0')
    })
    it('ซื้อเล่ม 6 -->  5 เล่ม, ซื้อเล่ม 7 -->  4 เล่ม, ซื้อเล่ม 2 -->  2 เล่ม, ซื้อเล่ม 3 -->  1 เล่ม ส่วนลดเท่ากับ 200', function * () {
      var case6 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('#b6')
        .click('#b6')
        .click('#b6')
        .click('#b6')
        .click('#b6')
        .wait(1000)
        .click('#b7')
        .click('#b7')
        .click('#b7')
        .click('#b7')
        .wait(1000)
        .click('#b2')
        .click('#b2')
        .wait(1000)
        .click('#b1')
        .evaluate(function () {
          this.price = document.querySelector('#discountTotal').innerHTML
          return this.price
        })
      case6.should.equal('220')
    })
    it('ซื้อทุกเล่ม --> 1 เล่ม ส่วนลดเท่ากับ 420', function * () {
      var case7 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('#b1')
        .wait(1000)
        .click('#b2')
        .wait(1000)
        .click('#b3')
        .wait(1000)
        .click('#b4')
        .wait(1000)
        .click('#b5')
        .wait(1000)
        .click('#b6')
        .wait(1000)
        .click('#b7')
        .evaluate(function () {
          this.price = document.querySelector('#discountTotal').innerHTML
          return this.price
        })
      case7.should.equal('420')
    })
  })
})
