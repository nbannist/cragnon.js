(function ($, doc, window, undefined) {
    "use strict";
    

  $.cycleaned = function (obj)




  $.equal = function (thing1, thing2) {
	var me = this,

		objects = [],
		paths = [],


/**
 Okily, if the item is an object or an array, then we need to make sure it's not cyclical (has circular references).
 
 Both thing1 and thing2 need to be cleaned of circular references.

 
 
 
**/

		t1, // 
		t2; // 



	




//console.log('$.equal(' + thing1 + ', ' + thing2 + ');');

	if (me.whatType(thing1) === me.whatType(thing2)) {
		
		if (me.whatType(thing1) === 'object') {
//console.log('object');
			for (prop in thing1) {

				if ((thing1.hasOwnProperty(prop) && thing2.hasOwnProperty(prop)) || 
					(!thing1.hasOwnProperty(prop) && !thing2.hasOwnProperty(prop))) {
// if they both have or both don't have the property in question
//console.log('hasOwn true;');
					return true;
				}
				else {
//console.log('hasOwn false;');
					return false;
				}
			}
//console.log('object default: return true');
			return true;
		}
		else if (me.whatType(thing1) === 'array') {
			
		}
		else {
//console.log('types not object or array');
			if (thing1 === thing2) {
//console.log('thing1 and thing2 are equal');
				return true;
			}
			else {
//console.log('thing1 and thing2 are NOT equal');
				return false;
			}
		}
	}
	else {
//console.log('types not equal');
		return false;
	}
  };
    
}(Cragnon, window.document, window));

