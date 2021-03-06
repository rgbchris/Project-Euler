/**
 * Project Euler Problem # 010
 * 
 * PROBLEM DESCRIPTION:
 *
 * Find the sum of all the primes below two million.
 */

// Load Modules
var _time = require('./timer'),
		_math = require('./math'),
		_helpers = require('./helpers'),
		put = console.log.bind(console);

var val, primes;

primes = _math.generatePrimesTo(2000000);
val = _helpers.addUpArray(primes);
	
_time.print(val);