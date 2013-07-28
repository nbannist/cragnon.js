(function ($, window, document, undefined) {
	"use strict";

// $.isEqual()
// isEqual relies on .copy to get rid of circular references.
// isEqual is recursive so with objects with a circular reference, 
// you'll get an infinite loop.
// 
	$.pt.isEqual = function (thing1, thing2) {
console.log('isEqual');
		var type1 = $.dearGodWhatIsThatThing(thing1), 
			type2 = $.dearGodWhatIsThatThing(thing2);

// easy check, if they are of different types, then they are not equal.
		if (type1 === type2) {
// split for objects, arrays, and simple values.
// only need to check one of the objects if they are the same
			if (type1 === 'object') {
// objects
				console.log('Objects may have circular references. abort.');
				return false; // TEMP
				t1 = $.copy(thing1, {deep: true, decycle: true});
				t2 = $.copy(thing2, {deep: true, decycle: true});

			}
			else if (type1 === 'array') {
// array objects
				console.log('Arrays may have circular references. abort.');
				return false; // TEMP
				t1 = $.copy(thing1, {deep: true, decycle: true});
				t2 = $.copy(thing2, {deep: true, decycle: true});

			}
			else {
// simple values
				if (thing1 === thing2) {
// simply check if they are strictly equal
					return true;
				}
				return false;
			}
		}
// return false for things that aren't the same type.		
		return false;
	};

/*



// returns a string of the type the given thing is.
//
//
//
//
	$.pt.getType = function (thing, settings) {
		var defaults = {strict: true}, // gives back specific types; false will only return (simple, array, or object)
			options = $.extend(defaults, settings),
			constructor,
			type,
			strictType,
			simpleType;

// Array
		if ($.isArray(thing)) {
			simpleType = 'array';
			strictType = 'array';
			return (options.strict)? strictType : simpleType;
		}
// Boolean
		if ($.isBoolean(thing)) {
			simpleType = 'simple';
			strictType = 'boolean';
			return (options.strict)? strictType : simpleType;
		}
// Cragnon
		if ($.isCragnon(thing)) {
			simpleType = 'array';
			strictType = 'cragnon';
			return (options.strict)? strictType : simpleType;
		}
// Date
		if ($.isDate(thing)) {
			simpleType = 'object';
			strictType = 'date';
			return (options.strict)? strictType : simpleType;
		}
// Function
		if ($.isFunction(thing)) {
			simpleType = 'object';
			strictType = 'function';
			return (options.strict)? strictType : simpleType;
		}
// Infinity
		if ($.isInfinity(thing)) {
			simpleType = 'simple';
			strictType = 'infinity';
			return (options.strict)? strictType : simpleType;
		}
// NaN
		if ($.isNaN(thing)) {
			simpleType = 'simple';
			strictType = 'nan';
			return (options.strict)? strictType : simpleType;
		}
// Number
		if ($.isNumber(thing)) {
			simpleType = 'simple';
			strictType = 'number';
			return (options.strict)? strictType : simpleType;
		}
// Null
		if ($.isNull(thing)) {
			simpleType = 'simple';
			strictType = 'null';
			return (options.strict)? strictType : simpleType;
		}

// Object
		if ($.isObject(thing)) {
			simpleType = 'object';
			strictType = 'object';
			return (options.strict)? strictType : simpleType;
		}
// RegExp
		if ($.isRegExp(thing)) {
			simpleType = 'object';
			strictType = 'regexp';
			return (options.strict)? strictType : simpleType;
		}
// String
		if ($.isString(thing)) {
			simpleType = 'simple';
			strictType = 'string';
			return (options.strict)? strictType : simpleType;
		}
// Undefined
		if ($.isUndefined(thing)) {
			simpleType = 'simple';
			strictType = 'undefined';
			return (options.strict)? strictType : simpleType;
		}

// Unknown? 

// find the type and constructor of thing (where appropriate)
		if (thing !== undefined && thing !== null) {
			constructor = thing.constructor;
		}
		type = typeof thing;
// if we get this far, output the info.
		console.dir(thing);
		console.log('constructor: ' + constructor);
		console.log(constructor === Array);
		console.log('type: ' + type);
		return 'unknown';
	};
	$.pt.dearGodWhatIsThatThing = $.pt.getType;
	$.dearGodWhatIsThatThing = $.pt.getType;
	$.getType = $.pt.getType;
*/

}(Cragnon, window, window.document));