<!-- By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. -->

    var i,
	$sum = 0,
	$var1 = 0,
	$var2 = 1,
	$var3,
	$wholeNum = new RegExp(/^\s*\d+\s*$/);
	
	//document.write($var1 + "<br/>");
	//document.write($var2 + "<br/>");

	for (i = 3; i <= 40; i++) {
		
			$var3 = $var1 + $var2;
			$var1 = $var2;
			$var2 = $var3;
			
			if ($var3 <= 4000000) {
			
				if ($wholeNum.test( $var3 / 2 )) {
					
				$sum = $sum + $var3;
				//document.write($var3 + "<br/>");
				//document.write($sum + 1);
				
				}
				
			}
	}
		
	console.log($sum);	

