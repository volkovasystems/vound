"use strict";

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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
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
			"harden": "harden",
			"kloak": "kloak",
			"protype": "protype",
			"raze": "raze",
			"truly": "truly",
			"zelf": "zelf"
		}
	@end-include
*/

var harden = require("harden");
var kloak = require("kloak");
var protype = require("protype");
var raze = require("raze");
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

	var procedure = function procedure() {
		return method.apply(context, raze(arguments));
	};

	kloak(method, procedure, BOUND, name);

	return procedure;
};

module.exports = vound;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdW5kLmpzIl0sIm5hbWVzIjpbImhhcmRlbiIsInJlcXVpcmUiLCJrbG9hayIsInByb3R5cGUiLCJyYXplIiwidHJ1bHkiLCJ6ZWxmIiwidm91bmQiLCJtZXRob2QiLCJjb250ZXh0IiwibmFtZSIsIkZVTkNUSU9OIiwiRXJyb3IiLCJTVFJJTkciLCJCT1VORCIsInByb2NlZHVyZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1LLE9BQU9MLFFBQVMsTUFBVCxDQUFiOztBQUVBRCxPQUFRLE9BQVIsRUFBaUIsT0FBakI7O0FBRUEsSUFBTU8sUUFBUSxTQUFTQSxLQUFULENBQWdCQyxNQUFoQixFQUF3QkMsT0FBeEIsRUFBaUNDLElBQWpDLEVBQXVDO0FBQ3BEOzs7Ozs7Ozs7O0FBVUEsS0FBSSxDQUFDUCxRQUFTSyxNQUFULEVBQWlCRyxRQUFqQixDQUFMLEVBQWtDO0FBQ2pDLFFBQU0sSUFBSUMsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJUCxNQUFPSyxJQUFQLEtBQWlCLENBQUNQLFFBQVNPLElBQVQsRUFBZUcsTUFBZixDQUF0QixFQUErQztBQUM5QyxRQUFNLElBQUlELEtBQUosQ0FBVyxjQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJSixPQUFPTSxLQUFQLEtBQWlCQSxLQUFyQixFQUE0QjtBQUMzQixTQUFPTixNQUFQO0FBQ0E7O0FBRURDLFdBQVVBLFdBQVdILEtBQU0sSUFBTixDQUFyQjs7QUFFQUksUUFBT0EsUUFBUUYsT0FBT0UsSUFBZixJQUF1QixXQUE5Qjs7QUFFQSxLQUFJSyxZQUFZLFNBQVNBLFNBQVQsR0FBcUI7QUFDcEMsU0FBT1AsT0FBT1EsS0FBUCxDQUFjUCxPQUFkLEVBQXVCTCxLQUFNYSxTQUFOLENBQXZCLENBQVA7QUFDQSxFQUZEOztBQUlBZixPQUFPTSxNQUFQLEVBQWVPLFNBQWYsRUFBMEJELEtBQTFCLEVBQWlDSixJQUFqQzs7QUFFQSxRQUFPSyxTQUFQO0FBQ0EsQ0FsQ0Q7O0FBb0NBRyxPQUFPQyxPQUFQLEdBQWlCWixLQUFqQiIsImZpbGUiOiJ2b3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwidm91bmRcIixcblx0XHRcdFwicGF0aFwiOiBcInZvdW5kL3ZvdW5kLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ2b3VuZC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ2b3VuZFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3ZvdW5kLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwidm91bmQtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRCb3VuZCBjb250ZXh0IHRvIGZ1bmN0aW9uIHdpdGggcHJvcGVyIG5hbWUuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJrbG9ha1wiOiBcImtsb2FrXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBrbG9hayA9IHJlcXVpcmUoIFwia2xvYWtcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuaGFyZGVuKCBcIkJPVU5EXCIsIFwiYm91bmRcIiApO1xuXG5jb25zdCB2b3VuZCA9IGZ1bmN0aW9uIHZvdW5kKCBtZXRob2QsIGNvbnRleHQsIG5hbWUgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJtZXRob2Q6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcImNvbnRleHQ6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcInN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIXByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZFwiICk7XG5cdH1cblxuXHRpZiggdHJ1bHkoIG5hbWUgKSAmJiAhcHJvdHlwZSggbmFtZSwgU1RSSU5HICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBuYW1lXCIgKTtcblx0fVxuXG5cdGlmKCBtZXRob2QuQk9VTkQgPT09IEJPVU5EICl7XG5cdFx0cmV0dXJuIG1ldGhvZDtcblx0fVxuXG5cdGNvbnRleHQgPSBjb250ZXh0IHx8IHplbGYoIHRoaXMgKTtcblxuXHRuYW1lID0gbmFtZSB8fCBtZXRob2QubmFtZSB8fCBcInByb2NlZHVyZVwiO1xuXG5cdGxldCBwcm9jZWR1cmUgPSBmdW5jdGlvbiBwcm9jZWR1cmUoICl7XG5cdFx0cmV0dXJuIG1ldGhvZC5hcHBseSggY29udGV4dCwgcmF6ZSggYXJndW1lbnRzICkgKTtcblx0fTtcblxuXHRrbG9hayggbWV0aG9kLCBwcm9jZWR1cmUsIEJPVU5ELCBuYW1lICk7XG5cblx0cmV0dXJuIHByb2NlZHVyZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdm91bmQ7XG4iXX0=
