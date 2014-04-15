/**
 * Project Euler Problem # 
 * 
 * PROBLEM DESCRIPTION:
 *
 * The following iterative sequence is defined for the set of positive integers:
 * 
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 * 
 * Using the rule above and starting with 13, we generate the following sequence:
 * 
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 * 
 * Which starting number, under one million, produces the longest chain?
 * 
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */	

// Load Modules
var _time = require('./timer'),
		_math = require('./math'),
		_helpers = require('./helpers');

var val;


function even(n) {
	return (n / 2);
}

function odd(n) {
	return ((3 * n) + 1);
}

var terms = 0;

 
var i;
for ( i = 999999; i > 0; i-- ) {

	(function(i) {

		var arr = [];
		var start_num = i;
		collatz(i, arr, start_num);
	
	})(i);

}

function collatz(n, elem, start_n) {
	if (n % 2 == 0) {
		n = even(n);
	} else {
		n = odd(n);
	}

	if (n == 1) {
		elem.push(n);	
		if (elem.length > parseInt(terms)) {
			terms = elem.length + ' terms, and the number is:' + start_n;
			val = terms;
		}
	} else {
		elem.push(n);
		collatz(n, elem, start_n);
	}

}

_time.print(val);
