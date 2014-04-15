/**
 * What is the largest prime factor of the number 600851475143?
 */

// Load Modules
var time = require('./timer'),
		math = require('./math'),
		put = console.log.bind(console);


// var val = math.generatePrimesTo(10000);
var val = math.erasthenes(10000);

time.print(val);
	
