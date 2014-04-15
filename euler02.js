/**
 * Project Euler Problem # 002
 * 
 * PROBLEM DESCRIPTION:
 *
 * By considering the terms in the Fibonacci sequence whose values 
 * do not exceed four million, find the sum of the even-valued terms.
 *
 */

// Load Modules
var time = require('./timer'),
		math = require('./math'),
		helpers = require('./helpers'),
		put = console.log.bind(console);

var i = 0,
	  sum = 0,
	  fib = 0,
	  loop = true;

while (loop) {
	fib = math.getFibonacci(i);
	if (math.isEven(fib)) {
		if (fib >= 4000000) { 
			break;
		}
		sum = sum + fib;
	}		
	i++;
}

time.print(sum);

