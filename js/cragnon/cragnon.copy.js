(function ($, doc, window, undefined) {
    "use strict";

// $.copy()
// settings
// .deep -- go deep on the copy : default: false;
// .decycle -- get rid of cyclical references : default: false;
// .level -- how many levels to go down.
//
	$.pt.copy = function (thing, settings) {
		var defaults = {deep: true, decycle: true, retrocycle: true, level: 0},
			options = $.merge(1, defaults, settings || {}), // merege is for single level, shallow, copies
			cpy = {},
			parsed,
			prop,
			index = 0,
			simpleType,
			strictType;
// options

		if (options.level > 0) {
// if options.level > 0, then we don't want to go deep, 
// and we don't want to decycle
			options.deep = false;
			options.decycle = false;
		}


		if (options.deep || options.decycle || options.level === 0) {
// 0 is for "infinitly deep"; deep tells it to go deep
// if options.deep === true, options.level = 0;
			options.deep = true;
			options.level = 0;
			options.decycle = true;
			options.retrocycle = true;
		}

		if (options.deep && options.decycle && options.level === 0) {
// if the options are right, decycle instead of copy
			if (options.retrocycle === undefined || options.retrocycle === true) {
// besure to retrocycle to get the full object back...
				cpy = JSON.retrocycle(JSON.decycle(thing));
			}
			else {
// unless we are going to compare them with $.isEqual(...)
				cpy = JSON.decycle(thing);
			}
			return cpy;
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
					simpleType = $.dearGodWhatIsThatThing(thing[index], {strict: false});
					strictType = $.dearGodWhatIsThatThing(thing[index]);
					if (simpleType === 'simple') {
						cpy[index] = thing[index];
					}
					else {
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
				}
				break;
			case "object":
				cpy = {};
				for (prop in thing) {
// if options.level === 0, then options.deep must be true; 
// otherwise, options.level should be greater than 0 (1 or above)				
					simpleType = $.dearGodWhatIsThatThing(thing[prop], {strict: false});
					strictType = $.dearGodWhatIsThatThing(thing[prop]);
					if (simpleType === 'simple') {
						cpy[prop] = thing[prop];
					}
					else {			
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