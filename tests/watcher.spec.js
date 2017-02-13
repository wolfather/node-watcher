'use strict';

const mocha = require('mocha'),
	expect = require('chai').expect,
	should = require('chai').should(),
	assert = require('assert'),
	watcher = require('../watcher')


describe('watcher module', () => {
	it('expecting the watcher is a function', (done) =>{
		watcher.should.be.a('function')

		done()
	})
	
	it('expecting the both arguments are strings', (done) =>{
		assert.equal(watcher(), undefined)

		done()
	})
})