
/**
 * Take the number 192 and multiply it by each of 1, 2, and 3:
 * 
 * 192 × 1 = 192
 * 192 × 2 = 384
 * 192 × 3 = 576
 * By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)
 * 
 * The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).
 * 
 * 
 * What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?
 */

function print(val) {
	console.log(val);
}

Array.max = function( array ){
  return Math.max.apply( Math, array );
};
 

function concat_num(n) {
	var num = n;

	var i = 1;
	while(i) {
		num = num + (num * i);
		if ((num.toString().length === 9) && num <= 987654321 && (num.toString().charAt(0) == '9')) {
			var numm = num.toString();
			check_digits(numm)
		} 
		if (num >= 987654321) {
			return false;
		}
		i++;

	}
	return false;
}

var pand_arr = [];

function check_digits(n) {
	var digit_check = /(?=.*1)(?=.*2)(?=.*3)(?=.*4)(?=.*5)(?=.*6)(?=.*7)(?=.*8)(?=.*9).*/,
			result = digit_check.test(n);
	if (result) {
		pand_arr.push(n);
	}
}

function max_pandigs(arr) {
	var largest_pandig = Array.max(arr);
	print(largest_pandig);
}



while (n) {
	concat_num(n);
	if (n >= 165000000) {
		max_pandigs(pand_arr);
		return false;
	}
  n++;
}






