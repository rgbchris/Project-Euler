<!-- Find the sum of all the primes below two million. -->

	window.onload = function(){
		var tots = 0;
		for (var i = 2; i <= 2000000; i++) { 	
			var isPrime = true;
				for (var j = 2; j < i; j++) {
					if (i % j == 0) {
						isPrime = false;
						break;
					} 
				}
			
			
			if (isPrime) {
				tots += i;
			}	
		}
		
		console.log(tots);
		
	}
	
