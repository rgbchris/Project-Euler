<!-- There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc. -->

	function pythagorean() {

	var answer;
	var c = [];
	
		for(a=1;a<=995;a++){
			for(b=2;b<=996;b++){
				for(c=2;c<=996;c++){
					if((Math.pow(a,2) + Math.pow(b,2)) == Math.pow(c,2)){
						if(a + b + c == 1000){
							console.log(a*b*c + "<br/>");
						}
					}
				}
			}
		}	
		
	}	
		
	window.onload = function(){
		pythagorean();
	}