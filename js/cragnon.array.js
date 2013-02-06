/**
 * cragnon.js - inherits from Array Object
 * version: 0.0.1



 ***********************************
	Array Methods that need to be overridden to work with Cragnon because they return new Arrays
	X concat
	- 
 ***********************************
 	TODO: 
 	Select/Find:
 	- Filter out duplicates. 
 	- Filter out previous elements.
 ***********************************

 */
(function (doc, window, undefined) {
	"use strict";

	/** CRAGNON CONSTRUCTOR FUNCTION
	 * @visibility: PUBLIC
	 * @params
	  	: selector - A CSS Selector
	 		@default: undefined
	  	: context - Change the Context of the initial find.
	 		@default: window.document

	 * @deprecated: 
	 * @description: 
	 * @returns: 
	 * @examples
	  	: // make an empty object 
	  		var crag = _();

	  	: //  The next two should be the same
	  		var crag = _('#someElementID .someClass');

	  	: // This is the same as the above.
			var elements = document.querySelectorAll('#someElementID .someClass');
			var crag = _(elements);

	 *
	 * !Exceptions: NONE
	 */
	var Cragnon = function (selector, context) {
		var self = this;
		console.log('*********** Cragnon Start **************');

		// make a new object if self is a window object or undefined
		if (self === window || typeof this === 'undefined') {
			self = new Cragnon(selector, context);
		}
		context = context || doc; // set context
		self.context = context;

		// check if the selector is a string or not
		// string: assume it's a CSS selector
		if (typeof selector === 'string') {
			console.log('selector: STRING: ' + selector);
			self = select(selector, context);
		} // array: if selector has a length property, assume it's an Array-like object and use it's elements to make the new Cragnon Object.
		else if (selector && selector.length && selector.length > 0) {
			console.log('selector: ARRAY: ');
			console.dir(selector);
			self.push.apply(self, selector);
		}
		else {
			console.log('selector: ' + typeof selector);
		}


		if (context === window.document) {
			console.log('context: window.document');
		}
		else {
			console.log('context: ');	
			console.dir(context);
		}



		console.log('*********** Cragnon End **************');
		return self;
	},
	__;

	// Inherit from Array.
	// TODO: find Array methods that spit out a new Array instead of "this"
	Cragnon.prototype = [];  // window.Array.prototype || new Array also work

	 // mark as a Cragnon Object
	Cragnon.prototype.constructor = '[object Cragnon]';
	Cragnon.constructor = Cragnon.prototype.constructor;
	Cragnon.context = doc;

	/* *************************************** */
	/* Below Lies the Cragnon Object methods. */
	/* ************************************* */

	/* 
	Method List
	-------------------------------------------
	.clone()
	.concat() - overrides Array.concat()
	.filter() - overrides Array.filter()
	.find()
	select() - local function
	.isArray()
	.isCragnon()
	.isNumber()
	.isObject()
	.isString()
	.map() - overrides Array.map()
	.nodeListToArray()
	.nodeListToCragnon()
	.removeDuplicateNodes()
	.slice() - overrides Array.slice()
	============================================
	*/


	/* Cragnon.clone(obj) || Cragnon.clone()
		$description: clones given object or (if undefined) the Cragnon object (if an instance of)
		@parameters: obj || this
		#returns Cragnon object
	*/
	/** 
	 * @visibility: PUBLIC||PRIVATE
	 *
	 * @params
	 * 	: 
	 * @deprecated: 
	 * @description: 
	 * @returns: 
	 * @examples
	 * 	: 
	 *
	 * !Exceptions: NONE
	 */
	Cragnon.prototype.clone = function (obj) {
		var obj = obj || this,
			copy;

		if (typeof this === 'undefined' || this === null) {
			return this;
		}

		copy = copyObject(obj);

		/*

			$Description: copies Cragnon objects
			@Parameters:
			#Returns:
			&Usage:
		*/
		function copyCragnon(crag) {
			var copy,
				point = [],
				cragIndex = 0,
				item = '',
				newItem = {};

			copy = new Cragnon(crag);

			for (cragIndex = 0; cragIndex < crag.length; cragIndex++) {
				copy[cragIndex] = copyObject(crag[cragIndex]);
			}
			for (item in crag) {
				if (crag.hasOwnProperty(item)) {
					console.log(item);
					console.log(crag[item]);
					newItem = copyObject(crag[item]);
					console.log('newItem: ' + newItem);
					copy[item] = newItem;
				}
			}

			return copy;
		} // end copyPath

		/*

			$Description: copies generic objects
			@Parameters:
			#Returns:
			&Usage:
		*/
		function copyObject(obj) {
			var copy,
				prop,
				value,
				index;
			

			if (obj === null || typeof obj === 'undefined' || typeof obj !== 'object') {
				console.log('Not an Referenced Type!');
				// NOT null, undefined, Object or Object Array.
				// Should be Number, String, or Boolean;
				// these aren't passed by reference (odd that strings aren't but whatever) so just return them.
				return obj;
			}

			if (obj instanceof Cragnon) {
				console.log('Cragnon!');
				copy = copyCragnon(obj);
				return copy;	
			}

			if (obj && obj.nodeType) {
				console.log('NODE!');
				if (obj === window.document) {
					return window.document;
				}
				return obj.cloneNode(false); // not deep; default is deep, which is really heavy.
			}

			if (__.isArray(obj, true)) {
				console.log('Array!');
				copy = []; // initialize a new empty Array Object

				for (index = 0; index < obj.length; index++) {
					copy[index] = copyObject(obj[index]);
				}
				return copy;
			}

			if (__.isObject(obj)) {
				console.log('Object!');
				copy = {}; // initialize a new empty Object

				for (prop in obj) {
					if (obj.hasOwnProperty(prop)) {
						copy[prop] = copyObject(obj[prop]);
					}
				}
				return copy;
			}
			return undefined; // be explicit 
		} // end copyObject(obj)

		return copy;
	};
	Cragnon.clone = Cragnon.prototype.clone;


	/** .concat()
	 * @visibility: PUBLIC
	 *
	 * @params
	 * 	: 
	 * @deprecated: 
	 * @description
	 	: returns new Cragnon Object, which is a clone of "this" + the elements in args
	 	: Returns a new Cragnon comprised of this Cragnon joined with elements from given Cragnon/Array-like object.

	 * @returns: Cragnon Object
	 * @examples
	 * 	: 
	 *
	 * !Exceptions: NONE
	 */
	/*Cragnon.prototype.concat = function () {
		var self = this,
			crag = __.clone(self),
			argsIndex = 0,
			arg = {}, // will be a node
			cragIndex = 0;

		for (argsIndex = 0; argsIndex < arguments.length; argsIndex++) {
			arg = arguments[argsIndex];
			if (arg && arg.nodeType) {
				crag[crag.length+cragIndex] = arg.cloneNode(false); // false : not a deep copy; default is deep, which is really heavy.
				cragIndex++; // use a different variable for the index incase arguments's elements are not Nodes (we don't want to skip an index/numbered property)
			}
		}

		return crag;
	};*/
	Cragnon.prototype.concat = function () {
		var self = this,
			crag = __.clone(self),
			argsIndex = 0;

	 	console.log('=====================================');
	 	console.log('concat method');
	 	console.log('=====================================');
		console.log('');
		console.log('self: ');
		console.dir(self);
		console.log('crag: ');
		console.dir(crag);
		console.log('arguments.length: ' + arguments.length);
		/**
		 * We don't want the arguments Array pushed, we want the items in the arguments Array pushed.
		 * 
		 */
		for (argsIndex = 0; argsIndex < arguments.length; argsIndex++) {
			console.log('Loop Index: ' + argsIndex);
			console.log('Items to push this round: ');
			console.dir(arguments[argsIndex])
			console.log('...');
			console.log('crag:before ');
			console.dir(crag);
			crag.push.apply(crag, arguments[argsIndex]);
		}
		console.log('crag:after');
		console.dir(crag);
	 	console.log('/=====================================');
		return crag;
	};
	Cragnon.concat = Cragnon.prototype.concat;
	

	/*
	Cragnon.map()
		$Description: Same as Array map only returns Cragnon object instead of Array
		@Parameters: 
			callback: function to map to the Cragnon
			thisArg: this context for callback
		#Returns: Cragnon object
		&Usage: 
		var pathObject.map(parseFloat);
	*/
	/** 
	 * @visibility: PUBLIC||PRIVATE
	 *
	 * @params
	 * 	: 
	 * @deprecated: 
	 * @description: 
	 * @returns: 
	 * @examples
	 * 	: 
	 *
	 * !Exceptions: NONE
	 */
	Cragnon.prototype.map = function (callback, thisArg) {
		var self = this,
			crag;

		crag = new Cragnon([].map.call(self, callback, thisArg));

		return crag;
	};
	Cragnon.map = Cragnon.prototype.map;


	/* 
	Cragnon.filter()
		$description: overridden version of Array.filter()
		@parameters: 
			callback: function to use as a filter
			thisObject: this context for the callback function
		#returns: new Cragnon object with filter applied to each part
	*/
	/** 
	 * @visibility: PUBLIC||PRIVATE
	 *
	 * @params
	 * 	: 
	 * @deprecated: 
	 * @description: 
	 * @returns: 
	 * @examples
	 * 	: 
	 *
	 * !Exceptions: NONE
	 */
	Cragnon.prototype.filter = function (callback, thisObject) {
		var self = this,
			crag;

		crag = new Cragnon([].filter.call(self, callback, thisObject));

		return crag;
	};

	


	/** find()
	 * @visibility: PUBLIC||PRIVATE
	 * @params
	 * 	: selector - the CSS selector used to find elements
	 * @description: 
	 * @returns:
	 * @examples
	 * : var inputFields = _('form').find('input[type="text"]');
	 * 
	 * !Exceptions: NONE
	 * 
	 */
	Cragnon.find = function (selector) {
		var self = this,
			elements = [],
			element = 0,
			crag = {};

	 	console.log('=====================================');
	 	console.log('find method');
	 	console.log('=====================================');

		if (self.length > 0) {
			// if the Cragnon object has elements, 
			// use each as the context of the find, 
			// creating a new Cragnon object with the elements as the context of the new cragnon objects
			console.log('self has elements');
			elements = select(selector, self);
			console.log('self: ');
			console.dir(self);
			console.log('select(' + selector + ', self)');
			console.log('elements: ');
			console.dir(elements);
			crag = __(elements);
			console.log('crag: ');
			console.dir(crag);
		}
		else { // context is document
			console.log('self has *NO* elements');
			console.log('select(' + selector + ')');
			elements = select(selector);
			console.log('elements: ');
			console.dir(elements);
			crag = __(elements);
			console.log('crag: ');
			console.log(crag);
		}
	 	console.log('/ FIND =====================================');
		return crag;
	};
	Cragnon.prototype.find = Cragnon.find;



	/** FUNCTION select()
	 * @visibility: PRIVATE
	 * @params
	 * 	: selector
	 * @deprecated: 
	 * @description: 
	 * @returns: Cragnon
	 * @examples
	 * 	: 
	 * !Exceptions: NONE
	 */
	 function select(selector, context) {
	 	var crag = [], //new Cragnon(),
	 		elements = [],
	 		contextItem = 0,
	 		selectedElements = {};

	 	console.log('=====================================');
	 	console.log('select function');
	 	console.log('=====================================');
	 	console.log('');
	 	
	 	if (context === window.document || typeof context === 'undefined') {
	 		console.log('context is undefined or is window.document');
	 		console.dir(selector);
			console.log('');
			elements = doc.querySelectorAll(selector);
			console.dir(elements);
			crag = __.nodeListToCragnon(elements);
		}
		else if (__.isCragnon(context)) {
			console.log('Context is a Cragnon Object.');

			crag.context = context; // the context of the new Cragnon Object is the old Cragnon Object
			for (contextItem = 0; contextItem < context.length; contextItem++) {
				console.log('cragnon item: ' + contextItem);
				console.dir(context[contextItem]);
				console.log('');
				selectedElements = select(selector, context[contextItem]);
				console.dir(selectedElements);
				crag = crag.concat(selectedElements); // concat returns a new Cragnon object
			}
		}
		else if (context && context.nodeType) {
			console.log('context is a node (element).');
			console.log('context.querySelectorAll(' + selector + ')');
			elements = context.querySelectorAll(selector);
			console.log('elements :');
			console.dir(elements);
			crag = crag.concat(elements);
		}
		else {
			console.log('');
			console.log('========================= !!!! ===========================');
			console.log('');
		}
		console.log('typeof context: ' + typeof context);
	 	console.log('/ select =====================================');
		console.log('');
	 	return crag;
	 }
	 Cragnon.select = select;



	/** 
	 * @visibility: PUBLIC||PRIVATE
	 *
	 * @params
	 * 	: 
	 * @deprecated: 
	 * @description: 
	 * @returns: 
	 * @examples
	 * 	: 
	 *
	 * !Exceptions: NONE
	 */
	Cragnon.prototype.isArray = function (value, strict) { 
		var strict = strict || false; // default to non-strict if strict is undefined
		// "Javascript: The Good Parts", 'Confusion', page 61, by Douglas Crockford
		// probably don't need the functionality, 
		// but I'm using the version that can detect Arrays made in a different frame or window.

		return (value instanceof Array);

		// the code below stopped working for some reason on a Cragnon that was altered using splice....interesting.
		// return (value && typeof value === 'object' && typeof value.length === 'number' && 
		//	typeof value.splice === 'function' && !(value.propertyIsEnumerable('length')) && 
		//	(strict?(!__.isPath(value)):true));
		// strict part: if strict: if value is a Cragnon return false; else if strict is false just return true;
		
		// other, simpler version can't work across windows or frames
		// return value && typeof value === 'object' && value.constructor === Array;
	};
	Cragnon.isArray = Cragnon.prototype.isArray;



	/** METHOD :: isCragnon
	 * @visibility: PUBLIC
	 * @params
	 * 	: accused - the item to test for Cragnon-ness
	 * @description
	 	: checks if the given item is a Cragnon object or not
	 * @returns: true||false
	 * @examples:
		: 
		var someObject = {"someProperty": 345},
			cragnonObject = _();

		if (_.isCragnon(someObject)) {
			//... do something
		}
		if (_.isCragnon(cragnonObject)) {
			//... do something
		}

		:

	 * !Exceptions: NONE
	 */
	Cragnon.prototype.isCragnon = function (accused) {

		if (typeof accused !== 'undefined' && (typeof accused === 'object' || typeof accused === 'function') && 
				accused !== null && accused.constructor && accused.constructor === __.constructor) {
			return true
		}
		if (accused instanceof Cragnon) {
			return true;
		}
		return false;
	};
	Cragnon.isCragnon = Cragnon.prototype.isCragnon;


	/* 
	Cragnon.isNumber()
		$Description: tells you if the value given is a number or not.
		@Parameters: 
			: accused - the value to be questioned
		#Returns: boolean (true/false)
		&Usage: var isANumber = Cragnon.isNumber(0);
	*/
	/** 
	 * @visibility: PUBLIC||PRIVATE
	 *
	 * @params
	 * 	: 
	 * @deprecated: 
	 * @description: 
	 * @returns: 
	 * @examples
	 * 	: 
	 *
	 * !Exceptions: NONE
	 */
	Cragnon.prototype.isNumber = function (accused) { 
		// "Javascript: The Good Parts", 'NaN', page 105, by Douglas Crockford 
		return typeof accused === 'number' && isFinite(accused);
	};
	Cragnon.isNumber = Cragnon.prototype.isNumber;



	/*
	Cragnon.isObject()
		$Description: tells if the given value is a strict Object or not; and NOT an Array Object
		@Parameters:
			value: the value to be questioned
		#Returns:
		&Usage:
	*/
	/** 
	 * @visibility: PUBLIC||PRIVATE
	 *
	 * @params
	 * 	: 
	 * @deprecated: 
	 * @description: 
	 * @returns: 
	 * @examples
	 * 	: 
	 *
	 * !Exceptions: NONE
	 */
	Cragnon.prototype.isObject = function (value) { 
		// "Javascript: The Good Parts", 'Confusion', page 61, by Douglas Crockford
		// using the simple version for detecting Arrays but flipping the last part 
		// to make sure it is *not* an array.
		return value && typeof value === 'object' && value.constructor !== Array;
	};
	Cragnon.isObject = Cragnon.prototype.isObject;




	/* 
	Cragnon.isString()
		$Description: just to be complete; tells you if the value given is a number or not.
		@Parameters: 
			: accused - the value to be questioned
		#Returns: boolean (true/false)
		&Usage: var isAString = Cragnon.isString('0');
	*/
	/** 
	 * @visibility: PUBLIC||PRIVATE
	 *
	 * @params
	 * 	: 
	 * @deprecated: 
	 * @description: 
	 * @returns: 
	 * @examples
	 * 	: 
	 *
	 * !Exceptions: NONE
	 */
	Cragnon.prototype.isString = function (accused) { 
		return typeof accused === 'string';
	};
	Cragnon.isString = Cragnon.prototype.isString;



	
	/** FUNCTION nodeListToArray(nodeList)
	 * @visibility: PUBLIC
	 * @params
	 * 	: nodeList
	 * @deprecated: 
	 * @description: 
	 * @returns: 
	 * @examples
	 * 	: 
	 *
	 * !Exceptions: NONE
	 */
	//[OK] NodeLists aren't regular arrays so we copy the elements to a clean array.
	Cragnon.nodeListToArray = function(nodeList) {
		var i = 0, 
			newArray = [];

		for (i = 0; i < nodeList.length; i++) {
			newArray.push(nodeList[i]);
		}
		newArray = __.removeDuplicateNodes(newArray);

		return newArray;
	};
	Cragnon.prototype.nodeListToArray = Cragnon.nodeListToArray;

	



	/** FUNCTION nodeListToCragnon(nodeList)
	 * @visibility: PUBLIC
	 * @params
	 * 	: nodeList
	 * @deprecated: 
	 * @description: 
	 * @returns: 
	 * @examples
	 * 	: 
	 *
	 * !Exceptions: NONE
	 */
	Cragnon.nodeListToCragnon = function(nodeList) {
		var i = 0, 
			newCragnon = new Cragnon();

		for (i = 0; i < nodeList.length; i++) {
			newCragnon.push(nodeList[i]);
		}
		newCragnon = __.removeDuplicateNodes(newCragnon);

		return newCragnon;
	};
	Cragnon.prototype.nodeListToCragnon = Cragnon.nodeListToCragnon;


	/** FUNCTION nodeListToArray(nodeList)
	 * @visibility: PUBLIC
	 * @params
	 * 	: nodeList
	 * @deprecated: 
	 * @description: pushes each item in the array type object to the Cragnon Object. 
	 * really used incase I want a way to push complex structures to a Cragnon Object later.
	 * @returns: 
	 * @examples
	 * 	: 
	 *
	 * !Exceptions: NONE
	 */
	Cragnon.pushToCragnon = function(arrayTypeObject) {
		var self = this,
			i = 0;

		for (i = 0; i < arrayTypeObject.length; i++) {
			self.push(arrayTypeObject[i]);
		}
		self = __.removeDuplicateNodes();

		return self;
	};
	Cragnon.prototype.nodeListToCragnon = Cragnon.nodeListToCragnon;



	/** FUNCTION removeDuplicateNodes(elementArray)
	 * @visibility: PUBLIC
	 * @params
	 * 	: elementArray
	 * @deprecated: 
	 * @description: 
	 * @returns: 
	 * @examples
	 * 	: 
	 *
	 * !Exceptions: NONE
	 */
	Cragnon.removeDuplicateNodes = function(elementArray) {
		/* TEST */
		var i = 0,
			k = 0,
			e, // elements; same as nodes really, just needed a different name
			n; // nodes

		for (i = 0; i < elementArray.length; i++) {
			e = elementArray[i]; // element

			for ( ; k < elementArray.length; k++) {
				
				if (i !== k) { // make sure we're not looking at the same index
					n = elementArray[k]; // node

					if (n === e) {
						console.log('Samesies!');
						console.log('i[' + i + ']/k[' + k + ']');
						console.dir(e);
						console.dir(n);
						elementArray.splice(i, 1);
					}
				}
			}
			k = 0;
		}
		return elementArray;
	};
	Cragnon.prototype.removeDuplicateNodes = Cragnon.removeDuplicateNodes;


	/*
	Cragnon.slice
		$description: "Returns a one-level deep copy of a portion of an array" - MDN
		@parameters:
			begin: Number (int) to being splice of Cragnon
			end: Number (int) to end (inclusive) splice of Cragnon
		#returns: new Cragnon Object
	*/	
	/** 
	 * @visibility: PUBLIC||PRIVATE
	 *
	 * @params
	 * 	: 
	 * @deprecated: 
	 * @description: 
	 * @returns: 
	 * @examples
	 * 	: 
	 *
	 * !Exceptions: NONE
	 */
	Cragnon.prototype.slice = function (begin, end) {
		var self = this,
			crag;

		crag = new Cragnon([].slice.call(self, begin, end), self.context);

		return crag;
	};


	/** 
	 * @visibility: PUBLIC||PRIVATE
	 *
	 * @params
	 * 	: 
	 * @deprecated: 
	 * @description: 
	 * @returns: 
	 * @examples
	 * 	: 
	 *
	 * !Exceptions: NONE
	 */

	__ = Cragnon; // local, shortcut version "double underscore"
	window.Cragnon = window._ = Cragnon;

} (window.document, window));