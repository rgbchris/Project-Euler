<!-- Find the sum of all the multiples of 3 or 5 below 1000. -->
var i = 1;
var $wholeNum = new RegExp(/^\s*\d+\s*$/);
var $sum = 0;

for (i = 1; i < 1000; i ++) {
	if ($wholeNum.test(i / 3) || $wholeNum.test(i / 5)) { 
		$sum = $sum + i;
	}
}

console.log("The total is " + $sum);

