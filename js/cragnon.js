/*
	Cragnon Javascript Library
	set up is similar to how jQuery sets it's self up
*/

(function (window, undefined) {
	var doc = window.document, // shortcut/alias 
		cragLib = function (selector, context, options) { // cragnon function
			return new cragLib.prototype.init(selector, context, options); // make a new object here so the dev doesn't need to use "new"
		},
		__; // double underscore // local alias

		cragLib.prototype = {
			init: function (selector, context, options) {
				var self = this;

				// TODO: conditions that may change selector, context, and even options before sending it to makeCragnon()

				return cragLib.prototype.makeCragnon(selector, context, options);
			},
			makeCragnon: function (selector, context, options) {
				var self = this;

				// TODO: setup a cragnon object (self/this) and return it to callee.

				return self;
			},
			context: '[object cragnon]',
			elements: null,
			length: 0,

			//[OK] NodeLists aren't regular arrays so we copy the elements to a clean array.
			nodeListToArray: function (nodeList) {
				var i = 0, 
					newArray = [];
				for (i = 0; i < nodeList.length; i++) {
					newArray.push(nodeList[i]);
				}
				newArray = __.removeDuplicateNodes(newArray);

				return newArray;
			},

			//[OK] clone object
			clone: function (obj) {
				var copy,
					prop,
					value,
					i;

				if (obj && obj.nodeType) {
					return obj.cloneNode(false); // not deep; default is deep, which is really heavy.
				}

				if (obj === null || typeof obj === 'undefined' || typeof obj !== 'object') {
					// NOT null, undefined, Object or Object Array.
					// Should be Number, String, Boolean;
					// these aren't passed by reference (odd that strings aren't but whatever) so just return them.
					return obj;
				}

				if (__.isArray(obj)) {
					copy = []; // initialize a new empty Array Object

					for (i = 0; i < obj.length; i++) {
						copy[i] = __.clone(obj[i]);
					}
					return copy;
				}

				if (__.isObject(obj)) {
					copy = {}; // initialize a new empty Object

					for (prop in obj) {
						if (obj.hasOwnProperty(prop)) {
							copy[prop] = __.clone(obj[prop]);
						}
					}
					return copy;
				}
				return undefined; // be explicit 
			},

			//[OK] isNumber -- is the given value a number?
			isNumber: function (value) { 
				// "Javascript: The Good Parts", 'NaN', page 105, by Douglas Crockford 
				return typeof value === 'number' && isFinite(value);
			},

			//[OK] is it a real Object? (not null or an Array)
			isObject: function (obj) { 
				// "Javascript: The Good Parts", 'Confusion', page 61, by Douglas Crockford
				// using the simple version for detecting Arrays but flipping the last part 
				// to make sure it is *not* an array.
				return obj && typeof obj === 'object' && obj.constructor !== Array;
			},

			//[OK] is it an array Object?
			isArray: function (value) { 
				// "Javascript: The Good Parts", 'Confusion', page 61, by Douglas Crockford
				// probably don't need the functionality, 
				// but I'm using the version that can detect Arrays made in a different frame or window.
				return value && typeof value === 'object' && typeof value.length === 'number' && 
						typeof value.splice === 'function' && !(value.propertyIsEnumerable('length'));
				// other, simpler version
				/* return value && typeof value === 'object' && value.constructor === Array; */
			},

			//[OK] // is nodes a NodeList object?
			isNodeList: function (nodes) {
				// credit: http://stackoverflow.com/questions/332422/how-do-i-get-the-name-of-an-objects-type-in-javascript
				// 
				var result = Object.prototype.toString.call(nodes);

				if (typeof nodes === 'object' && 
					/^\[object (HTMLCollection|NodeList|Object)\]$/.test(result) && // HTMLCollection/Object must be used in non-webkit browsers.
					nodes.hasOwnProperty('length') &&
					(nodes.length == 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0))) {
					return true;
				}
				return false; //...otherwise...
			},

			//[OK] checks if the object is a cragnon object (true) or not (false)
			isCragnon: function (obj) {
				if (typeof obj === 'object' && obj.constructor &&
					obj.constructor === '[object cragnon]') {
					return true;
				}
				return false;
			},
			// , ...
		};
		// methods for uninitialized cragnon object (e.g., "_." or "cragnon." )
		// methods that would be useful even if you don't have an immediate 
		// need to operate on elements
		cragLib.clone = cragLib.prototype.clone;
		cragLib.isArray = cragLib.prototype.isArray;
		cragLib.isCragnon = cragLib.prototype.isCragnon;
		cragLib.isNodeList = cragLib.prototype.isNodeList;
		cragLib.isNumber = cragLib.prototype.isNumber;
		cragLib.isObject = cragLib.prototype.isObject;
		cragLib.makeCragnon = cragLib.prototype.makeCragnon;
		

	// shortcut so init()'s prototype is the same as cragnon's prototype
	// so when init() is run, you get a new cragnon (cragLib) object
	cragLib.prototype.init.prototype = cragLib.prototype;
	__ = cragLib.prototype; // alias; double-underscore



	window.cragnon = window._ = cragLib;
} (window = window || this));

