/**
 * Project Euler Problem # 006
 * 
 * PROBLEM DESCRIPTION:
 *
 * Find the difference between the sum of the 
 * squares of the first one hundred natural numbers 
 * and the square of the sum.
 *
 */

// Load Modules
var _time = require('./timer'),
		_math = require('./math'),
		_helpers = require('./helpers'),
		put = console.log.bind(console);

var val,
		sumOfSquares = 0,
		squareOfSums = 0;
	
	function sumOfSquareF() {	
		for (var i = 1; i <= 100; i++ ) {
			sumOfSquares = sumOfSquares + Math.pow(i,2);
		}
		return sumOfSquares;
	}

	function squareOfSumsF() {
		for (var i = 1; i <= 100; i++ ) {
			squareOfSums = squareOfSums + i;
		}
		var squareOfSumsTotal = Math.pow(squareOfSums,2);
		return squareOfSumsTotal;
	}
		
	val = squareOfSumsF() - sumOfSquareF();

	
_time.print(val);