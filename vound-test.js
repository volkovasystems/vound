const vound = require( "./vound.js" );

let test = vound( function hello( ){ return [ this, arguments ]; }, "yeah" );

console.log( require( "util" ).inspect( test, { "showHidden": true } ) );
console.log( test( 1, 2, 3 ) );
