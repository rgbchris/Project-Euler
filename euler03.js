<!-- What is the largest prime factor of the number 600851475143? -->

	var	$wholeNum = new RegExp(/^\s*\d+\s*$/);
	
	function primeFactor(max) {
		for (var i = 2; i <= max; i++) { // loop through all numbers
				var $isPrime = true;
				for (var j = 2; j < i; j++) {
					if (i % j == 0) {
						$isPrime = false;
						break;
					} 
				}
				
			if($isPrime) {
				if ($wholeNum.test(max / i)) { 
					console.log(i + "<br/>");
				}
			}
		}
	}
	
	window.onload = function () {
		primeFactor(600851475143);
	}
	
