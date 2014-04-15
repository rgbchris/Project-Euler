/**
 * Project Euler Problem # 015
 * 
 * PROBLEM DESCRIPTION:
 *
 * Each movement in the horizontal is a zero.
 *
 * Starting in the top left corner of a 2×2 grid, and only 
 * being able to move to the right and down, there are exactly 
 * 6 routes to the bottom right corner.
 *
 * How many such routes are there through a 20×20 grid?
 */


// Load Modules
var _time = require('./timer'),
		_math = require('./math'),
		_helpers = require('./helpers');

var val;

function factorial(n) {
	return n === 1 ? 1 : n * factorial(n - 1);
}

var n = 20,
		m = 20;

var first = factorial(n + m);
var second = (factorial(n) * factorial(m));

val = (first / second);

_time.print(val);
