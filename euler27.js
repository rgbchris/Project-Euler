/**
 * Project Euler Problem #027
 * 
 * PROBLEM DESCRIPTION:
 *
 * Euler discovered the remarkable quadratic formula:
 * 
 * n² + n + 41
 * 
 * It turns out that the formula will produce 40 primes for 
 * the consecutive values n = 0 to 39. However, 
 * when n = 40, 402 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, 
 * and certainly when n = 41, 41² + 41 + 41 is clearly divisible by 41.
 * 
 * The incredible formula  n² − 79n + 1601 was discovered, which 
 * produces 80 primes for the consecutive values n = 0 to 79. 
 * The product of the coefficients, −79 and 1601, is −126479.
 * 
 * Considering quadratics of the form:
 * 
 * n² + an + b, where |a| < 1000 and |b| < 1000
 * 
 * where |n| is the modulus/absolute value of n
 * e.g. |11| = 11 and |−4| = 4
 * 
 * Find the product of the coefficients, a and b, for the quadratic 
 * expression that produces the maximum number of primes for 
 * consecutive values of n, starting with n = 0.
 *
 */

// Load Modules
var _time = require('./timer'),
		_math = require('./math'),
		_helpers = require('./helpers');

var a, b, n, num, primes;
var data_store = [];

for (n = 0; n <= 100; n++) {
	primes = [];
	for (a = 999; a > 0; a--) {
		for (b = 999; b > 0; b--) {
			// Quadratic
			var num = (Math.pow(n, 2) + (a * n) + b);
			if (_math.isPrime(num)) {
				primes.push(num);
			} else {
				break;
			}
		}
	}
	data_store.push([primes.length, n, a, b]);
}

_time.print(data_store);
