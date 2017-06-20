/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "vound",
			"path": "vound/vound.js",
			"file": "vound.js",
			"module": "vound",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/vound.git",
			"test": "vound-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Bound context to function with proper name.
	@end-module-documentation

	@include:
		{
			"kloak": "kloak",
			"mrkd": "mrkd",
			"protype": "protype",
			"raze": "raze",
			"wichevr": "wichevr",
			"wichis": "wichis",
			"zelf": "zelf"
		}
	@end-include
*/

const kloak = require( "kloak" );
const mrkd = require( "mrkd" );
const protype = require( "protype" );
const raze = require( "raze" );
const wichevr = require( "wichevr" );
const zelf = require( "zelf" );

const BOUND = Symbol( "bound" );
const DEFAULT_METHOD_NAME = "procedure";

const vound = function vound( method, context, name ){
	/*;
		@meta-configuration:
			{
				"method:required": "function",
				"context:required": "*",
				"name": "string"
			}
		@end-meta-configuration
	*/

	method = wichevr( method, function procedure( ){ return this; } );

	if( !protype( method, FUNCTION ) ){
		throw new Error( "invalid method" );
	}

	if( mrkd( BOUND, method, true ) ){
		return method;
	}

	context = wichevr( context, zelf( this ) );

	name = wichevr( name, method.name, DEFAULT_METHOD_NAME );

	let procedure = function procedure( ){
		return method.apply( context, raze( arguments ) );
	};

	kloak( method, procedure, BOUND, name );

	return procedure;
};

module.exports = vound;
