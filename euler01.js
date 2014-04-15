/**
 * Project Euler Problem # 001
 * 
 * PROBLEM DESCRIPTION:
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 */

// Load Modules
var time = require('./timer'),
		math = require('./math'),
		helpers = require('./helpers');


var i, sum = 0;

for (i = 1; i < 1000; i ++) {
	if (math.isWholeNum(i / 3) || math.isWholeNum(i / 5)) { 
		sum = sum + i;
	}
}

time.print(sum);