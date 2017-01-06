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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdW5kLmpzIl0sIm5hbWVzIjpbImhhcmRlbiIsInJlcXVpcmUiLCJrbG9hayIsInByb3R5cGUiLCJyYXplIiwidHJ1bHkiLCJ6ZWxmIiwidm91bmQiLCJtZXRob2QiLCJjb250ZXh0IiwibmFtZSIsIkZVTkNUSU9OIiwiRXJyb3IiLCJTVFJJTkciLCJCT1VORCIsInByb2NlZHVyZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxVQUFVRixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNRyxPQUFPSCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1JLFFBQVFKLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUssT0FBT0wsUUFBUyxNQUFULENBQWI7O0FBRUFELE9BQVEsT0FBUixFQUFpQixPQUFqQjs7QUFFQSxJQUFNTyxRQUFRLFNBQVNBLEtBQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCQyxPQUF4QixFQUFpQ0MsSUFBakMsRUFBdUM7QUFDcEQ7Ozs7Ozs7Ozs7QUFVQSxLQUFJLENBQUNQLFFBQVNLLE1BQVQsRUFBaUJHLFFBQWpCLENBQUwsRUFBa0M7QUFDakMsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlQLE1BQU9LLElBQVAsS0FBaUIsQ0FBQ1AsUUFBU08sSUFBVCxFQUFlRyxNQUFmLENBQXRCLEVBQStDO0FBQzlDLFFBQU0sSUFBSUQsS0FBSixDQUFXLGNBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlKLE9BQU9NLEtBQVAsS0FBaUJBLEtBQXJCLEVBQTRCO0FBQzNCLFNBQU9OLE1BQVA7QUFDQTs7QUFFREMsV0FBVUEsV0FBV0gsS0FBTSxJQUFOLENBQXJCOztBQUVBSSxRQUFPQSxRQUFRRixPQUFPRSxJQUFmLElBQXVCLFdBQTlCOztBQUVBLEtBQUlLLFlBQVksU0FBU0EsU0FBVCxHQUFxQjtBQUNwQyxTQUFPUCxPQUFPUSxLQUFQLENBQWNQLE9BQWQsRUFBdUJMLEtBQU1hLFNBQU4sQ0FBdkIsQ0FBUDtBQUNBLEVBRkQ7O0FBSUFmLE9BQU9NLE1BQVAsRUFBZU8sU0FBZixFQUEwQkQsS0FBMUIsRUFBaUNKLElBQWpDOztBQUVBLFFBQU9LLFNBQVA7QUFDQSxDQWxDRDs7QUFvQ0FHLE9BQU9DLE9BQVAsR0FBaUJaLEtBQWpCIiwiZmlsZSI6InZvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTYgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInZvdW5kXCIsXG5cdFx0XHRcInBhdGhcIjogXCJ2b3VuZC92b3VuZC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidm91bmQuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidm91bmRcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3ZvdW5kLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwidm91bmQtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRCb3VuZCBjb250ZXh0IHRvIGZ1bmN0aW9uIHdpdGggcHJvcGVyIG5hbWUuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJrbG9ha1wiOiBcImtsb2FrXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBrbG9hayA9IHJlcXVpcmUoIFwia2xvYWtcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuaGFyZGVuKCBcIkJPVU5EXCIsIFwiYm91bmRcIiApO1xuXG5jb25zdCB2b3VuZCA9IGZ1bmN0aW9uIHZvdW5kKCBtZXRob2QsIGNvbnRleHQsIG5hbWUgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJtZXRob2Q6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcImNvbnRleHQ6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcInN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIXByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZFwiICk7XG5cdH1cblxuXHRpZiggdHJ1bHkoIG5hbWUgKSAmJiAhcHJvdHlwZSggbmFtZSwgU1RSSU5HICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBuYW1lXCIgKTtcblx0fVxuXG5cdGlmKCBtZXRob2QuQk9VTkQgPT09IEJPVU5EICl7XG5cdFx0cmV0dXJuIG1ldGhvZDtcblx0fVxuXG5cdGNvbnRleHQgPSBjb250ZXh0IHx8IHplbGYoIHRoaXMgKTtcblxuXHRuYW1lID0gbmFtZSB8fCBtZXRob2QubmFtZSB8fCBcInByb2NlZHVyZVwiO1xuXG5cdGxldCBwcm9jZWR1cmUgPSBmdW5jdGlvbiBwcm9jZWR1cmUoICl7XG5cdFx0cmV0dXJuIG1ldGhvZC5hcHBseSggY29udGV4dCwgcmF6ZSggYXJndW1lbnRzICkgKTtcblx0fTtcblxuXHRrbG9hayggbWV0aG9kLCBwcm9jZWR1cmUsIEJPVU5ELCBuYW1lICk7XG5cblx0cmV0dXJuIHByb2NlZHVyZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdm91bmQ7XG4iXX0=
