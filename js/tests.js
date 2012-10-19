/*
	Tests for cragnon.js
	// TODO: upgrade to a unit testing library. Build suite, etc.
	// http://omar.gy/how-i-ended-up-enjoying-javascript/
*/

(function (window) {

	function runTests() {
		test0010(); // v0.0.1
		test0020(); // v0.0.2
		testStyles();
		// testGoogleCode();
		// see the pattern? :D
	}
	window.runTests = runTests;

	function test0010() { // test for v0.1.0
		var crObj = _(), // initialized version (different function from un-inited version)
			crLib = _; // uninitialized version (different functions from inited version)

		//console.dir(crLib);
		//console.dir(crObj);
	}

	// more tests as more functionality is added
	// ....
	function test0020() {
		var crObj = _('ul li.odd'),
			crObj2 = _('ul').find('li.odd');

		testselectorFromElement();
		//console.dir(crObj);
		//console.dir(crObj2);
	}

	function testselectorFromElement() {
		var element = document.querySelectorAll('#search_area')[0],
			selector = _.selectorFromElement(element);

		//console.log('testselectorFromElement()');
		//console.dir(element);
		//console.log(selector);

	}

	function testStyles() {
		var crObj = _('#search_area'),
			styles1 = '',
			styles2 = '',
			styles3 = '';


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


		crObj.style('width');
		crObj.style('width', '200px').style('height', '200px');
		console.dir(crObj.styles(['width','height']));
	}
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

