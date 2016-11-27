/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
			"ate": "ate",
			"protype": "protype",
			"zelf": "zelf"
		}
	@end-include
*/

const ate = require( "ate" );
const protype = require( "protype" );
const zelf = require( "zelf" );

const vound = function vound( method, context ){
	/*;
		@meta-configuration:
			{
				"method:required": "function",
				"context:required": "*"
			}
		@end-meta-configuration
	*/

	if( !protype( method, FUNCTION ) ){
		throw new Error( "invalid method" );
	}

	context = context || zelf( this );

	let name = method.name;

	method = method.bind( context );

	ate( "name", name || "function", method );

	return method;
};

module.exports = vound;
