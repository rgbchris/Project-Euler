/**
 * Project Euler Problem # 004
 * 
 * PROBLEM DESCRIPTION:
 *
 * Find the largest palindrome made 
 * from the product of two 3-digit numbers.
 *
 */


// Load Modules
var _time = require('./timer'),
		_math = require('./math'),
		_helpers = require('./helpers'),
		put = console.log.bind(console);


var sum, val, total = [];
		
for (var i = 100; i <= 999; i++ ) {
	for (var j = 100; j <= 999; j++ ) {
		sum = i * j;
		if (_math.isPalindrome(sum)) {
			total.push(sum);
		}
	}
}

val = _helpers.arrayMax(total);

_time.print(val);

