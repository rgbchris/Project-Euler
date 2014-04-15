	/**
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
 * 
 * 3
 * 7 4
 * 2 4 6
 * 8 5 9 3
 * 
 * That is, 3 + 7 + 4 + 9 = 23.
 * 
 * Find the maximum total from top to bottom of the triangle below:
 * 
 * 75
 * 95 64
 * 17 47 82
 * 18 35 87 10
 * 20 04 82 47 65
 * 19 01 23 75 03 34
 * 88 02 77 73 07 63 67
 * 99 65 04 28 06 16 70 92
 * 41 41 26 56 83 40 80 70 33
 * 41 48 72 33 47 32 37 16 94 29
 * 53 71 44 65 25 43 91 52 97 51 14
 * 70 11 33 28 77 73 17 78 39 68 17 57
 * 91 71 52 38 17 14 91 43 58 50 27 29 48
 * 63 66 04 68 89 53 67 30 73 16 69 87 40 31
 * 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
 * 
*/

/**
 * iterate through array
 	 check if there are any numbers to the right
 	 add to sum
 	 move to next array

 */

var arr_tree = [[75],
								[95, 64], 
								[17, 47, 82],
								[18, 35, 87, 10],
								[20, 04, 82, 47, 65],
								[19, 01, 23, 75, 03, 34],
								[88, 02, 77, 73, 07, 63, 67],
								[99, 65, 04, 28, 06, 16, 70, 92],
								[41, 41, 26, 56, 83, 40, 80, 70, 33],
								[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
								[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
								[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
								[1,  71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
								[63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
								[04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]];

	Array.prototype.remove = function(from, to) {
	  var rest = this.slice((to || from) + 1 || this.length);
	  this.length = from < 0 ? this.length + from : from;
	  return this.push.apply(this, rest);
	};

	// start at top
	var m = 0;
	function tree_recursion(arr) {
		var new_tree = [];
		for (var a = 0; a < arr.length; a++) {
			new_tree.push([]);
		}

		for (var i = arr.length - 1; i >= 0; i--) {
			var b = arr[i].length;
			var c = arr[i];
			for (var n = 0; n < b; n++) {
				// console.log('arr.length: ' + arr.length +  ' i: ' + i + ' n: ' + n);
				if (i === (arr.length - 1)) {
					var sum = arr[i - 1][n] + Math.max(arr[i][n], arr[i][n + 1]);
					if (isNaN(sum) == false) {
						new_tree[i].push(sum);
					}
					//arr.splice((arr.length - 2), 1);
				} else {
					new_tree[i].push(arr[i][n]);
				}
			}
		}
		// new_tree.splice(0,1);
		if (m < 15) {
			console.log(new_tree);
		}
		/*
		if (new_tree.length === 1) {
			console.log(new_tree);
		} else {
			tree_recursion(new_tree);
		}
		*/
		m++
		tree_recursion(new_tree);
	}

	tree_recursion(arr_tree);






