/**
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
 * 
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
 * 
 * Evaluate the sum of all the amicable numbers under 10000.
 */

function print(val) {
	console.log(val);
}

function array_total (arr) {
	var total = 0;
	for(var i in arr) { 
		total += arr[i]; 
	}
	return total;
}

function find_divisors(n) {
	var comparison_arr = [];
	var proper_divisors = [];
	for (var m = 1; m < n; m++) {
		if ((n % m == 0) && m !== n) {
			proper_divisors.push(m);
		}
	}
	comparison_arr.push(n, array_total(proper_divisors));
	comparison_arr = comparison_arr.toString();
	return comparison_arr;
}

//fruits.reverse();
var onee = [];

for (var i = 1; i < 3; i++) {
	onee.push(find_divisors(i));
	print(onee);
	//print(onee.reverse());
}

function find_amicables(arr) {
	var sorted_arr = arr.sort(),
			results = [];
	for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
	}
	return results;	
}




