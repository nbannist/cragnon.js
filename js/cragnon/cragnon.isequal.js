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
			type2 = $.dearGodWhatIsThatThing(thing2),
			decycledCopyThing1,
			decycledCopyThing2;


			function areTheseEqual(value1, value2) {
				var type1 = $.dearGodWhatIsThatThing(value1, {strict: false}), 
					type2 = $.dearGodWhatIsThatThing(value2, {strict: false}),
					prop,
					index;

				if (type1 === type2) {
					if (type1 === 'object') {
						for (prop in value1) {
							if (value1.hasOwnProperty(prop) && value2.hasOwnProperty(prop)) {
								type1 = $.dearGodWhatIsThatThing(value1[prop], {strict: false}); 
								type2 = $.dearGodWhatIsThatThing(value2[prop], {strict: false});
								if (type1 === type2) {
									if (type1 === 'object' || type1 === 'array') {
// Arrays or Objects
										return (areTheseEqual(value1[prop], value2[prop]));
									}
									else if (value1[prop] === value2[prop]) {
// Simple value
										return true;
									}
									else {
										return false;
									}
								}
								else {
									return false;
								}
							}
							else {
								return false;
							}
						}
					}
					else if (type1 === 'array') {
// we're working with an array, folks!
						if (value1.length === value2.length) {
// make sure the lengths are the same. if they are different then arrays can't be the same
							for (index = 0; index < value1.length; index++) {
// loopsy loopsy loo
								if (value1[index] !== undefined && value2[index] !== undefined) {
// what if the values at an index is undefined?
// get the types
									type1 = $.dearGodWhatIsThatThing(value1[index], {strict: false}); 
									type2 = $.dearGodWhatIsThatThing(value2[index], {strict: false});

									if (type1 === type2) {
// if the types are the same, we might have a winner.
										if (type1 === 'object' || type1 === 'array') {
// Arrays or Objects
											return (areTheseEqual(value1[index], value2[index]));
										}
										else if (value1[index] === value2[index]) {
// Simple value
											return true;
										}
										else {
											return false;
										}
									}
									else {
										return false;
									}
								}
								else {
console.log('value1[' + index + '] || value2[' + index + '] === undefined: ' + value1[index]);
									return false;
								}
							}
						}
						else {
console.log('lengths not equal');
							return false;
						}
					}
					else if (type1 === 'simple') {
// simple values.
console.log('simple values');
						if (value1 === value2) {
// values are equal
							return true;
						}
// return false otherwise
						return false;
					}
					else {
console.log('type unknown...what to do?');
						return false;
					}
				}
				else {
					return false;
				}
			}




// easy check, if they are of different types, then they are not equal.
		if (type1 === type2) {
// split for objects, arrays, and simple values.
// only need to check one of the objects if they are the same
			if (type1 === 'simple') {
// simple values
				return (thing1 === thing2)? true : false;
			}
			else {
// simple values
				decycledCopyThing1 = $.copy(thing1);
				decycledCopyThing2 = $.copy(thing2);
				return (areTheseEqual(decycledCopyThing1, decycledCopyThing2));
			}
		}
// return false for things that aren't the same type.		
		return false;
	};
	$.pt.areEqual = $.pt.isEqual;

	$.isEqual = $.pt.isEqual;
	$.areEqual = $.pt.isEqual;
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