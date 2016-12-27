"use strict";

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
			"harden": "harden",
			"protype": "protype",
			"truly": "truly",
			"zelf": "zelf"
		}
	@end-include
*/

var ate = require("ate");
var harden = require("harden");
var protype = require("protype");
var truly = require("truly");
var zelf = require("zelf");

harden("BOUND", "bound");

var vound = function vound(method, context, name) {
	/*;
 	@meta-configuration:
 		{
 			"method:required": "function",
 			"context:required": "*",
 			"name": "string"
 		}
 	@end-meta-configuration
 */

	if (!protype(method, FUNCTION)) {
		throw new Error("invalid method");
	}

	if (truly(name) && !protype(name, STRING)) {
		throw new Error("invalid name");
	}

	if (method.BOUND === BOUND) {
		return method;
	}

	context = context || zelf(this);

	name = name || method.name || "procedure";

	var procedure = method.bind(context);

	ate("name", name, procedure);

	harden("BOUND", BOUND, procedure);

	harden("method", method, procedure);

	return procedure;
};

module.exports = vound;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdW5kLmpzIl0sIm5hbWVzIjpbImF0ZSIsInJlcXVpcmUiLCJoYXJkZW4iLCJwcm90eXBlIiwidHJ1bHkiLCJ6ZWxmIiwidm91bmQiLCJtZXRob2QiLCJjb250ZXh0IiwibmFtZSIsIkZVTkNUSU9OIiwiRXJyb3IiLCJTVFJJTkciLCJCT1VORCIsInByb2NlZHVyZSIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQSxJQUFNQSxNQUFNQyxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxPQUFPSixRQUFTLE1BQVQsQ0FBYjs7QUFFQUMsT0FBUSxPQUFSLEVBQWlCLE9BQWpCOztBQUVBLElBQU1JLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLE9BQXhCLEVBQWlDQyxJQUFqQyxFQUF1QztBQUNwRDs7Ozs7Ozs7OztBQVVBLEtBQUksQ0FBQ04sUUFBU0ksTUFBVCxFQUFpQkcsUUFBakIsQ0FBTCxFQUFrQztBQUNqQyxRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSVAsTUFBT0ssSUFBUCxLQUFpQixDQUFDTixRQUFTTSxJQUFULEVBQWVHLE1BQWYsQ0FBdEIsRUFBK0M7QUFDOUMsUUFBTSxJQUFJRCxLQUFKLENBQVcsY0FBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUosT0FBT00sS0FBUCxLQUFpQkEsS0FBckIsRUFBNEI7QUFDM0IsU0FBT04sTUFBUDtBQUNBOztBQUVEQyxXQUFVQSxXQUFXSCxLQUFNLElBQU4sQ0FBckI7O0FBRUFJLFFBQU9BLFFBQVFGLE9BQU9FLElBQWYsSUFBdUIsV0FBOUI7O0FBRUEsS0FBSUssWUFBWVAsT0FBT1EsSUFBUCxDQUFhUCxPQUFiLENBQWhCOztBQUVBUixLQUFLLE1BQUwsRUFBYVMsSUFBYixFQUFtQkssU0FBbkI7O0FBRUFaLFFBQVEsT0FBUixFQUFpQlcsS0FBakIsRUFBd0JDLFNBQXhCOztBQUVBWixRQUFRLFFBQVIsRUFBa0JLLE1BQWxCLEVBQTBCTyxTQUExQjs7QUFFQSxRQUFPQSxTQUFQO0FBQ0EsQ0FwQ0Q7O0FBc0NBRSxPQUFPQyxPQUFQLEdBQWlCWCxLQUFqQiIsImZpbGUiOiJ2b3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE2IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJ2b3VuZFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwidm91bmQvdm91bmQuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInZvdW5kLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInZvdW5kXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy92b3VuZC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInZvdW5kLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Qm91bmQgY29udGV4dCB0byBmdW5jdGlvbiB3aXRoIHByb3BlciBuYW1lLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhdGVcIjogXCJhdGVcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhdGUgPSByZXF1aXJlKCBcImF0ZVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuaGFyZGVuKCBcIkJPVU5EXCIsIFwiYm91bmRcIiApO1xuXG5jb25zdCB2b3VuZCA9IGZ1bmN0aW9uIHZvdW5kKCBtZXRob2QsIGNvbnRleHQsIG5hbWUgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJtZXRob2Q6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcImNvbnRleHQ6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcInN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIXByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZFwiICk7XG5cdH1cblxuXHRpZiggdHJ1bHkoIG5hbWUgKSAmJiAhcHJvdHlwZSggbmFtZSwgU1RSSU5HICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBuYW1lXCIgKTtcblx0fVxuXG5cdGlmKCBtZXRob2QuQk9VTkQgPT09IEJPVU5EICl7XG5cdFx0cmV0dXJuIG1ldGhvZDtcblx0fVxuXG5cdGNvbnRleHQgPSBjb250ZXh0IHx8IHplbGYoIHRoaXMgKTtcblxuXHRuYW1lID0gbmFtZSB8fCBtZXRob2QubmFtZSB8fCBcInByb2NlZHVyZVwiO1xuXG5cdGxldCBwcm9jZWR1cmUgPSBtZXRob2QuYmluZCggY29udGV4dCApO1xuXG5cdGF0ZSggXCJuYW1lXCIsIG5hbWUsIHByb2NlZHVyZSApO1xuXG5cdGhhcmRlbiggXCJCT1VORFwiLCBCT1VORCwgcHJvY2VkdXJlICk7XG5cblx0aGFyZGVuKCBcIm1ldGhvZFwiLCBtZXRob2QsIHByb2NlZHVyZSApO1xuXG5cdHJldHVybiBwcm9jZWR1cmU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZvdW5kO1xuIl19
