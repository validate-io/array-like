'use strict';

var isArrayLike = require( './../lib' );

console.log( isArrayLike( {'length':10} ) );
// returns true

console.log( isArrayLike( [] ) );
// returns true

console.log( isArrayLike( 'beep' ) );
// returns true

console.log( (function test(){
	return isArrayLike( arguments );
})() );
// returns true

console.log( isArrayLike( null ) );
// returns false

console.log( isArrayLike( undefined ) );
// returns false

console.log( isArrayLike( 5 ) );
// returns false

console.log( isArrayLike( true ) );
// returns false

console.log( isArrayLike( {} ) );
// returns false

console.log( isArrayLike( function(){} ) );
// returns false

