/**
 * Project Euler Problem # 012
 * 
 * PROBLEM DESCRIPTION:
 *
 * What is the value of the first triangle 
 * number to have over five hundred divisors?
 */

// Load Modules
var _time = require('./timer'),
		_math = require('./math'),
		_helpers = require('./helpers'),
		put = console.log.bind(console);

var val;

var i = 1;

while (true) {

  var tri_num = _math.generate_nth_triangle_number(i);

  var factor_arr = _math.getFactors(tri_num);

  // if over 500 divisors 
  if (factor_arr.length > 500) { 
    val = tri_num; 
    break;
  } else {
    i++;
  }

}
	
_time.print(val);
