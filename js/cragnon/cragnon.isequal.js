(function ($, window, document, undefined) {
	"use strict";

	// $.isEqual()

	$.pt.isEqual = function (thing1, thing2) {
		var type1, type2;

		t1 = $.copy(thing1, {deep: true, decycle: true});
		t2 = $.deCycle(thing2, {deep: true, decycle: true});



	};

// $.copy()
// settings
// .deep -- go deep on the copy : default: false;
// .decycle -- get rid of cyclical references : default: false;
// .level -- how many levels to go down.
//
	$.pt.copy = function (thing, settings) {
		var defaults = {deep: false, decycle: false, level: 1},
			options = $.merge(settings, defaults),
			cpy,
			prop;

		if (options.deep || options.decycle || options.level === 0) {
// 0 is for "infinitly deep"; deep tells it to go deep
// if options.deep === true, options.level = 0;
			options.deep = true;
			options.level = 0;
		}

		switch ($.DearGodWhatIsThatThing(thing)) {
			case "array":

				break;
			case "boolean":
				break;
			case "cragnon":
				break;
			case "date":
				break;
			case "function":
				break;
			case "infinity":
				break;
			case "nan":
				break;
			case "number":
				break;
			case "null":
				break;
			case "object":
				break;
			case "regexp":

				break;
			case "string":
				return thing;
				break;
			case "undefined":
				return undefined;
				break;
			default:
console.log($.DearGodWhatIsThatThing(thing));
				break;
		}



		return cpy;
	};


// returns a string of the type the given thing is.
//
//
//
//
	$.pt.getType = function (thing, settings) {
		var defaults = {strict: true},
			options = $.extend(defaults, settings),
			constructor,
			type;
/*
		if (thing === null) {
			return 'null';
		}
		if (thing === undefined) {
			return 'undefined';
		}
*/
		if (thing !== undefined && thing !== null) {
			constructor = thing.constructor;
		}
		type = typeof thing;
		

// Array
		if ($.isArray(thing)) {
			return 'array';
		}
// Boolean
		if ($.isBoolean(thing)) {
			return 'boolean';
		}
// Cragnon
		if ($.isCragnon(thing)) {
			return 'cragnon';
		}
// Date
		if ($.isDate(thing)) {
			return 'date';
		}
// Function
		if ($.isFunction(thing)) {
			return 'function';
		}
// Infinity
		if ($.isInfinity(thing)) {
			return 'infinity';
		}
// NaN
		if ($.isNaN(thing)) {
			return 'nan';
		}
// Number
		if ($.isNumber(thing)) {
			return 'number';
		}
// Null
		if ($.isNull(thing)) {
			return 'null';
		}

// Object
		if ($.isObject(thing)) {
			return 'object';
		}
// RegExp
		if ($.isRegExp(thing)) {
			return 'regexp';
		}
// String
		if ($.isString(thing)) {
			return 'string';
		}
// Undefined
		if ($.isUndefined(thing)) {
			return 'undefined';
		}

// Unknown? 
		console.dir(thing);
		console.log('constructor: ' + constructor);
		console.log(constructor === Array);
		console.log('type: ' + type);
		return 'unknown';
	};
	$.pt.DearGodWhatIsThatThing = $.pt.getType;
	$.DearGodWhatIsThatThing = $.pt.getType;
	$.getType = $.pt.getType;

}(Cragnon, window, window.document));