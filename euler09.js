/**
 * Project Euler Problem # 009
 * 
 * PROBLEM DESCRIPTION:
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.
 */

// Load Modules
var _time = require('./timer'),
		_math = require('./math'),
		_helpers = require('./helpers'),
		put = console.log.bind(console);

var val, a, b, c;
	
for (a = 1; a <= 998; a++) {
	for (b = 2; b <= 998; b++) {
		c = 1000 - a - b;
		if (_math.isPythagoreanTriple(a, b, c)) {
			val = a * b * c;
		}
	}
}
				
_time.print(val);
