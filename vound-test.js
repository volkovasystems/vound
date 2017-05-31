
const assert = require( "assert" );
const vound = require( "./vound.js" );

let test = vound( function hello( ){ return [ this, Array.from( arguments ) ]; }, { "yeah": "hello" } );

assert.deepEqual( test( 1, 2, 3 ), [ { "yeah": "hello" }, [ 1, 2, 3 ] ], "should be deeply equal" );

console.log( "ok" );
