/**
 * Project Euler Problem # 007
 * 
 * PROBLEM DESCRIPTION:
 *
 * What is the 10,001st prime number?
 *
 */

// Load Modules
var _time = require('./timer'),
		_math = require('./math'),
		_helpers = require('./helpers'),
		put = console.log.bind(console);
	
var val, primes;

// Input an arbitrarily large limit for 
// the seive to generate a prime large enough
primes = _math.erasthenes(1000000);

val = primes[10000];

_time.print(val);
		

	
