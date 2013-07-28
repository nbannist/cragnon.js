/**
    Cragnon Predicate Functions

Function List
---------------------------
    isArray
    isBoolean
    isCragnon
    isDate
    isFunction
    isInfinity
    isNaN
    isNull
    isNullOrUndefined
    isNumber
    isObject(accused, strictMode)
    isRegEx
    isString
    isUndefined
    // ? Missing any?

*/


(function ($, doc, window, undefined) {
    "use strict";




// isArray() 
//
//
//
//
    $.pt.isArray = function (accused, strictMode) {
        var isStrict = (strictMode === true || strictMode === false)? strictMode: true;

        if (isStrict) { 
// Cragnon Objects will return false
            return (accused && (accused instanceof Array || accused.prototype instanceof Array) && accused.constructor === Array)? true : false;
        }
        else { 
// Objects that inherit from Array (such as Cragnon Objects) should return true
            return (accused && (accused instanceof Array || accused.prototype instanceof Array))? true : false;
        }
    };
    $.isArray = $.pt.isArray;





// isCragnon()
// Checks to see if the "accused" is a Cragnon Object or not.
// Optional argument, "strictMode" only checks if the "accused" is an instanceof Cragnon, not also equal
//
//
    $.pt.isCragnon = function (accused, strictMode) {
        var strict = (strictMode === true || strictMode === false)? strictMode: true;

        if (strict) { 
// used to check if a variable is an instance of the Cragnon Object, the Cragnon object and the constructor is a Cragnon object
            return (accused instanceof Cragnon && accused.constructor === Cragnon);
        }
        else { 
// used to check if a variable is the Cragnon Object (instance or not)
            return ((accused instanceof Cragnon || accused === Cragnon) && accused.constructor === Cragnon);
        }
    };
    $.isCragnon = $.pt.isCragnon;





// isBoolean predicate function
//
//
//
//
    $.pt.isBoolean = function (accused) {
      return (typeof accused === 'boolean');
    };
    $.isBoolean = $.pt.isBoolean;





// isDate predicate function
//
//
//
//
    $.pt.isDate = function (accused) {
      return (accused instanceof Date);
    };
    $.isDate = $.pt.isDate;





// isFunction predicate function
//
//
//
//
    $.pt.isFunction = function (accused) {
      return (typeof accused === 'function');
    };
    $.isFunction = $.pt.isFunction;





// isInfinity predicate function
//
//
//
//
    $.pt.isInfinity = function (accused) {
      return (accused === Infinity);
    };
    $.isInfinity = $.pt.isInfinity;





// isNaN predicate function 
//
//
//
//
    $.pt.isNaN = function (accused) {
// there is already a function to detect NaN; it fucking sucks though.
        if (accused === null || accused === undefined) {
            return false;
        }

        if (isNaN(accused) && 
            accused.constructor && 
            accused.constructor === Number) {
            return true;
        }

      return false;
    };
    $.isNaN = $.pt.isNaN;





// isNull predicate function
//
//
//
//
    $.pt.isNull = function (accused) {
      return (accused === null);
    };
    $.isNull = $.pt.isNull;





// isNullOrUndefined predicate function
//
//
//
//
    $.pt.isNullOrUndefined = function (accused) {
      return (accused === null || typeof accused === 'undefined' || accused === undefined);
    };
    $.isNullOrUndefined = $.pt.isNullOrUndefined;





// isNumber predicate function
//
//
//
//
    $.pt.isNumber = function (accused, strictMode) {
// strictMode = true is the default
      var strict = (strictMode === true || strictMode === false)? strictMode: true;

      if (strict) {
        return (typeof accused === 'number' && !$.isNaN(accused) && isFinite(accused));
      }
      else {
        return (typeof accused === 'number');
      }
    };
    $.isNumber = $.pt.isNumber;





// $.isObject()
//
//
//
//
    $.pt.isObject = function (accused, strictMode) {
        var strict = (strictMode === true || strictMode === false)? strictMode: true;
// "Javascript: The Good Parts", 'Confusion', page 61, by Douglas Crockford
// using the simple version for detecting Arrays but flipping the last part 
// to make sure it is *not* an array.

        if (strict) {
// test for typeof object
            return (accused && typeof accused === 'object' && accused.constructor === Object)? true : false;
        }
        else {
// will return true for accused Arrays and RegExp
            return (accused && typeof accused === 'object')? true : false;
        }
    };
    $.isObject = $.pt.isObject;






// isRegEx predicate function
//
//
//
//
    $.pt.isRegExp = function (accused) {
      return (accused instanceof RegExp);
    };
    $.isRegExp = $.pt.isRegExp;





// isString predicate function 
//
//
//
//
    $.pt.isString = function (accused) {
      return (typeof accused === 'string');
    };
    $.isString = $.pt.isString;




// isType
//
//
//
//
    $.pt.isType = function (type, accused) {

        if (type === Function) {

            return (accused instanceof Function)? true : false;
        }

// Check for special types
        if (type === null || type === undefined) {

            return (accused === type);    
        }
        if (accused === null || accused === undefined) {

            return (accused === type);
        }

// Check for Infinity
        if (accused === Infinity && type === Infinity) {

            return true;
        }

// Check for Number as the type
        if (type === Number) {

//console.log('Number');
// NaN and Infinity are Numbers in JavaScript but we don't want to think of them that way
            if (isNaN(accused)) {

                return false;
            } 
            if (!isFinite(accused)) {

                return false;
            }

        }

// Check for NaN type
        if (isNaN(type) && isNaN(accused) && 
            accused.constructor && type.constructor && 
            accused.constructor === Number && type.constructor === Number) {
//console.log('isNaN constructor Number');
            return true;
        }

        if (accused === undefined && type === undefined) {
// if both accused and type are undefined then return true
            return true;
        }
        else if (accused === null && type === null) {
// if both accused and type are null then return true
            return true;
        }
 // check for regulars 
        else if (accused.constructor) {
//console.log('constructor === type')
            return (accused.constructor === type);  
        }


      return false;    
    };
    $.isType = $.pt.isType;






// isUndefined predicate function
//
//
//
//
    $.pt.isUndefined = function (accused) {
      return (typeof accused === 'undefined' || accused === undefined);
    };
    $.isUndefined = $.pt.isUndefined;



} (Cragnon, window.document, window));   








//
//  FFFFF      IIIIIII      NN    N
//  F             I         N N   N
//  FFFF          I         N  N  N
//  F             I         N   N N
//  F          IIIIIII      N    NN
// 



