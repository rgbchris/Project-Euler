/**
 * Project Euler Problem # 005
 * 
 * PROBLEM DESCRIPTION:
 *
 * 2520 is the smallest number that can be divided by 
 * each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly 
 * divisible by all of the numbers from 1 to 20?
 *
 */

// Load Modules
var _time = require('./timer'),
		_math = require('./math'),
		_helpers = require('./helpers'),
		put = console.log.bind(console);
	

var val, i = 20;

while (true) {
	var check_count = 0;
	for (var d = 1; d <= 20; d++) {
		if (i % d === 0) {
			check_count = check_count + 1;
		} else {
			break;
		}
	}
	if (check_count === 20) {
		val = i;
		break;
	}
	i += 2;		
}
	
_time.print(val);