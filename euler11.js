/**
 * Project Euler Problem # 011
 * 
 * PROBLEM DESCRIPTION:
 *
 * What is the greatest product of four adjacent numbers 
 * in any direction (up, down, left, right, or diagonally) 
 * in the 20×20 grid?
 */

// Load Modules
var _time = require('./timer'),
		_math = require('./math'),
		_helpers = require('./helpers'),
		put = console.log.bind(console);

var val;

var a = "0802229738150040007504050778521250779108" + 
		 		"4949994017811857608717409843694804566200" + 
				"8149317355791429937140675388300349133665" + 
				"5270952304601142692468560132567137023691" + 
				"2231167151676389419236542240402866331380" + 
				"2447326099034502447533537836842035171250" +
				"3298812864236710263840675954706618386470" +
				"6726206802621220956394396308409166499421" +
				"2455580566739926971778789683148834896372" + 
				"2136230975007644204535140061339734313395" +
				"7817532822753167159403800462161409535692" +
				"1639054296353147555888240017542436298557" +
				"8656004835718907054444374460215851541758" +
				"1980816805944769287392138652177704895540" + 
				"0452088397359916079757321626267933279866" +
				"8836688757622072034633674655123263935369" +
				"0442167338253911249472180846293240627636" +
				"2069364172302388346299698267598574043616" +
				"2073352978319001743149714886811623570554" +
				"0170547183515469169233486143520189196748"; 
	
		var nums = [];
	
		for (i = 0; i < 800; i += 2 ) {	
			nums[nums.length++] = Number(a.charAt(i) + a.charAt(i+1)) * Number(a.charAt(i+2) + a.charAt(i+3)) 
								* Number(a.charAt(i+4) + a.charAt(i+5)) * Number(a.charAt(i+6) + a.charAt(i+7)); // RIGHT ++ GOOD
								
			nums[nums.length++] = Number(a.charAt(i) + a.charAt(i+1)) * Number(a.charAt(i-2) + a.charAt(i-1)) 
								* Number(a.charAt(i-4) + a.charAt(i-3)) * Number(a.charAt(i-6) + a.charAt(i-5)); // LEFT -- GOOD
								
			nums[nums.length++] = Number(a.charAt(i) + a.charAt(i+1)) * Number(a.charAt(i+40) + a.charAt(i+41)) 
								* Number(a.charAt(i+80) + a.charAt(i+81)) * Number(a.charAt(i+120) + a.charAt(i+121)); // DOWN ++ GOOD
								
			nums[nums.length++] = Number(a.charAt(i) + a.charAt(i+1)) * Number(a.charAt(i-40) + a.charAt(i-39)) 
								* Number(a.charAt(i-80) + a.charAt(i-79)) * Number(a.charAt(i-120) + a.charAt(i-119)); // UP -- GOOD
								
			nums[nums.length++] = Number(a.charAt(i) + a.charAt(i+1)) * Number(a.charAt(i-42) + a.charAt(i-41))
								* Number(a.charAt(i-84) + a.charAt(i-83)) * Number(a.charAt(i-126) + a.charAt(i-125)); // UP LEFT -- GOOD
								
			nums[nums.length++] = Number(a.charAt(i) + a.charAt(i+1)) * Number(a.charAt(i+42) + a.charAt(i+43))
								* Number(a.charAt(+84) + a.charAt(i+85)) * Number(a.charAt(i+126) + a.charAt(i+127)); // DOWN RIGHT ++ GOOD
								
			nums[nums.length++] = Number(a.charAt(i) + a.charAt(i+1)) * Number(a.charAt(i+38) + a.charAt(i+39))
								* Number(a.charAt(+76) + a.charAt(i+77)) * Number(a.charAt(i+114) + a.charAt(i+115)); // DOWN LEFT ++ GOOD
			
			nums[nums.length++] = Number(a.charAt(i) + a.charAt(i+1)) * Number(a.charAt(i-38) + a.charAt(i-37))
								* Number(a.charAt(-76) + a.charAt(i-75)) * Number(a.charAt(i-114) + a.charAt(i-113)); // UP RIGHT -- GOOD
		}
		
		var total = [];
		
		for (x = 0; x < 3200; x++) {
			if ( isNaN(nums[x]) == false) {
				total.push(nums[x]);
			}
		}
	
		val = _helpers.arrayMax(total);

	
_time.print(val);