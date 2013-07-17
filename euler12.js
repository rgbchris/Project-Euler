// What is the value of the first triangle number to have over five hundred divisors?

	function triNum(max){
		
		var	wholeNum = new RegExp(/^\s*\d+\s*$/);
		var tris = [];
		var num = 0;
		var factors = [];
		
		for( i = 0; i < max; i++) { // gives "max" number of triangle numbers
			num = num + i;
			tris[tris.length++] = num;
		}

		for(x = 19999; x < max; x++) { // iterate through triangle numbers
			for( n = 1; n <= tris[x]; n++ ) { // iterate through numbers less than or equal to triangle numbers
				if(wholeNum.test(tris[x]/n)) { // which ones of those numbers divide evenly into the tri num
					factors[factors.length++] = n;
					if (factors.length > 500) {
						return(tris[x]);
					}
				}
			}
		}
		
		
	}
	
	
	
		console.log(triNum(20000));

