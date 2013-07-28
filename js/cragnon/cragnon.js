//
// * cragnon.js - inherits from Array Object
// * version: 0.0.1
//
//
//
// ***********************************
//
//






// Cragnon base object
// @visibility: PUBLIC
//
// @params
//  : selector - a CSS selector
//  : context - default: is window.document; it's where to start looking for "selector"; can either be a CSS Selector, Node, or Cragnon objects
// @description:
//      
//
//
//
//
// @returns: Cragnon object for chaining
// @examples
//     : 
//
//
//
//
//
//
//
//
// !Exceptions: NONE
//



(function (doc, window, undefined) {
    "use strict";

    var bannedInputPropList = {
          selectionStart: true,
          selectionEnd: true,
          selectionDirection: true,
         };
    
// CRAGNON CONSTRUCTOR FUNCTION
// @visibility: PUBLIC
// @params
//    : selector - A CSS Selector
//       @default: undefined || document
//    : context - Change the Context of the initial find.
//       @default: window.document
//
// @deprecated: 
// @description: 
// @returns: 
// @examples
//    : // make an empty object 
//          var crag = $();
//
//      : //  The next two should be the same
//          var crag = $('#someElementID .someClass');
//
//      : // This is the same as the above.
//        var elements = document.querySelectorAll('#someElementID .someClass');
//        var crag = $(elements);
// 
// 
//  !Exceptions: NONE
//



    var Cragnon = function (selector, context) {
        var me = this;

// make a new object if me is a window object or undefined
        if (me === window || typeof me === 'undefined') {
            me = new Cragnon(selector, context);
        }
        else {
// set context
            context = context || doc; 
            me.context = context;
// check if the selector is a string or not
            if (typeof selector === 'string') {
// string: assume it's a CSS selector              
                me = select(selector, context);
            } 
            else if (selector && __.isArray(selector)) {
// array: if selector has a length property, assume it's an Array-like object and use it's elements to make the new Cragnon Object.
                me.push.apply(me, selector);
            }
        }
        return me;
    },
    __; // 

// Inherit from Array.
// TODO: find Array methods that spit out a new Array instead of "this"

// window.Array.prototype || new Array also work
    Cragnon.prototype = [];  
// .prototype typing shortcut; 
    Cragnon.pt = Cragnon.prototype; 
    
// constructor
    Cragnon.prototype.constructor = Cragnon;
    Cragnon.constructor = Cragnon.prototype.constructor;

// default context is window.document
    Cragnon.context = doc;

// local, shortcut alias; "double underscore"
    __ = Cragnon; 

// export to global context
    window.Cragnon = window.$ = Cragnon;

} (window.document, window));



//
//  FFFFF      IIIIIII      NN    N
//  F             I         N N   N
//  FFFF          I         N  N  N
//  F             I         N   N N
//  F          IIIIIII      N    NN
// 

