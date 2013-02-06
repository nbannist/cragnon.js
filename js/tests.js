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
		//test_isCragnon_method(); // _.isCragnon Method Test
		test_find_method(); // __.find(selector) Test
		// test_apply_method(); // commented out

		/*
			test_clone_method
			test_map_method
			test_filter_method
			test_slice_method
		*/


	}
	window.runTests = runTests;

	/**
	 * <TestName>
	 * <TestDescription>
	 */	
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


	/**
	 * test_isCragnon_method
	 * Tests the isCragnon Method 
	 */	
	function test_isCragnon_method() {
		var crObj = _(),
			crLib = _,
			arrayNotCragnon = [],
			objectNotCragnon = {};

		console.log('');
		console.log('** BEGIN test_isCragnon_method Test *****');

		if (_.isCragnon(crObj)) {
			console.log('cragnon is cragnon');
		}
		else {
			console.log('cragnon is NOT cragnon');	
		}

		if (_.isCragnon(crLib)) {
			console.log('library is cragnon');
		}
		else {
			console.log('library is NOT cragnon');	
		}

		if (_.isCragnon(arrayNotCragnon)) {
			console.log('array is cragnon');
		}
		else {
			console.log('array is NOT cragnon');	
		}

		if (_.isCragnon(objectNotCragnon)) {
			console.log('object is cragnon');
		}
		else {
			console.log('object is NOT cragnon');	
		}

		console.log('** END test_isCragnon_method Test *****');
		console.log('');
	}

	/**
	 * test_find_method
	 * tests the _.find() method
	 */	
	function test_find_method() {
		var crObj,// = _(),
			crLib,// = _,
			uls,// = crObj.find('ul'),
			lis;// = crObj.find('li');

		crObj = _();
		crLib = _;

		console.log('');
		console.log('** BEGIN test_find_method Test *****');

		console.log('Find all uls...');
		uls = crObj.find('ul');
		console.log('...');
		console.log('Find all LIs in the given Uls.');
		lis = uls.find('li');
		console.log('...');

		console.dir(uls);
		console.dir(lis);

		console.log('** END test_find_method Test *****');
		console.log('');
	}


	/**
	 * test_find_method
	 * tests the _.find() method
	 */	
	function test_select_method() {
		var crag = {};

		console.log('');
		console.log('** BEGIN test_select_method Test *****');

		// .select(): used to make a new Cragnon object
		crag = Cragnon.select('ul'); // select basically is new Cragnon('ul');

		// .find(): used to make a new Cragnon Object within the scope of the current Cragnon object
			// 

		// .push(): used to add items to the current Cragnon Object
			// What does this mean for the .context property?

		// .concat(): makes a new Cragnon object from the elements of both the current and given Cragnon Objects or CSS selector.
			// what does this mean for the .context property?



		console.dir(crag);


		console.log('** END test_select_method Test *****');
		console.log('');
	}






	/**
	 * test_filter_method
	 * tests the new filter method
	 */	
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
	

	/**
	 * test_map_method
	 * tests the new filter method
	 */	
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


	/**
	 * test_slice_method
	 * tests the new filter method
	 */	
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


	/**
	 * test_clone_method
	 * tests the new filter method
	 */	
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




	/**
	 * test_apply_method
	 * test what the apply method does
	 */	
	/*function test_apply_method() {
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
	}*/
















































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

