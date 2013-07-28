/*
	Tests for cragnon.js
	// TODO: upgrade to a unit testing library. Build suite, etc.
	// http://omar.gy/how-i-ended-up-enjoying-javascript/
*/

(function (window) {
"use strict";


	/**
	 * runTests()
	 * Runs tests
	 */
	function runTests() {

console.log('testConstructors()...');
		testConstructors();

console.log('testPredicates()...');
		testPredicates();

console.log('testDearGodWhatIsThatThing()...');
		testDearGodWhatIsThatThing();

//console.log('testExtend()...');
//		testExtend();

	}
	window.runTests = runTests;



	// New Tests Using Qunit
	function testConstructors() {
		var newCragnon = new Cragnon();
		var cragnon = Cragnon();
			
		test("testConstructors", function() {
			// equal(actual, expected, msg);// equal(true, true, "msg");
            
            // Test if Cragnon === _ // shortcut
			equal(Cragnon, $, "'Cragnon' should be equal to '$'");
            // Does Cragnon inherit from Array?
			equal(Cragnon instanceof Array, $ instanceof Array, "Cragnon and $ are instanceof Array");
            // Cragnon and _ are instance of Cragnon
			equal(Cragnon instanceof Cragnon, $ instanceof Cragnon, "Cragnon and $ are instanceof Cragnon");

        	
        	}
        );
	}


	function testPredicates() {
		var crag = Cragnon(),
			newCrag = new Cragnon();

		// console.log('testing predicates!')
		test("test isType()", function() {

			equal(true, true, "isType(Array, ...) ---------------------------------------- ");
// Array : TRUE
			equal($.isType(Array, []), true, "[] is an Array");
			equal($.isType(Array, new Array()), true, "new Array() is an Array");
			equal($.isType(Array, new Array(0)), true, "new Array(0) is an Array");
			equal($.isType(Array, new Array(1)), true, "new Array(1) is an Array");
// Array : FALSE
			equal($.isType(Array, {}), false, "{} is NOT an Array");
			equal($.isType(Array, 0), false, "0 is NOT an Array");
			equal($.isType(Array, 1), false, "1 is NOT an Array");
			equal($.isType(Array, 2), false, "2 is NOT an Array");
			equal($.isType(Array, true), false, "true is NOT an Array");
			equal($.isType(Array, false), false, "false is NOT an Array");
			equal($.isType(Array, new Cragnon()), false, "new Cragnon() is NOT an Array");
			equal($.isType(Array, Cragnon()), false, "Cragnon() is NOT an Array");
			equal($.isType(Array, NaN), false, "NaN is NOT an Array");
			equal($.isType(Array, Infinity), false, "Infinity is NOT an Array");
			equal($.isType(Array, null), false, "null is NOT an Array");
			equal($.isType(Array, undefined), false, "undefined is NOT an Array");
			equal($.isType(Array, new Date()), false, "new Dat() is NOT an Array");
			equal($.isType(Array, /[0-9]+/), false, "/[0-9]+/ is NOT an Array");



			equal(true, true, "isType(Object, ...) ---------------------------------------- ");
// Object : TRUE
			equal($.isType(Object, {}), true, "{} is an Object");
			equal($.isType(Object, new Object()), true, "new Object() is an Object");
// Object : FALSE
			equal($.isType(Object, []), false, "Array is NOT an Object");
			equal($.isType(Object, 0), false, "0 is NOT an Object");
			equal($.isType(Object, 1), false, "1 is NOT an Object");
			equal($.isType(Object, 2), false, "2 is NOT an Object");
			equal($.isType(Object, true), false, "true is NOT an Object");
			equal($.isType(Object, false), false, "false is NOT an Object");
			equal($.isType(Object, new Cragnon()), false, "new Cragnon() is NOT an Object");
			equal($.isType(Object, Cragnon()), false, "Cragnon() is NOT an Object");
			equal($.isType(Object, NaN), false, "NaN is NOT an Object");
			equal($.isType(Object, Infinity), false, "Infinity is NOT an Object");
			equal($.isType(Object, null), false, "null is NOT an Object");
			equal($.isType(Object, undefined), false, "undefined is NOT an Object");
			equal($.isType(Object, new Date()), false, "new Dat() is NOT an Object");
			equal($.isType(Object, /[0-9]+/), false, "/[0-9]+/ is NOT an Object");

			

			equal(true, true, "isType(Boolean, ...) ---------------------------------------- ");

// Boolean : TRUE
			equal($.isType(Boolean, true), true, "true is an Boolean");
			equal($.isType(Boolean, false), true, "false is an Boolean");
// Boolean : FALSE
			equal($.isType(Boolean, []), false, "Array is NOT an Boolean");
			equal($.isType(Boolean, 0), false, "0 is NOT an Boolean");
			equal($.isType(Boolean, 1), false, "1 is NOT an Boolean");
			equal($.isType(Boolean, 2), false, "2 is NOT an Boolean");
			equal($.isType(Boolean, {}), false, "{} is NOT an Boolean");
			equal($.isType(Boolean, new Object()), false, "new Object() is NOT an Boolean");
			equal($.isType(Boolean, new Cragnon()), false, "new Cragnon() is NOT an Boolean");
			equal($.isType(Boolean, Cragnon()), false, "Cragnon() is NOT an Boolean");
			equal($.isType(Boolean, NaN), false, "NaN is NOT an Boolean");
			equal($.isType(Boolean, Infinity), false, "Infinity is NOT an Boolean");
			equal($.isType(Boolean, null), false, "null is NOT an Boolean");
			equal($.isType(Boolean, undefined), false, "undefined is NOT an Boolean");
			equal($.isType(Boolean, new Date()), false, "new Dat() is NOT an Boolean");
			equal($.isType(Boolean, /[0-9]+/), false, "/[0-9]+/ is NOT an Boolean");

			

			equal(true, true, "isType(Cragnon, ...) ---------------------------------------- ");

// Cragnon : TRUE
			equal($.isType(Cragnon, new Cragnon()), true, "new Cragnon() is an Cragnon");
			equal($.isType(Cragnon, Cragnon()), true, "Cragnon() is an Cragnon");
// Cragnon : FALSE

			equal($.isType(Cragnon, []), false, "Array is NOT an Cragnon");
			equal($.isType(Cragnon, 0), false, "0 is NOT an Cragnon");
			equal($.isType(Cragnon, 1), false, "1 is NOT an Cragnon");
			equal($.isType(Cragnon, 2), false, "2 is NOT an Cragnon");
			equal($.isType(Cragnon, {}), false, "{} is NOT an Cragnon");
			equal($.isType(Cragnon, new Object()), false, "new Object() is NOT an Cragnon");
			equal($.isType(Cragnon, NaN), false, "NaN is NOT an Cragnon");
			equal($.isType(Cragnon, Infinity), false, "Infinity is NOT an Cragnon");
			equal($.isType(Cragnon, null), false, "null is NOT an Cragnon");
			equal($.isType(Cragnon, undefined), false, "undefined is NOT an Cragnon");
			equal($.isType(Cragnon, new Date()), false, "new Date() is NOT an Cragnon");
			equal($.isType(Cragnon, /[0-9]+/), false, "/[0-9]+/ is NOT an Cragnon");

			

			equal(true, true, "isType(Number, ...) ---------------------------------------- ");
// Number : TRUE
			equal($.isType(Number, 4), true, "4 is an Number");
			equal($.isType(Number, new Number()), true, "new Number() is an Number");
			equal($.isType(Number, new Number(0)), true, "new Number(0) is an Number");
			equal($.isType(Number, new Number(1)), true, "new Number(1) is an Number");
			equal($.isType(Number, 0), true, "0 is an Number");
			equal($.isType(Number, 1), true, "1 is an Number");
			equal($.isType(Number, 2), true, "2 is an Number");
// Number : FALSE
			equal($.isType(Number, {}), false, "{} is NOT an Number");
			equal($.isType(Number, true), false, "true is NOT an Number");
			equal($.isType(Number, false), false, "false is NOT an Number");
			equal($.isType(Number, new Cragnon()), false, "new Cragnon() is NOT an Number");
			equal($.isType(Number, Cragnon()), false, "Cragnon() is NOT an Number");
			equal($.isType(Number, NaN), false, "NaN is NOT an Number");
			equal($.isType(Number, Infinity), false, "Infinity is NOT an Number");
			equal($.isType(Number, null), false, "null is NOT an Number");
			equal($.isType(Number, undefined), false, "undefined is NOT an Number");
			equal($.isType(Number, new Date()), false, "new Date() is NOT an Number");
			equal($.isType(Number, /[0-9]+/), false, "/[0-9]+/ is NOT an Number");

			

			equal(true, true, "isType(NaN, ...) ---------------------------------------- ");
// NaN : TRUE
			equal($.isType(NaN, NaN), true, "NaN is an NaN");
			equal($.isType(NaN, parseInt('blablasdf')), true, "parseInt('blablasdf') is an NaN");
// NaN : FALSE
			equal($.isType(NaN, {}), false, "{} is NOT an NaN");
			equal($.isType(NaN, true), false, "true is NOT an NaN");
			equal($.isType(NaN, false), false, "false is NOT an NaN");
			equal($.isType(NaN, new Cragnon()), false, "new Cragnon() is NOT an NaN");
			equal($.isType(NaN, Cragnon()), false, "Cragnon() is NOT an NaN");
			equal($.isType(NaN, 4), false, "4 is NOT NaN");
			equal($.isType(NaN, new Number()), false, "new Number() is NOT a NaN");
			equal($.isType(NaN, new Number(0)), false, "new Number(0) is NOT a NaN");
			equal($.isType(NaN, new Number(1)), false, "new Number(1) is NOT a NaN");
			equal($.isType(NaN, (1/0)), false, "(1/0) is NOT NaN");
			equal($.isType(NaN, 0), false, "0 is NOT a NaN");
			equal($.isType(NaN, 1), false, "1 is NOT a NaN");
			equal($.isType(NaN, 2), false, "2 is NOT a NaN");
			equal($.isType(NaN, Infinity), false, "Infinity is NOT an NaN");
			equal($.isType(NaN, null), false, "null is NOT an NaN");
			equal($.isType(NaN, undefined), false, "undefined is NOT an NaN");
			equal($.isType(NaN, new Date()), false, "new Date() is NOT an NaN");
			equal($.isType(NaN, /[0-9]+/), false, "/[0-9]+/ is NOT an NaN");

			

			equal(true, true, "isType(Infinity, ...) ---------------------------------------- ");
// Infinity : TRUE
			equal($.isType(Infinity, Infinity), true, "Infinity is an Infinity");
			equal($.isType(Infinity, (1/0)), true, "(1/0) is an Infinity");
// Infinity : FALSE
			equal($.isType(Infinity, {}), false, "{} is NOT Infinity");
			equal($.isType(Infinity, true), false, "true is NOT Infinity");
			equal($.isType(Infinity, false), false, "false is NOT Infinity");
			equal($.isType(Infinity, new Cragnon()), false, "new Cragnon() is NOT Infinity");
			equal($.isType(Infinity, Cragnon()), false, "Cragnon() is NOT Infinity");
			equal($.isType(Infinity, 4), false, "4 is NOT Infinity");
			equal($.isType(Infinity, new Number()), false, "new Number() is NOT a Infinity");
			equal($.isType(Infinity, new Number(0)), false, "new Number(0) is NOT a Infinity");
			equal($.isType(Infinity, new Number(1)), false, "new Number(1) is NOT a Infinity");
			equal($.isType(Infinity, parseInt('asdf', 10)), false, "parseInt('asdf') is NOT Infinity");
			equal($.isType(Infinity, NaN), false, "NaN is NOT Infinity");
			equal($.isType(Infinity, 0), false, "0 is NOT a Infinity");
			equal($.isType(Infinity, 1), false, "1 is NOT a Infinity");
			equal($.isType(Infinity, 2), false, "2 is NOT a Infinity");
			equal($.isType(Infinity, null), false, "null is NOT Infinity");
			equal($.isType(Infinity, undefined), false, "undefined is NOT Infinity");
			equal($.isType(Infinity, new Date()), false, "new Date() is NOT Infinity");
			equal($.isType(Infinity, /[0-9]+/), false, "/[0-9]+/ is NOT Infinity");

			

			equal(true, true, "isType(Date, ...) ---------------------------------------- ");
// Date : TRUE
			equal($.isType(Date, new Date()), true, " new Date() is a Date");
			equal($.isType(Date, new Date("December 17, 1995 03:24:00")), true, 'new Date("December 17, 1995 03:24:00") is a Date');
			equal($.isType(Date, new Date(1995,11,17)), true, "new Date(1995,11,17) is a Date");
			equal($.isType(Date, new Date(1995,11,17,3,24,0)), true, "new Date(1995,11,17,3,24,0) is a Date");
// Date : FALSE
			equal($.isType(Date, {}), false, "{} is NOT Date");
			equal($.isType(Date, true), false, "true is NOT Date");
			equal($.isType(Date, false), false, "false is NOT Date");
			equal($.isType(Date, new Cragnon()), false, "new Cragnon() is NOT Date");
			equal($.isType(Date, Cragnon()), false, "Cragnon() is NOT Date");
			equal($.isType(Date, 4), false, "4 is NOT Date");
			equal($.isType(Date, new Number()), false, "new Number() is NOT a Date");
			equal($.isType(Date, new Number(0)), false, "new Number(0) is NOT a Date");
			equal($.isType(Date, new Number(1)), false, "new Number(1) is NOT a Date");
			equal($.isType(Date, parseInt('asdf', 10)), false, "parseInt('asdf') is NOT Date");
			equal($.isType(Date, NaN), false, "NaN is NOT Date");
			equal($.isType(Date, 0), false, "0 is NOT a Date");
			equal($.isType(Date, 1), false, "1 is NOT a Date");
			equal($.isType(Date, 2), false, "2 is NOT a Date");
			equal($.isType(Date, null), false, "null is NOT Date");
			equal($.isType(Date, undefined), false, "undefined is NOT Date");
			equal($.isType(Date, Infinity), false, "Infinity is NOT Date");
			equal($.isType(Date, /[0-9]+/), false, "/[0-9]+/ is NOT Date");

			

			equal(true, true, "isType(RegExp, ...) ---------------------------------------- ");
// RegEx : TRUE
			equal($.isType(RegExp, new RegExp()), true, " new RegExp('s'*) is a RegExp");
			equal($.isType(RegExp, new RegExp('[0-9]+')), true, 'new RegEx([0-9]+) is a RegExp');
			equal($.isType(RegExp, /[0-9]+/), true, "/[0-9]+/ is a RegExp");
			equal($.isType(RegExp, /('s'*)/), true, "/('s'*)/ is a RegExp");
// RegEx : FALSE
			equal($.isType(RegExp, {}), false, "{} is NOT RegExp");
			equal($.isType(RegExp, true), false, "true is NOT RegExp");
			equal($.isType(RegExp, false), false, "false is NOT RegExp");
			equal($.isType(RegExp, new Cragnon()), false, "new Cragnon() is NOT RegExp");
			equal($.isType(RegExp, Cragnon()), false, "Cragnon() is NOT RegExp");
			equal($.isType(RegExp, 4), false, "4 is NOT RegExp");
			equal($.isType(RegExp, new Number()), false, "new Number() is NOT a RegExp");
			equal($.isType(RegExp, new Number(0)), false, "new Number(0) is NOT a RegExp");
			equal($.isType(RegExp, new Number(1)), false, "new Number(1) is NOT a RegExp");
			equal($.isType(RegExp, parseInt('asdf', 10)), false, "parseInt('asdf') is NOT RegExp");
			equal($.isType(RegExp, NaN), false, "NaN is NOT RegExp");
			equal($.isType(RegExp, 0), false, "0 is NOT a RegExp");
			equal($.isType(RegExp, 1), false, "1 is NOT a RegExp");
			equal($.isType(RegExp, 2), false, "2 is NOT a RegExp");
			equal($.isType(RegExp, null), false, "null is NOT RegExp");
			equal($.isType(RegExp, undefined), false, "undefined is NOT RegExp");
			equal($.isType(RegExp, Infinity), false, "Infinity is NOT RegExp");
			equal($.isType(RegExp, new Date()), false, " new Date() is not RegExp");
			equal($.isType(RegExp, new Date("December 17, 1995 03:24:00")), false, 'new Date("December 17, 1995 03:24:00") is not RegExp');
			equal($.isType(RegExp, new Date(1995,11,17)), false, "new Date(1995,11,17) is not RegExp");
			equal($.isType(RegExp, new Date(1995,11,17,3,24,0)), false, "new Date(1995,11,17,3,24,0) is not RegExp");


			equal(true, true, "isType(Null, ...) ---------------------------------------- ");
// null : TRUE
			equal($.isType(null, null), true, "null is null");
// null : FALSE
			equal($.isType(null, {}), false, "{} is NOT null");
			equal($.isType(null, true), false, "true is NOT null");
			equal($.isType(null, false), false, "false is NOT null");
			equal($.isType(null, new Cragnon()), false, "new Cragnon() is NOT null");
			equal($.isType(null, Cragnon()), false, "Cragnon() is NOT null");
			equal($.isType(null, 4), false, "4 is NOT null");
			equal($.isType(null, new Number()), false, "new Number() is NOT a null");
			equal($.isType(null, new Number(0)), false, "new Number(0) is NOT a null");
			equal($.isType(null, new Number(1)), false, "new Number(1) is NOT a null");
			equal($.isType(null, parseInt('asdf', 10)), false, "parseInt('asdf') is NOT null");
			equal($.isType(null, NaN), false, "NaN is NOT null");
			equal($.isType(null, 0), false, "0 is NOT a null");
			equal($.isType(null, 1), false, "1 is NOT a null");
			equal($.isType(null, 2), false, "2 is NOT a null");
			equal($.isType(null, undefined), false, "undefined is NOT null");
			equal($.isType(null, Infinity), false, "Infinity is NOT null");
			equal($.isType(null, new Date()), false, " new Date() is not null");
			equal($.isType(null, new Date("December 17, 1995 03:24:00")), false, 'new Date("December 17, 1995 03:24:00") is not null');
			equal($.isType(null, new Date(1995,11,17)), false, "new Date(1995,11,17) is not null");
			equal($.isType(null, new Date(1995,11,17,3,24,0)), false, "new Date(1995,11,17,3,24,0) is not null");
			

			equal(true, true, "isType(Undefined, ...) ---------------------------------------- ");
// undefined : TRUE
			equal($.isType(undefined, undefined), true, "undefined is undefined");
// undefined : FALSE
			equal($.isType(undefined, {}), false, "{} is NOT undefined");
			equal($.isType(undefined, true), false, "true is NOT undefined");
			equal($.isType(undefined, false), false, "false is NOT undefined");
			equal($.isType(undefined, new Cragnon()), false, "new Cragnon() is NOT undefined");
			equal($.isType(undefined, Cragnon()), false, "Cragnon() is NOT undefined");
			equal($.isType(undefined, 4), false, "4 is NOT undefined");
			equal($.isType(undefined, new Number()), false, "new Number() is NOT a undefined");
			equal($.isType(undefined, new Number(0)), false, "new Number(0) is NOT a undefined");
			equal($.isType(undefined, new Number(1)), false, "new Number(1) is NOT a undefined");
			equal($.isType(undefined, parseInt('asdf', 10)), false, "parseInt('asdf') is NOT undefined");
			equal($.isType(undefined, NaN), false, "NaN is NOT undefined");
			equal($.isType(undefined, 0), false, "0 is NOT a undefined");
			equal($.isType(undefined, 1), false, "1 is NOT a undefined");
			equal($.isType(undefined, 2), false, "2 is NOT a undefined");
			equal($.isType(undefined, null), false, "null is NOT undefined");
			equal($.isType(undefined, Infinity), false, "Infinity is NOT undefined");
			equal($.isType(undefined, new Date()), false, " new Date() is not undefined");
			equal($.isType(undefined, new Date("December 17, 1995 03:24:00")), false, 'new Date("December 17, 1995 03:24:00") is not undefined');
			equal($.isType(undefined, new Date(1995,11,17)), false, "new Date(1995,11,17) is not undefined");
			equal($.isType(undefined, new Date(1995,11,17,3,24,0)), false, "new Date(1995,11,17,3,24,0) is not undefined");


			equal(true, true, "isType(String, ...) ---------------------------------------- ");
// String : TRUE
			equal($.isType(String, new String('some string')), true, "'some string' is String");
// String : FALSE
			equal($.isType(String, {}), false, "{} is NOT String");
			equal($.isType(String, true), false, "true is NOT String");
			equal($.isType(String, false), false, "false is NOT String");
			equal($.isType(String, new Cragnon()), false, "new Cragnon() is NOT String");
			equal($.isType(String, Cragnon()), false, "Cragnon() is NOT String");
			equal($.isType(String, 4), false, "4 is NOT String");
			equal($.isType(String, new Number()), false, "new Number() is NOT a String");
			equal($.isType(String, new Number(0)), false, "new Number(0) is NOT a String");
			equal($.isType(String, new Number(1)), false, "new Number(1) is NOT a String");
			equal($.isType(String, parseInt('asdf', 10)), false, "parseInt('asdf') is NOT String");
			equal($.isType(String, NaN), false, "NaN is NOT String");
			equal($.isType(String, 0), false, "0 is NOT a String");
			equal($.isType(String, 1), false, "1 is NOT a String");
			equal($.isType(String, 2), false, "2 is NOT a String");
			equal($.isType(String, null), false, "null is NOT String");
			equal($.isType(String, Infinity), false, "Infinity is NOT String");
			equal($.isType(String, new Date()), false, " new Date() is not a String");
			equal($.isType(String, new Date("December 17, 1995 03:24:00")), false, 'new Date("December 17, 1995 03:24:00") is not a String');
			equal($.isType(String, new Date(1995,11,17)), false, "new Date(1995,11,17) is not a String");
			equal($.isType(String, new Date(1995,11,17,3,24,0)), false, "new Date(1995,11,17,3,24,0) is not a String");


			equal(true, true, "isType(Function, ...) ---------------------------------------- ");
// Function : TRUE
			equal($.isType(Function, function() {}), true, 'function() {} is a Function');
			equal($.isType(Function, Cragnon), true, 'Cragnon is a Function');
			equal($.isType(Function, eval), true, 'eval is a Function');
// Function : FALSE
			equal($.isType(Function, new String('some string')), false, "'some string' is not a Function");
			equal($.isType(Function, {}), false, "{} is NOT Function");
			equal($.isType(Function, true), false, "true is NOT Function");
			equal($.isType(Function, false), false, "false is NOT Function");
			equal($.isType(Function, new Cragnon()), false, "new Cragnon() is NOT Function");
			equal($.isType(Function, Cragnon()), false, "Cragnon() is NOT Function");
			equal($.isType(Function, 4), false, "4 is NOT Function");
			equal($.isType(Function, new Number()), false, "new Number() is NOT a Function");
			equal($.isType(Function, new Number(0)), false, "new Number(0) is NOT a Function");
			equal($.isType(Function, new Number(1)), false, "new Number(1) is NOT a Function");
			equal($.isType(Function, parseInt('asdf', 10)), false, "parseInt('asdf') is NOT Function");
			equal($.isType(Function, NaN), false, "NaN is NOT Function");
			equal($.isType(Function, 0), false, "0 is NOT a Function");
			equal($.isType(Function, 1), false, "1 is NOT a Function");
			equal($.isType(Function, 2), false, "2 is NOT a Function");
			equal($.isType(Function, null), false, "null is NOT Function");
			equal($.isType(Function, Infinity), false, "Infinity is NOT Function");
			equal($.isType(Function, new Date()), false, " new Date() is not a Function");
			equal($.isType(Function, new Date("December 17, 1995 03:24:00")), false, 'new Date("December 17, 1995 03:24:00") is not a Function');
			equal($.isType(Function, new Date(1995,11,17)), false, "new Date(1995,11,17) is not a Function");
			equal($.isType(Function, new Date(1995,11,17,3,24,0)), false, "new Date(1995,11,17,3,24,0) is not a Function");

			equal(true, true, "FIN");
		});

		
		test('test isArray()', function () {
// true
			equal($.isArray([]), true, 'Array is Array');
			equal($.isArray(new Array()), true, 'Array is Array');
//false
			equal($.isNull(/[0-9]{3}-[0-9]{3}-[0-9]{4}/), false, '/[0-9]{3}-[0-9]{3}-[0-9]{4}/ is not null');
			equal($.isArray(undefined), false, 'undefined is not an Array');
			equal($.isArray(null), false, 'null is not an Array');
			equal($.isArray(1), false, '1 is not an Array');
			equal($.isArray(0), false, '0 is not an Array');
			equal($.isArray({}), false, '{} is not an Array');
			equal($.isArray(new Object()), false, 'new Object() is not an Array');
			equal($.isArray(NaN), false, 'NaN is not an Array');
			equal($.isArray(Infinity), false, 'Infinity is not an Array');
			equal($.isArray(true), false, 'true is not an Array');
			equal($.isArray(false), false, 'false is not an Array');
			equal($.isArray("some string"), false, '"some string" is not an Array');
			equal($.isArray(function() {}), false, 'function() {} is not a Array');
			equal($.isArray(Cragnon), false, 'Cragnon is not a Array');
			equal($.isArray(eval), false, 'eval is not a Array');
			equal($.isArray(new RegExp('[0-9]+')), false, 'new RegExp('[0-9]+') is not a Array');

			equal(true, true, "FIN");
		});



		test('test isBoolean()', function () {
// true
			equal($.isBoolean(true), true, 'true is a Boolean');
			equal($.isBoolean(false), true, 'false is a Boolean');
//false
			equal($.isBoolean(/[0-9]{3}-[0-9]{3}-[0-9]{4}/), false, '/[0-9]{3}-[0-9]{3}-[0-9]{4}/ is not Boolean');
			equal($.isBoolean(undefined), false, 'undefined is not an Boolean');
			equal($.isBoolean(null), false, 'null is not an Boolean');
			equal($.isBoolean([]), false, 'Array is not an Boolean');
			equal($.isBoolean(new Array()), false, 'Array is not an Boolean');
			equal($.isBoolean({}), false, '{} is not a Boolean');
			equal($.isBoolean(new Object()), false, 'new Boolean() is not a Boolean');
			equal($.isBoolean(1), false, '1 is not an Boolean');
			equal($.isBoolean(0), false, '0 is not an Boolean');
			equal($.isBoolean(NaN), false, 'NaN is not an Boolean');
			equal($.isBoolean(Infinity), false, 'Infinity is not an Boolean');
			equal($.isBoolean("some string"), false, '"some string" is not an Boolean');
			equal($.isBoolean(function() {}), false, 'function() {} is not a Boolean');
			equal($.isBoolean(Cragnon), false, 'Cragnon is not a Boolean');
			equal($.isBoolean(eval), false, 'eval is not a Boolean');
			equal($.isBoolean(new Date()), false, 'new Date() is not a Boolean');
			equal($.isBoolean(new Date(1995,11,17,3,24,0)), false, 'new Date(1995,11,17,3,24,0) is not a Boolean');
			equal($.isBoolean(new Date("December 17, 1995 03:24:00")), false, 'new Date("December 17, 1995 03:24:00") is not a Boolean');

			equal(true, true, "FIN");
		});




		test('test isCragnon()', function () {
// true
			equal($.isCragnon(new Cragnon()), true, 'true is a Cragnon');
			equal($.isCragnon(Cragnon()), true, 'false is a Cragnon');
//false
			equal($.isCragnon(/[0-9]{3}-[0-9]{3}-[0-9]{4}/), false, '/[0-9]{3}-[0-9]{3}-[0-9]{4}/ is not Cragnon');
			equal($.isCragnon(undefined), false, 'undefined is not an Cragnon');
			equal($.isCragnon(null), false, 'null is not an Cragnon');
			equal($.isCragnon([]), false, 'Array is not an Cragnon');
			equal($.isCragnon(new Array()), false, 'Array is not an Cragnon');
			equal($.isCragnon({}), false, '{} is not a Cragnon');
			equal($.isCragnon(new Object()), false, 'new Cragnon() is not a Cragnon');
			equal($.isCragnon(1), false, '1 is not an Cragnon');
			equal($.isCragnon(0), false, '0 is not an Cragnon');
			equal($.isCragnon(true), false, 'true is not an Cragnon');
			equal($.isCragnon(false), false, 'false is not an Cragnon');
			equal($.isCragnon(NaN), false, 'NaN is not an Cragnon');
			equal($.isCragnon(Infinity), false, 'Infinity is not an Cragnon');
			equal($.isCragnon("some string"), false, '"some string" is not an Cragnon');
			equal($.isCragnon(function() {}), false, 'function() {} is not a Cragnon');
			equal($.isCragnon(Cragnon), false, 'Cragnon Object is not a Cragnon() function ');
			equal($.isCragnon(eval), false, 'eval is not a Cragnon');
			equal($.isCragnon(new Date()), false, 'new Date() is not a Cragnon');
			equal($.isCragnon(new Date(1995,11,17,3,24,0)), false, 'new Date(1995,11,17,3,24,0) is not a Cragnon');
			equal($.isCragnon(new Date("December 17, 1995 03:24:00")), false, 'new Date("December 17, 1995 03:24:00") is not a Cragnon');

			equal(true, true, "FIN");
		});





		test('test isDate()', function () {
// true
			equal($.isDate(new Date()), true, 'new Date() is a Date');
			equal($.isDate(new Date(1995,11,17,3,24,0)), true, 'new Date(1995,11,17,3,24,0) is a Date');
			equal($.isDate(new Date("December 17, 1995 03:24:00")), true, 'new Date("December 17, 1995 03:24:00") is a Date');
//false
			equal($.isDate(/[0-9]{3}-[0-9]{3}-[0-9]{4}/), false, '/[0-9]{3}-[0-9]{3}-[0-9]{4}/ is not Date');
			equal($.isDate(undefined), false, 'undefined is not an Date');
			equal($.isDate(null), false, 'null is not an Date');
			equal($.isDate([]), false, 'Array is not an Date');
			equal($.isDate(new Array()), false, 'Array is not an Date');
			equal($.isDate({}), false, '{} is not a Date');
			equal($.isDate(new Object()), false, 'new Object() is not a Date');
			equal($.isDate(1), false, '1 is not an Date');
			equal($.isDate(0), false, '0 is not an Date');
			equal($.isDate(true), false, 'true is not an Date');
			equal($.isDate(false), false, 'false is not an Date');
			equal($.isDate(NaN), false, 'NaN is not an Date');
			equal($.isDate(Infinity), false, 'Infinity is not an Date');
			equal($.isDate("some string"), false, '"some string" is not an Date');

			equal($.isDate(function() {}), false, 'function() {} is not a Date');
			equal($.isDate(Cragnon), false, 'Cragnon is not a Date');
			equal($.isDate(eval), false, 'eval is not a Date');

			equal(true, true, "FIN");
		});





		test('test isFunction()', function () {
// true			
			equal($.isFunction(function() {}), true, 'function() {} is a Function');
			equal($.isFunction(Cragnon), true, 'Cragnon is a Function');
			equal($.isFunction(eval), true, 'eval is a Function');
//false
			equal($.isFunction(/[0-9]{3}-[0-9]{3}-[0-9]{4}/), false, '/[0-9]{3}-[0-9]{3}-[0-9]{4}/ is not Function');
			equal($.isFunction(new Date()), false, 'new Date() is not a Function');
			equal($.isFunction(new Date(1995,11,17,3,24,0)), false, 'new Date(1995,11,17,3,24,0) is not a Function');
			equal($.isFunction(new Date("December 17, 1995 03:24:00")), false, 'new Date("December 17, 1995 03:24:00") is not a Function');
			equal($.isFunction(undefined), false, 'undefined is not an Date');
			equal($.isFunction(null), false, 'null is not an Date');
			equal($.isFunction([]), false, 'Array is not a Function');
			equal($.isFunction(new Array()), false, 'Array is not a Function');
			equal($.isFunction({}), false, '{} is not a Function');
			equal($.isFunction(new Object()), false, 'new Object() is not a Function');
			equal($.isFunction(1), false, '1 is not a Function');
			equal($.isFunction(0), false, '0 is not a Function');
			equal($.isFunction(true), false, 'true is not a Function');
			equal($.isFunction(false), false, 'false is not a Function');
			equal($.isFunction(NaN), false, 'NaN is not a Function');
			equal($.isFunction(Infinity), false, 'Infinity is not a Function');
			equal($.isFunction("some string"), false, '"some string" is not a Function');

			equal(true, true, "FIN");
		});


		test('test isInfinity()', function () {
// true			
			equal($.isInfinity(Infinity), true, 'Infinity is not a Infinity');
			equal($.isInfinity((1/0)), true, '(1/0) is not a Infinity');
//false
			equal($.isInfinity(function() {}), false, 'function() {} is a Infinity');
			equal($.isInfinity(Cragnon), false, 'Cragnon is a Infinity');
			equal($.isInfinity(eval), false, 'eval is a Infinity');
			equal($.isInfinity(/[0-9]{3}-[0-9]{3}-[0-9]{4}/), false, '/[0-9]{3}-[0-9]{3}-[0-9]{4}/ is not Infinity');
			equal($.isInfinity(new Date()), false, 'new Date() is not Infinity');
			equal($.isInfinity(new Date(1995,11,17,3,24,0)), false, 'new Date(1995,11,17,3,24,0) is not a Infinity');
			equal($.isInfinity(new Date("December 17, 1995 03:24:00")), false, 'new Date("December 17, 1995 03:24:00") is not a Infinity');
			equal($.isInfinity(undefined), false, 'undefined is not an Date');
			equal($.isInfinity(null), false, 'null is not an Date');
			equal($.isInfinity([]), false, 'Array is not a Infinity');
			equal($.isInfinity(new Array()), false, 'Array is not a Infinity');
			equal($.isInfinity({}), false, '{} is not a Infinity');
			equal($.isInfinity(new Object()), false, 'new Object() is not a Infinity');
			equal($.isInfinity(1), false, '1 is not a Infinity');
			equal($.isInfinity(0), false, '0 is not a Infinity');
			equal($.isInfinity(true), false, 'true is not a Infinity');
			equal($.isInfinity(false), false, 'false is not a Infinity');
			equal($.isInfinity(NaN), false, 'NaN is not a Infinity');
			equal($.isInfinity("some string"), false, '"some string" is not a Infinity');

			equal(true, true, "FIN");
		});



		test('test isNaN()', function () {
// true			
			equal($.isNaN(NaN), true, 'NaN is NaN');
//false
			equal($.isNaN(1), false, '1 is not NaN');
			equal($.isNaN(0), false, '0 is not NaN');
			equal($.isNaN(/[0-9]{3}-[0-9]{3}-[0-9]{4}/), false, '/[0-9]{3}-[0-9]{3}-[0-9]{4}/ is noNaN');
			equal($.isNaN(new Date()), false, 'new Date() is not NaN');
			equal($.isNaN(new Date(1995,11,17,3,24,0)), false, 'new Date(1995,11,17,3,24,0) is not NaN');
			equal($.isNaN(new Date("December 17, 1995 03:24:00")), false, 'new Date("December 17, 1995 03:24:00") is not NaN');
			equal($.isNaN(undefined), false, 'undefined is not an Date');
			equal($.isNaN(null), false, 'null is not an Date');
			equal($.isNaN([]), false, 'Array is not NaN');
			equal($.isNaN(new Array()), false, 'Array is not NaN');
			equal($.isNaN({}), false, '{} is not NaN');
			equal($.isNaN(new Object()), false, 'new Object() is not NaN');
			equal($.isNaN(true), false, 'true is not NaN');
			equal($.isNaN(false), false, 'false is not NaN');
			equal($.isNaN(Infinity), false, 'Infinity is not NaN');
			equal($.isNaN("some string"), false, '"some string" is not NaN');
			equal($.isNaN(function() {}), false, 'function() {} is NaN');
			equal($.isNaN(Cragnon), false, 'Cragnon is not NaN');
			equal($.isNaN(eval), false, 'eval is not NaN');

			equal(true, true, "FIN");
		});


		test('test isNumber()', function () {
// true			
			equal($.isNumber(1), true, '1 is not a Number');
			equal($.isNumber(0), true, '0 is not a Number');
//false
			equal($.isNumber(/[0-9]{3}-[0-9]{3}-[0-9]{4}/), false, '/[0-9]{3}-[0-9]{3}-[0-9]{4}/ is not Number');
			equal($.isNumber(new Date()), false, 'new Date() is not a Number');
			equal($.isNumber(new Date(1995,11,17,3,24,0)), false, 'new Date(1995,11,17,3,24,0) is not a Number');
			equal($.isNumber(new Date("December 17, 1995 03:24:00")), false, 'new Date("December 17, 1995 03:24:00") is not a Number');
			equal($.isNumber(undefined), false, 'undefined is not an Date');
			equal($.isNumber(null), false, 'null is not an Date');
			equal($.isNumber([]), false, 'Array is not a Number');
			equal($.isNumber(new Array()), false, 'Array is not a Number');
			equal($.isNumber({}), false, '{} is not a Number');
			equal($.isNumber(new Object()), false, 'new Object() is not a Number');
			equal($.isNumber(true), false, 'true is not a Number');
			equal($.isNumber(false), false, 'false is not a Number');
			equal($.isNumber(NaN), false, 'NaN is not a Number');
			equal($.isNumber(Infinity), false, 'Infinity is not a Number');
			equal($.isNumber("some string"), false, '"some string" is not a Number');
			equal($.isNumber(function() {}), false, 'function() {} is a Number');
			equal($.isNumber(Cragnon), false, 'Cragnon is not a Number');
			equal($.isNumber(eval), false, 'eval is not a Number');

			equal(true, true, "FIN");
		});



		

		test('test isObject()', function () {
// true

			equal($.isObject({}), true, '{} is not an Object');
			equal($.isObject(new Object()), true, 'new Object() is not an Object');
//false
			equal($.isObject(/[0-9]{3}-[0-9]{3}-[0-9]{4}/), false, '/[0-9]{3}-[0-9]{3}-[0-9]{4}/ is not an Object');
			equal($.isObject(function() {}), false, 'function() {} is not an Object');
			equal($.isObject(Cragnon), false, 'function() {} is not an Object');
			equal($.isObject(eval), false, 'function() {} is not an Object');
			equal($.isObject(undefined), false, 'undefined is not an Object');
			equal($.isObject(null), false, 'null is not an Object');
			equal($.isObject([]), false, 'Array is not an Object');
			equal($.isObject(new Array()), false, 'Array is not an Object');
			equal($.isObject(1), false, '1 is not an Object');
			equal($.isObject(0), false, '0 is not an Object');
			equal($.isObject(NaN), false, 'NaN is not an Object');
			equal($.isObject(Infinity), false, 'Infinity is not an Object');
			equal($.isObject(true), false, 'true is not an Object');
			equal($.isObject(false), false, 'false is not an Object');
			equal($.isObject("some string"), false, '"some string" is not an Object');

			equal(true, true, "FIN");
		});





		test('test isRegExp()', function () {
// true

			equal($.isRegExp(/[0-9]{3}-[0-9]{3}-[0-9]{4}/), true, '/[0-9]{3}-[0-9]{3}-[0-9]{4}/ is a RegExp');
			equal($.isRegExp(new RegExp()), true, 'new RegExp() is not an RegExp');
//false
			equal($.isRegExp(function() {}), false, 'function() {} is not an RegExp');
			equal($.isRegExp(Cragnon), false, 'function() {} is not an RegExp');
			equal($.isRegExp(eval), false, 'function() {} is not an RegExp');
			equal($.isRegExp(undefined), false, 'undefined is not an RegExp');
			equal($.isRegExp(null), false, 'null is not an RegExp');
			equal($.isRegExp([]), false, 'Array is not an RegExp');
			equal($.isRegExp(new Array()), false, 'Array is not an RegExp');
			equal($.isRegExp(1), false, '1 is not an RegExp');
			equal($.isRegExp(0), false, '0 is not an RegExp');
			equal($.isRegExp(NaN), false, 'NaN is not an RegExp');
			equal($.isRegExp(Infinity), false, 'Infinity is not an RegExp');
			equal($.isRegExp(true), false, 'true is not an RegExp');
			equal($.isRegExp(false), false, 'false is not an RegExp');
			equal($.isRegExp("some string"), false, '"some string" is not an RegExp');

			equal(true, true, "FIN");
		});



		
		test('test isString()', function () {
// true
			equal($.isString("some string"), true, '"some string" is a String');
			equal($.isString(""), true, '"" is a String');
//false
			equal($.isString(/[0-9]{3}-[0-9]{3}-[0-9]{4}/), false, '/[0-9]{3}-[0-9]{3}-[0-9]{4}/ is not a String');
			equal($.isString(new RegExp()), false, 'new RegExp() is not a String');
			equal($.isString(function() {}), false, 'function() {} is not a String');
			equal($.isString(Cragnon), false, 'function() {} is not a String');
			equal($.isString(eval), false, 'function() {} is not a String');
			equal($.isString(undefined), false, 'undefined is not a String');
			equal($.isString(null), false, 'null is not a String');
			equal($.isString([]), false, 'Array is not a String');
			equal($.isString(new Array()), false, 'Array is not a String');
			equal($.isString(1), false, '1 is not a String');
			equal($.isString(0), false, '0 is not a String');
			equal($.isString(NaN), false, 'NaN is not a String');
			equal($.isString(Infinity), false, 'Infinity is not a String');
			equal($.isString(true), false, 'true is not a String');
			equal($.isString(false), false, 'false is not a String');

			equal(true, true, "FIN");
		});

  
		test('test isUndefined()', function () {
// true
			equal($.isUndefined(undefined), true, 'undefined is undefined');
//false
			equal($.isUndefined(/[0-9]{3}-[0-9]{3}-[0-9]{4}/), false, '/[0-9]{3}-[0-9]{3}-[0-9]{4}/ is not undefined');
			equal($.isUndefined(new RegExp()), false, 'new RegExp() is not undefined');
			equal($.isUndefined(function() {}), false, 'function() {} is not undefined');
			equal($.isUndefined(Cragnon), false, 'function() {} is not undefined');
			equal($.isUndefined(eval), false, 'function() {} is not undefined');
			equal($.isUndefined("some string"), false, '"some string" is not undefined');
			equal($.isUndefined(""), false, '"" is not undefined');
			equal($.isUndefined(null), false, 'null is not undefined');
			equal($.isUndefined([]), false, 'Array is not undefined');
			equal($.isUndefined(new Array()), false, 'Array is not undefined');
			equal($.isUndefined(1), false, '1 is not undefined');
			equal($.isUndefined(0), false, '0 is not undefined');
			equal($.isUndefined(NaN), false, 'NaN is not undefined');
			equal($.isUndefined(Infinity), false, 'Infinity is not undefined');
			equal($.isUndefined(true), false, 'true is not undefined');
			equal($.isUndefined(false), false, 'false is not undefined');

			equal(true, true, "FIN");
		});
  


		test('test isNull()', function () {
// true
			equal($.isNull(null), true, 'null is null');
//false
			equal($.isNull(/[0-9]{3}-[0-9]{3}-[0-9]{4}/), false, '/[0-9]{3}-[0-9]{3}-[0-9]{4}/ is not null');
			equal($.isNull(new RegExp()), false, 'new RegExp() is not null');
			equal($.isNull(function() {}), false, 'function() {} is not null');
			equal($.isNull(Cragnon), false, 'function() {} is not null');
			equal($.isNull(eval), false, 'function() {} is not null');
			equal($.isNull("some string"), false, '"some string" is not null');
			equal($.isNull(""), false, '"" is not null');
			equal($.isNull([]), false, 'Array is not null');
			equal($.isNull(new Array()), false, 'Array is not null');
			equal($.isNull(1), false, '1 is not null');
			equal($.isNull(0), false, '0 is not null');
			equal($.isNull(NaN), false, 'NaN is not null');
			equal($.isNull(Infinity), false, 'Infinity is not null');
			equal($.isNull(true), false, 'true is not null');
			equal($.isNull(false), false, 'false is not null');

			equal(true, true, "FIN");
		});

	
	}

	function testDearGodWhatIsThatThing() {

		test('test DearGodWhatIsThatThing', function () {
			equal($.DearGodWhatIsThatThing([]), 'array', 'it is "array"');
			equal($.DearGodWhatIsThatThing({}), 'object', 'it is "object"');
			equal($.DearGodWhatIsThatThing(true), 'boolean', 'it is "boolean"');
			equal($.DearGodWhatIsThatThing(false), 'boolean', 'it is "boolean"');
			equal($.DearGodWhatIsThatThing(0), 'number', 'it is "number"');
			equal($.DearGodWhatIsThatThing(1), 'number', 'it is "number"');
			equal($.DearGodWhatIsThatThing(NaN), 'nan', 'it is "nan"');
			equal($.DearGodWhatIsThatThing(Infinity), 'infinity', 'it is "infinity"');
			equal($.DearGodWhatIsThatThing(null), 'null', 'it is "null"');
			equal($.DearGodWhatIsThatThing(undefined), 'undefined', 'it is "undefined"');
			equal($.DearGodWhatIsThatThing(new Date()), 'date', 'it is "date"');
			equal($.DearGodWhatIsThatThing(/[0-9]+/), 'regexp', 'it is "regexp"');
			equal($.DearGodWhatIsThatThing(function () {}), 'function', 'it is "function"');
			equal($.DearGodWhatIsThatThing(new Cragnon()), 'cragnon', 'it is "cragnon"');
		});
	}


/* Can't really test until isEqual is written
function testExtend() {
	var defaults = {initialize: false, getDataFromLocalStorage: false, smoothify: false },
		options = {initialize: true, getDataFromLocalStorage: false, smoothify: true },
		t3,
		t4,
		t5;

	options = $.extend(false, defaults, options);

	test('test $.extend(...)', function () {

	});
}



/*
	function testEqual() {
		test('Test $.equal(...)', function () {
			//equal($.equal(null, null), true, 'equal(null,null);');
			//equal($.equal({}, {}), true, 'equal({}, {});');
			equal($.equal({a: 4}, {b: 4}), false, 'equal({a: 4}, {b: 4}); false');
			//equal($.equal([], []), true, 'equal([], []);');
			//equal($.equal(dom1, dom2), true, 'equal(dom1, dom2); true');
			//equal($.isEqual(dom1, dom3), false, 'isEqual(dom1, dom3); false');
		});
	}





	function testIsEqual() {
		var crag = Cragnon(),
			dom1 = document.getElementById('qunit'),
			dom2 = document.getElementById('qunit'),
			dom3 = document.getElementById('cragnon');


		test('Test $.isEqual(...)', function () {
			//equal($.isEqual(null, null), true, 'isEqual();');
			equal($.isEqual(dom1, dom2), true, 'isEqual(dom1, dom2); true');
			//equal($.isEqual(dom1, dom3), false, 'isEqual(dom1, dom3); false');
		});
	}



	function testExtend() {
		var crag = Cragnon(),
// Objects
			obj1 = {a:'thing', b:1},
			obj2 = {b:4, c:42},
			objectsCombined12 = $.extend(false, obj1, obj2),
			obj12 = {a: 'thing', b: 4, c: 42},
			obj12b = {a: 'thing', b: 4, c: 33},
			obj3 = {obj1: {5:true}, obj2: obj2},
			obj4 = {},
			combinedObect23 = {},
// Arrays
			array1 = [3,4,5,1,4,9, 19, 49, 18, 10, 10, 1000],
			array2 = [null, "string", 'stringy', {}, 234, objectsCombined12],
			array3 = [],
			array4 = [],
			arr12 = [null, "string", 'stringy', {}, 234, {a:'thing', b:4, c: 42}, 19, 49, 18, 10, 10, 1000],
			arr12b = [null, "string", 'stringy', {}, 3234, {a:'thing', b:4}, 19, 49, 18, 10, 10, 1000],
			arrayCombined = $.extend(array1, array2);


		array3[1] = 2;
		array3.push('string')
		array3.push('stringy');


		test('Test $.evolve(...)', function () {
			equal(true, true, 'Start');

			equal($.isEqual(arr12b, arrayCombined), false, 'extend an array');
			equal($.isEqual(objectsCombined12, obj12b), false, 'extend an object');

			equal($.isEqual(arr12, arrayCombined), true, 'extend an array');
			equal($.isEqual(objectsCombined12, obj12), true, 'extend an object');

			equal(true, true, 'FIN');
		});

	}




	function testCopy() {
		var newCragnon = new Cragnon();
		var cragnon = Cragnon();
		var valuesTest = {
			emptyObject: {},
			emptyArray: [],
			undefinedValue: undefined,
			nullValue: null,
			emptyString: "",
			aNumber: 0,
			aCragnon: new Cragnon(),
			aNaNValue: NaN,

		};

		console.log('-- testCopy()');
		test('Test $.copy(...)', function () {
			equal(true, true, "Start Copy Tests");

			equal($.isEmpty({}), true, "{} is empty");
			equal($.isEmpty([]), true, "[] is empty");
			//equal($.isEmpty(null), true, "null is empty");
			//equal($.isEmpty(undefined), true, "undefined is empty");
			//equal($.isEmpty(NaN), true, "NaN is empty?");

			equal($.isEqual($.copy({}), {}), true, '"{}" copied');
			equal($.copy(false), false, '"false" value copied');

			equal(true, true, "FIN - Copy Tests");
		});
		console.log('end testCopy();')
	}



	function testIsBoolean() {
		var newCragnon = new Cragnon();
		var cragnon = Cragnon();
		var valuesTest = {
			emptyObject: {},
			emptyArray: [],
			undefinedValue: undefined,
			nullValue: null,
			emptyString: "",
			aNumber: 0,
			aCragnon: new Cragnon(),
			aNaNValue: NaN,

		};

		test('testIsBoolean', function () {
			equal(true, true, "Start isBoolean Tests");

			equal($.isBoolean(true), true, '"true" is a boolean');
			equal($.isBoolean(false), true, '"false" is a boolean');
			equal($.isBoolean(0), false, '"0" is *not* a boolean');
			equal($.isBoolean(1), false, '"1" is *not* a boolean');

			equal($.isBoolean(NaN), false, '"NaN" is *not* a boolean');

			//equal($.copy(NaN), NaN, "Empty Object");


			equal(true, true, "FIN - isBoolean Tests");
		});
	}









	///
	//  <TestName>
	//  <TestDescription>
	// 	
	function testName() {
		var crObj = _(),
			crLib = _,
			arrayObject = [],
			objectObj = {};

		console.log('');
		console.log('** BEGIN testName Test *****');

		// .. Test BODY

		console.log('** END testName Test *****');
		console.log('');
	}


	//
	//  test_isCragnon_method
	//  Tests the isCragnon Method 
	//
	function test_isCragnon_method() {
		var crObj = _(),
			crLib = _,
			arrayNotCragnon = [],
			objectNotCragnon = {};

		console.log('');
		console.log('** BEGIN test_isCragnon_method Test *****');

		if ($.isCragnon(crObj)) {
			console.log('cragnon is cragnon');
		}
		else {
			console.log('cragnon is NOT cragnon');	
		}

		if ($.isCragnon(crLib)) {
			console.log('library is cragnon');
		}
		else {
			console.log('library is NOT cragnon');	
		}

		if ($.isCragnon(arrayNotCragnon)) {
			console.log('array is cragnon');
		}
		else {
			console.log('array is NOT cragnon');	
		}

		if ($.isCragnon(objectNotCragnon)) {
			console.log('object is cragnon');
		}
		else {
			console.log('object is NOT cragnon');	
		}

		console.log('** END test_isCragnon_method Test *****');
		console.log('');
	}

	//
	// test_find_method
	// tests the $.find() method
	//
	function test_find_method() {
		var crag, // = _,
			ulSecond, // = crObj.find('ul'),
			lisOdds,
			liMenu; // = crObj.find('li');

		console.log('');
		console.log('** BEGIN test_find_method Test *****');

		console.log('Find all uls...');
		ulSecond = _('ul.second');
		//crag = _();
		lisOdds = ulSecond.find('li.odd');

		liMenu = _('.menu li');

		console.dir(ulSecond);
		console.dir(lisOdds);
		console.dir(liMenu);

		console.log('** END test_find_method Test *****');
		console.log('');
	}


	//
	// test_find_method
	// tests the $.find() method
	///	
	function test_select_method() {
		var crag = {},
			crag2 = {};

		console.log('');
		console.log('** BEGIN test_select_method Test *****');

		// .select(): used to make a new Cragnon object
		// simple test
		crag = Cragnon.select('ul'); // select basically is new Cragnon('ul');

		// .find(): used to make a new Cragnon Object within the scope of the current Cragnon object
		// Should find the same thing as above
		crag2 = Cragnon.find('ul');

		// .push(): used to add items to the current Cragnon Object
			// What does this mean for the .context property?


		// .concat(): makes a new Cragnon object from the elements of both the current and given Cragnon Objects or CSS selector.
			// what does this mean for the .context property?

		console.dir(crag);


		console.log('** END test_select_method Test *****');
		console.log('');
	}






	//
	// test_filter_method
	// tests the new filter method
	//	
	function test_filter_method() {
		var crObj = _(),
			crLib = _,
			arrayObject = [],
			objectObj = {};

		console.log('');
		console.log('** BEGIN test_filter_method Test *****');

		// .. Test BODY

		console.log('** END test_filter_method Test *****');
		console.log('');
	}
	

	//
	// test_map_method
	// tests the new filter method
	//	
	function test_map_method() {
		var crObj = _(),
			crLib = _,
			arrayObject = [],
			objectObj = {};

		console.log('');
		console.log('** BEGIN test_map_method Test *****');

		// .. Test BODY

		console.log('** END test_map_method Test *****');
		console.log('');
	}


	//
	// test_slice_method
	// tests the new filter method
	//
	function test_slice_method() {
		var crObj = _(),
			crLib = _,
			arrayObject = [],
			objectObj = {};

		console.log('');
		console.log('** BEGIN test_slice_method Test *****');

		// .. Test BODY

		console.log('** END test_slice_method Test *****');
		console.log('');
	}


	//
	// test_clone_method
	// tests the new filter method
	//	
	function test_clone_method() {
		var crObj = _(),
			crLib = _,
			arrayObject = [],
			objectObj = {};

		console.log('');
		console.log('** BEGIN test_clone_method Test *****');

		// .. Test BODY

		console.log('** END test_clone_method Test *****');
		console.log('');
	}




	//
	// test_apply_method
	// test what the apply method does
	///	
	function test_apply_method() {
		var crObj = _(),
			crObj2 = _(),
			value;

		console.log('');
		console.log('** BEGIN test_apply_method Test *****');

		crObj = new Cragnon('li:nth-child(even)');
		console.dir(crObj);		
		//crObj.context = new Cragnon('ul');
		console.dir(crObj);

		crObj2 = new Cragnon('li:nth-child(odd)');

		value = [].concat.apply(crObj, crObj2);

		console.log('value');
		console.dir(value);

		console.log('** END test_apply_method Test *****');
		console.log('');
	}


	function testselectorFromElement() {
		var element = document.querySelectorAll('#search_area')[0],
			selector = $.selectorFromElement(element);

		//console.log('testselectorFromElement()');
		//console.dir(element);
		//console.log(selector);

	}

	function testStyles() {
		var crObj = _('#search_area'),
			styles1 = '',
			styles2 = '',
			styles3 = '',
			item1Width = '';


		// STYLES

		// styles([properties])
		styles1 = crObj.styles(['width', 'height']); // return width/height
			console.dir(styles1);

		crObj.styles([{'width': '100px'}, {'height': '100px'}]); // set width of element to 100px

		// styles({properties with null values})
		styles2 = crObj.styles({'width': undefined, 'height': undefined}); // return width/height
			console.dir(styles2);

		styles3 = crObj.styles({'width': '150px', 'height': null, 'border-radius': 0});
		// return array of height; sets value for width.
			console.dir(styles3);

		// styles({properties with proper values})
		crObj.styles({'width': '200px', 'height': '200px'}); // set width of element to 200px
		

		// STYLE


		item1Width = crObj.style('width');
		console.log(item1Width);
		
		crObj.style('width', '200px').style('height', '200px');
		console.dir(crObj.styles(['width','height']));
	}
*/


	/* 
	//Commented out. To put in its own file at a later time.
	function testGoogleCode() {
		var isInTree = function (value, tree) {

			if (typeof value === 'undefined' || value === null) { //return false if there is no value to evaluate
				return false;
			}
			
			// because tree.value can have 0, we have to use typeof instead of tree.value, which would normally evaluate to false if tree.value didn't exist.
			if (typeof tree !== 'object' || typeof tree.value === 'undefined') { // needs to have at least .value
				return false;
			}
`
			if (tree.value === value) { //is this the value we're looking for?
				return true;
			}
			else if (tree.value < value && tree.more) { // if this tree.value is too small and there is a greater option
				return isInTree(value, tree.more);
			}
			else if (tree.value > value && tree.less) { // if this tree.value is too large and there is a lesser option
				return isInTree(value, tree.less);
			}

			return false;
		};

		var myTree = {"value": 2, "less": {"value": 1, "less": {"value": 0}}, "more": {"value": 10, "less": {}}};		

		console.log(isInTree(9, myTree)); // false
		console.log(isInTree(2, myTree)); // true
		console.log(isInTree(0, myTree)); // true
		console.log(isInTree(10, myTree)); // true
		console.log(isInTree(1, myTree)); // true
		console.log(isInTree(0)); // false
		console.log(isInTree(0, {})); // false

	} 
	// end of long comment section
	*/ 

} (window, undefined));

