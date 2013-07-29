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
    
// extend()
// e.g., extend({...},{...});         // uses defaults; just mashes the two obejects together.
// e.g., extend(true, {...}, {...});  // same as above
// e.g., extend(false, {...}, {...}); // only goes one level down; shallow copy.
// e.g., extend(5, {...}, {...});     // goes at most, 5 levels deep for the copy.
// 
    $.extend = function () {
        var me = this,
            defaults = {deep: true, level: 0, nonDestructive: true}, // sounds like a middle school joke.
            validProps = [], 
// options is the first argument always. to use defaults pass in false or empty object.
            options, 
            thing1 = {}, // 
            thing = {}, // alias used in for loop
            prop,       // used in for in loop
            index,
// since the first item is optional, we use this to keep track of what we need to look at.
            argIndex = 0,
            simpleType,
            strictType;

// check for options
        if (typeof arguments[argIndex] === 'boolean') {
// boolean for specifiying if it should be deep
          if (arguments[argIndex] === true) {
// true is for deep
            options = $.merge(defaults, settings);
            options.deep = true;
            options.level = 0;
          }
          else {
// false is for shallow; default level is 1
// to specify a different level, use a number instead of false;
            options = $.merge(defaults, settings);
            options.deep = false;
            options.level = 1;
          }
// increment the argIndex to point to the next argument
          argIndex++; 
        }
        else if (typeof arguments[argIndex] === 'number') {
// specifies the number of levels deep into the object/array to go;
// change the options accordingly
          options = $.merge(defaults, settings);
          options.deep = false;
          options.level = parseInt(arguments[argIndex], 10);
// increment the argIndex to point to the next argument
          argIndex++; 
        }
        else { 
// no options given; use defaults
          options = defaults;
        }

        switch(typeof arguments[argIndex]) {
// if it's a string should be 'this' || '' (empty string) meaning extend this object; Cragnon
          case 'string':
// not currently checking if arguments[argIndex] === 'this'; could be '' (empty string)
            if (options.nonDestructive) {
// non destructive; make a copy before merge/extend              
              thing1 = $.copy(me);
            }
            else {
// destructive: mutates input object/array because they are passed by reference, not value
              thing1 = me;
            }
// default is to look at the first item in the arguments "Array"
          default:
// Assume the thing is an object/function
            if (options.nonDestructive) {
// non destructive; make a copy before merge/extend
              thing1 = $.copy(arguments[argIndex]);
            }
            else {
// destructive: mutates input object/array because they are passed by reference, not value
              thing1 = arguments[argIndex];
            }
            break;
        }

//console.dir(thing1);
// argIndex should increment; at the moment it points to the first object, which we don't care about.
// loop through the arguments.
        for ( ; argIndex < arguments.length; argIndex++) {
// alias to make likes shorter
          thing = arguments[argIndex];
// make sure thing is an object
          simpleType = $.dearGodWhatIsThatThing(thing, {'strict': false});
          strictType = $.dearGodWhatIsThatThing(thing);
          
          if (simpleType === 'array') {
// array: loop using index
            for (index = 0; index < thing.length; index++) {
// get types
              simpleType = $.dearGodWhatIsThatThing(thing[index], {'strict': false});
              strictType = $.dearGodWhatIsThatThing(thing[index]);
// check types
              if (simpleType === 'simple') {
// copy/override the properties
                  thing1[index] = thing[index];
              } 
              else {
// depending on how deep we are... keep going or just output the strictType
                if ((options.deep && options.level === 0) || options.level > 0) {
// $.merge() always copies so it won't affect options var
                    thing1[index] = $.copy(thing[index], $.merge(options, {level: (options.level-1)}));
                }
                else {
console.dir(options);
console.log('^options');
// if we are too low, just output the strict type
                  thing1[index] = strictType;
                }
              }
            }
          } 
          else if (simpleType === 'object') {
// loop through the properties
            for (prop in thing) {
//
              if (thing.hasOwnProperty(prop)) {
                simpleType = $.dearGodWhatIsThatThing(thing[prop], {'strict': false});
                strictType = $.dearGodWhatIsThatThing(thing[prop]);

                if (simpleType === 'simple') {
// copy/override the properties
                    thing1[prop] = thing[prop];
                } 
                else {
// depending on how deep we are... keep going or just output the strictType
                  if ((options.deep && options.level === 0) || options.level > 0) {
// $.merge() always copies so it won't affect options var
                    thing1[prop] = $.copy(thing[prop], $.merge(options, {level: (options.level-1)}));
                  }
                  else {
console.dir(options);
console.log('^options');
// if we are too low, just output the strict type
                    thing1[prop] = strictType;
                  }
                }
              }
            } 
          }
          else {
// not an object or array
// copy/override the properties
            thing1 = thing;
          }
        }
        return thing1;
    };
    $.pt.extend = $.extend;


// Other names for this function that might be useful?
// evolve, inherit for inheriting
// mixin used in other libraries
// merge sounds like a better verb for combining objects/arrays
    $.pt.evolve = $.extend;
    $.pt.inherit = $.extend;
    $.pt.mixin = $.extend;
//    $.pt.merge = $.extend;
//     
    $.evolve = $.extend;
    $.inherit = $.extend;
    $.mixin = $.extend;
//    $.merge = $.extend;



// $.merge()
// simpler version of extend.
// only goes one level
// no recursion.
// ATM: indescimenent  
//
  $.pt.merge = function () {
    var cpy = {}, // assume it's an object
        prop,
        type,
        argIndex = 0,
        thing,
        strictType,
        simpleType,
        level = 1;

    if ($.isNumber(arguments[argIndex])) {
      level = arguments[argIndex];
      argIndex++;
    }

// loop through the arguments "array"
    for (/* init above */; argIndex < arguments.length; argIndex++) {
// thing shortcut
      thing = arguments[argIndex];
// loopsie-loopsie-loo
      for (prop in thing) {
// find the types: simple and strict
        strictType = $.dearGodWhatIsThatThing(thing[prop]);
        simpleType = $.dearGodWhatIsThatThing(thing[prop], {'strict': false});

        if (simpleType === 'simple') {
// for simple objects, send value
          cpy[prop] = thing[prop];  
        }
        else {
// for others, send strict type
          if (level > 1) {
            cpy[prop] = $.merge(level-1, thing[prop], {});
          }
          else {
            cpy[prop] = strictType;
          }
        }
      }
    }

    return cpy;
  };
  $.merge = $.pt.merge;


} (Cragnon, window.document, window));   









