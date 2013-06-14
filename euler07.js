<!-- What is the 10,001st prime number? -->
	
	function primeNum(max) {
	
		var data = [];
		
		for (var i = 1; i <= max; i++) { 

			var isPrime = true;
			
			for (var j = 2; j < i; j++) {
				if (i % j == 0) {
					isPrime = false;
					break;
				} 
			}
		
			if (isPrime) {
				data[data.length++] = i;
				
			}
				
		}
		
		for (var z = 1; z <= 10001; z++) {
			console.log(z + ". " + data[z] + "<br/>");
		}
	
	}
	
	window.onload = function(){
		primeNum(199999);
	}
	
