/***
// $.extend(options, obj1, obj2[, obj3,...]);
// Adds properties and values to a copy of obj1 with the properties and values in subsequent objects.
// Existing properties' values are overridden if they already exist, added if not.
// Options for only adding properties that don't already exist.
//


// Other names for this function could be:
// evolve 
// mixin 
// inherit 

//
//  $.extend(true, {}, {p: 3, fn: function () {...}, });
//  
//  $.extend(true, 'this', {...}, {...}, {...}, ...);
//
//  $.extend('this', {...}, {...}, {...}, ...);
//
//  $.extend(3, {...}, {...}, {...}, ...);
//
//  $.extend({goDeep: true, howDeep: 5, properties: ["prop1", "prop2", ...]}, {...}, {...}, {...}, ...);
// 
 */
(function ($, doc, window, undefined) {
    "use strict";
    


    $.extend = function () {
        var me = this,
            goDeep = false,
            howDeep = 0, // zero means go as deep as you can.
            validProps = [],
// options is the first argument always. to use defaults pass in false or empty object.
            options,
            thing1 = {}, // 
            thing = {}, // alias used in for loop
            prop,       // used in for in loop
// since the first item is optional, we use this to keep track of what we need to look at.
            argIndex = 0;

// check for options
        if (typeof arguments[argIndex] === 'boolean') {

          if (arguments[argIndex] === true) {

            goDeep = true;
            howDeep = 0;
          }
          else {
            goDeep = false;
            howDeep = 1;
          }
// increment the argIndex to point to the next argument
          argIndex++; 
        }
        else if (typeof arguments[argIndex] === 'number') {

          if (arguments[argIndex]) {

            goDeep = false;
            howDeep = parseInt(arguments[argIndex], 10);
          }
// increment the argIndex to point to the next argument
          argIndex++; 
        }
        else {
// the first 
          if (arguments[argIndex]) {
            options = arguments[argIndex];
            goDeep = options.goDeep || true;
            howDeep = parseInt(options.howDeep, 10) || 0;
          }
// increment the argIndex to point to the next argument
          argIndex++; 
        }


        switch(typeof arguments[argIndex]) {

          case 'string': 
// not currently checking if arguments[argIndex] === 'this'; could be '' (empty string)
            thing1 = me;
// should be 'this' then
          default:
// Assume the thing is an object/function
            thing1 = arguments[argIndex];
        }

// argIndex should increment; at the moment it points to the first object, which we don't care about.
// loop through the arguments.
        for (argIndex++; argIndex < arguments.length; argIndex++) {

          thing = arguments[argIndex];
// loop through the properties
          for (prop in thing) {

            if (thing.hasOwnProperty(prop)) {
// copy/override the properties
              thing1[prop] = thing[prop];
            }
          } 
        }
        return thing1;
    };
    $.pt.extend = $.extend;


// Other names for this function that might be useful?
// evolve, inherit for inheriting
// mixin used in other libraries
    $.pt.evolve = $.extend;
    $.pt.inherit = $.extend;
    $.pt.mixin = $.extend;

} (Cragnon, window.document, window));   









