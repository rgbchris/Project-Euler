/**
 * Project Euler Problem # 003
 * 
 * PROBLEM DESCRIPTION:
 *
 * What is the largest prime factor of the number 600851475143?
 *
 */

// Load Modules
var time = require('./timer'),
		math = require('./math'),
		helpers = require('./helpers'),
		put = console.log.bind(console);

// Generate Prime Factors
var val = math.getPrimeFactors(600851475143);	

// Find max Prime Factor
val = Array.max(val);

time.print(val);

	
