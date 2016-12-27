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

	ate("method", method, procedure);

	harden("BOUND", BOUND, procedure);

	return procedure;
};

module.exports = vound;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdW5kLmpzIl0sIm5hbWVzIjpbImF0ZSIsInJlcXVpcmUiLCJoYXJkZW4iLCJwcm90eXBlIiwidHJ1bHkiLCJ6ZWxmIiwidm91bmQiLCJtZXRob2QiLCJjb250ZXh0IiwibmFtZSIsIkZVTkNUSU9OIiwiRXJyb3IiLCJTVFJJTkciLCJCT1VORCIsInByb2NlZHVyZSIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQSxJQUFNQSxNQUFNQyxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxPQUFPSixRQUFTLE1BQVQsQ0FBYjs7QUFFQUMsT0FBUSxPQUFSLEVBQWlCLE9BQWpCOztBQUVBLElBQU1JLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLE9BQXhCLEVBQWlDQyxJQUFqQyxFQUF1QztBQUNwRDs7Ozs7Ozs7OztBQVVBLEtBQUksQ0FBQ04sUUFBU0ksTUFBVCxFQUFpQkcsUUFBakIsQ0FBTCxFQUFrQztBQUNqQyxRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSVAsTUFBT0ssSUFBUCxLQUFpQixDQUFDTixRQUFTTSxJQUFULEVBQWVHLE1BQWYsQ0FBdEIsRUFBK0M7QUFDOUMsUUFBTSxJQUFJRCxLQUFKLENBQVcsY0FBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUosT0FBT00sS0FBUCxLQUFpQkEsS0FBckIsRUFBNEI7QUFDM0IsU0FBT04sTUFBUDtBQUNBOztBQUVEQyxXQUFVQSxXQUFXSCxLQUFNLElBQU4sQ0FBckI7O0FBRUFJLFFBQU9BLFFBQVFGLE9BQU9FLElBQWYsSUFBdUIsV0FBOUI7O0FBRUEsS0FBSUssWUFBWVAsT0FBT1EsSUFBUCxDQUFhUCxPQUFiLENBQWhCOztBQUVBUixLQUFLLE1BQUwsRUFBYVMsSUFBYixFQUFtQkssU0FBbkI7O0FBRUFkLEtBQUssUUFBTCxFQUFlTyxNQUFmLEVBQXVCTyxTQUF2Qjs7QUFFQVosUUFBUSxPQUFSLEVBQWlCVyxLQUFqQixFQUF3QkMsU0FBeEI7O0FBRUEsUUFBT0EsU0FBUDtBQUNBLENBcENEOztBQXNDQUUsT0FBT0MsT0FBUCxHQUFpQlgsS0FBakIiLCJmaWxlIjoidm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNiBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwidm91bmRcIixcblx0XHRcdFwicGF0aFwiOiBcInZvdW5kL3ZvdW5kLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ2b3VuZC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ2b3VuZFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvdm91bmQuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJ2b3VuZC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEJvdW5kIGNvbnRleHQgdG8gZnVuY3Rpb24gd2l0aCBwcm9wZXIgbmFtZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXRlXCI6IFwiYXRlXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXRlID0gcmVxdWlyZSggXCJhdGVcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmhhcmRlbiggXCJCT1VORFwiLCBcImJvdW5kXCIgKTtcblxuY29uc3Qgdm91bmQgPSBmdW5jdGlvbiB2b3VuZCggbWV0aG9kLCBjb250ZXh0LCBuYW1lICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibWV0aG9kOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XCJjb250ZXh0OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJzdHJpbmdcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoICFwcm90eXBlKCBtZXRob2QsIEZVTkNUSU9OICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBtZXRob2RcIiApO1xuXHR9XG5cblx0aWYoIHRydWx5KCBuYW1lICkgJiYgIXByb3R5cGUoIG5hbWUsIFNUUklORyApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbmFtZVwiICk7XG5cdH1cblxuXHRpZiggbWV0aG9kLkJPVU5EID09PSBCT1VORCApe1xuXHRcdHJldHVybiBtZXRob2Q7XG5cdH1cblxuXHRjb250ZXh0ID0gY29udGV4dCB8fCB6ZWxmKCB0aGlzICk7XG5cblx0bmFtZSA9IG5hbWUgfHwgbWV0aG9kLm5hbWUgfHwgXCJwcm9jZWR1cmVcIjtcblxuXHRsZXQgcHJvY2VkdXJlID0gbWV0aG9kLmJpbmQoIGNvbnRleHQgKTtcblxuXHRhdGUoIFwibmFtZVwiLCBuYW1lLCBwcm9jZWR1cmUgKTtcblxuXHRhdGUoIFwibWV0aG9kXCIsIG1ldGhvZCwgcHJvY2VkdXJlICk7XG5cblx0aGFyZGVuKCBcIkJPVU5EXCIsIEJPVU5ELCBwcm9jZWR1cmUgKTtcblxuXHRyZXR1cm4gcHJvY2VkdXJlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB2b3VuZDtcbiJdfQ==
