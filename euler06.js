<!-- Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum. -->

	function divisible() {
		
		var sumOfSquares = 0;
		var squareOfSums = 0;
		
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
			
		var totalValue = squareOfSumsF() - sumOfSquareF();
		
		console.log(totalValue);
	
	}
	
	window.onload = function(){
		divisible();
	}
	