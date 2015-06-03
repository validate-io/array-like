'use strict';

// MODULES //

var isInteger = require( 'validate.io-integer-primitive' );


// CONSTANTS //

var MAX = require( 'compute-const-max-safe-integer' );


// IS ARRAY-LIKE //

/**
* FUNCTION: isArrayLike( value )
*	Validates if a value is array-like.
*
* @param {*} value - value to validate
* @param {Boolean} boolean indicating if a value is array-like
*/
function isArrayLike( value ) {
	return value !== void 0 && value !== null && typeof value !== 'function' && isInteger( value.length ) && value.length >= 0 && value.length <= MAX;
} // end FUNCTION isArrayLike()


// EXPORTS //

module.exports = isArrayLike;
