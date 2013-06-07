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

    Cragnon Functions to add:
    .when() - Cragnon.when(eventType, func, args)
    exp:
    element.when('clicked', function (e) {
        // do this stuff
    });
    element.on('click', function (e) {
        // do stuff
    });
    

 ***********************************

 */





/** Cragnon base object
 * @visibility: PUBLIC
 *
 * @params
 *  : selector - a CSS selector
 *  : context - default: is window.document; it's where to start looking for "selector"; can either be a CSS Selector, Node, or Cragnon objects
 * @description:
 *      
 *
 *
 *
 *
 * @returns: Cragnon object for chaining
 * @examples
 *     : 
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * !Exceptions: NONE
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
        // make a new object if self is a window object or undefined
        if (self === window || typeof self === 'undefined') {
            self = new Cragnon(selector, context);
        }
        else {
            context = context || doc; // set context
            self.context = context;
            // check if the selector is a string or not
            // string: assume it's a CSS selector
            if (typeof selector === 'string') {
                self = select(selector, context);
            } // array: if selector has a length property, assume it's an Array-like object and use it's elements to make the new Cragnon Object.
            else if (selector && __.isArray(selector)) {
                self.push.apply(self, selector);
            }
        }
        return self;
    },
    __; // 

    // Inherit from Array.
    // TODO: find Array methods that spit out a new Array instead of "this"
    Cragnon.prototype = [];  // window.Array.prototype || new Array also work
    Cragnon.pt = Cragnon.prototype; // .prototype typing shortcut; 
    
    // mark as a Cragnon Object
    Cragnon.prototype.constructor = Cragnon;
    Cragnon.constructor = Cragnon.prototype.constructor;
    Cragnon.context = doc;

    __ = Cragnon; // local, shortcut version "double underscore"
    window.Cragnon = window._ = Cragnon;

} (window.document, window));



/** .extend()
 * 
 * 
 * 
 * 
 */
/* USAGE EXAMPLES
_.extend({},{},{},{},{}, ...); // first object holds named options
// if first item is "falsey", then use default options
_.extend(null,{},{},{},{}, ...);
_.extend(false,{},{},{},{}, ...);
_.extend(0,{},{},{},{}, ...);
_.extend(undefined,{},{},{},{}, ...);


*/
/* ========= INCOMPLETE ========================*/
(function (_, doc, window, undefined) {
    "use strict";
    
    _.extend = function () {
        var self = this,
            defaults = {'deep': false},
            options = arguments[0],
            newThing;
        
        console.log();
        
        if (options === {} || !options) {
            console.log('use option defaults');
        }
        
        return {};
    };
    _.pt.extend = _.extend;

    
} (Cragnon, window.document, window));


/** Cragnon Helper Predicates
  List:
    isArray
    isCragnon
    isObject
    isNull
    isNumber
    isString
    isUndefined
    --------
    isEmpty
        isObjectEmpty
        isArrayEmpty
        isStringEmpty
    --------
    
    
 */
(function (_, doc, window, undefined) {
    "use strict";

    
    /** _.isArray()
     * 
     * 
     * 
     * 
     * 
     * 
     */
    /* ========= INCOMPLETE ========================*/
    _.pt.isArray = function (accused, strictMode) {
    	var strict = (strictMode === true || strictMode === false)? strictMode: true;

    	if (strict) { // Cragnon Objects will return false
    		return (accused instanceof Array && accused.constructor === Array);
    	}
    	else { // Objects that inherit from Array (such as Cragnon Objects) will return true
    		return (accused instanceof Array);
    	}
    };
    _.isArray = _.pt.isArray;


    /** _.isCragnon()
     * 
     * 
     * 
     * 
     * 
     * 
     */
    /* ========= INCOMPLETE ========================*/
 	_.pt.isCragnon = function (accused, strictMode) {
 		var strict = (strictMode === true || strictMode === false)? strictMode: true;

 		if (strict) { // used to check if a variable is an instance of the Cragnon Object
 			return (accused instanceof Cragnon);
 		}
 		else { // used to check if a variable is the Cragnon Object (instance or not)
 			return (accused instanceof Cragnon || accused === Cragnon);
 		}
    };
    _.isCragnon = _.pt.isCragnon;

    /** _.isObject()
     * 
     * 
     * 
     * 
     * 
     */
    /* ========= INCOMPLETE ========================*/
    _.pt.isObject = function (accused, strictMode) {
    	var strict = (strictMode === true || strictMode === false)? strictMode: true;
        // "Javascript: The Good Parts", 'Confusion', page 61, by Douglas Crockford
        // using the simple version for detecting Arrays but flipping the last part 
        // to make sure it is *not* an array.

        if (strict) {
        	return accused && typeof accused === 'object' && accused.constructor !== Array;
    	}
    	else {
    		// will return true for accused Arrays
    		return accused && typeof accused === 'object';
    	}
    };
    _.isObject = _.pt.isObject;

    
} (Cragnon, window.document, window));







/**
 * FFFFF      IIIIIII      NN    N
 * F             I         N N   N
 * FFFF          I         N  N  N
 * F             I         N   N N
 * F          IIIIIII      N    NN
 */



/* Code Section TEMPLATE
(function (_, doc, window, undefined) {
    "use strict";
    
    console.dir(_);
    
    
}(Cragnon, window.document, window));
*/
