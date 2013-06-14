<!-- Find the largest palindrome made from the product of two 3-digit numbers. -->

	function palindrome(){
		
		var total = new Array();
		
		String.prototype.reverse = function()
		{
		return this.split('').reverse().join('');
		}
		
		for (var i = 100; i <= 999; i++ ) {
			for (var j = 100; j <= 999; j++ ) {
				var sum = (i * j)
				var num = sum.toString();
				if (num.substring(0,3) == num.substring(3).reverse()) {
					//var lum = parseInt(num);
					//total.push = lum;
					total.push(parseInt(num));
				}
			}	
		}
		
		var largest = Math.max.apply(Math, total);
		console.log(largest);
	}
	
	window.onload = function(){
		palindrome();
	}

