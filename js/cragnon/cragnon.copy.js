(function ($, doc, window, undefined) {
    "use strict";

// $.copy()
// settings
// .deep -- go deep on the copy : default: false;
// .decycle -- get rid of cyclical references : default: false;
// .level -- how many levels to go down.
//
	$.pt.copy = function (thing, settings) {
		var defaults = {deep: false, decycle: false, level: 1},
			options = $.merge(defaults, settings || {}),
			cpy = {},
			prop,
			index = 0,
			simpleType,
			strictType;
// options
		if (options.deep || options.decycle || options.level === 0) {
// 0 is for "infinitly deep"; deep tells it to go deep
// if options.deep === true, options.level = 0;
			options.deep = true;
			options.level = 0;
		}
//console.log('switch!');
		simpleType = $.dearGodWhatIsThatThing(thing, {strict: false});
		strictType = $.dearGodWhatIsThatThing(thing);
		switch (simpleType) {
			case "array":
				cpy = [];
				for (index = 0; index < thing.length; index++) {
// if options.level === 0, then options.deep must be true; 
// otherwise, options.level should be greater than 0 (1 or above)					
					if ((options.deep && options.level === 0) || options.level > 0) {
// $.merge() always copies.
						cpy[index] = $.copy(thing[index], $.merge(options, {level: (options.level-1)}));
					}
					else {
console.dir(options);
console.log('^options');
// if we are too low, just output the strict type
						cpy[index] = strictType;
					}
				}
				break;
			case "object":
				cpy = {};
				for (prop in thing) {
// if options.level === 0, then options.deep must be true; 
// otherwise, options.level should be greater than 0 (1 or above)					
					if ((options.deep && options.level === 0) || options.level > 0) {
// $.merge() always copies.
						cpy[prop] = $.copy(thing[prop], $.merge(options, {level: (options.level-1)}));
					}
					else {
console.dir(options);
console.log('^options');
// if we are too low, just output the strict type
						cpy[prop] = strictType;
					}
				}
				break;
			default:
				cpy = thing;
				break;
		}

		return cpy;
	};
	$.copy = $.pt.copy;

}(Cragnon, window, window.document));