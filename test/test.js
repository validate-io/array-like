/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isArrayLike = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-array-like', function tests() {

	it( 'should export a function', function test() {
		expect( isArrayLike ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var values = [
			[],
			{'length': 10},
			'beep',
			arguments
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( isArrayLike( values[i] ), values[i] );
		}
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			null,
			undefined,
			NaN,
			true,
			false,
			{},
			function boop( a, b, c ) {}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( isArrayLike( values[i] ), values[i] );
		}
	});

});
