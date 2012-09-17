/*
	Tests for cragnon.js
	// TODO: upgrade to a unit testing library.
	// http://omar.gy/how-i-ended-up-enjoying-javascript/
*/

(function (window) {

	function runTests() {
		test0010(); // v0.0.1
		//test0020(); // v0.0.2
		//test0030(); // v0.0.3
		// see the pattern? :D
	}
	window.runTests = runTests;

	function test0010() { // test for v0.1.0
		var crObj = _(), // initialized version (different function from uninited version)
			crLib = _; // uninitialized version (different functions from inited version)

		console.dir(crLib); 
		console.dir(crObj); 


		


	}

	// more tests as more functionality is added
	// ....

} (window, undefined));
