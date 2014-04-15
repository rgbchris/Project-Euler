/**
 * 
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there  * are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 * 
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how  * many letters would be used?
 * 
 * 
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two)  * contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of  * "and" when writing out numbers is in compliance with British usage.
 * 
 */

function print(val) {
	console.log(val);
}


	single_arr = ['one','two','three','four','five','six','seven','eight','nine'];
	teens_arr  = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	tens_arr = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

var single_nums_length = 0,
		teens_num_length = 0,
		ten_num_length = 0,
		whole_hundreds_length = 0,
		thousand_length = 0;

for (var i = 1; i <= 1000; i++) {


	var num_letter_total, num;

	var indx;

	// 1 - 9
	if (i >= 1 && i <= 9) {
		num = single_arr[i - 1];	
		num_letter_total = parseInt(num.length);
		single_nums_length = single_nums_length + num_letter_total;
	}

	// 10, 20, - 90 ...
	else if ((i < 100) && (i % 10 == 0)) {
		indx = (i / 10) - 1;
		num = tens_arr[indx];
		num = num.length;
		ten_num_length = ten_num_length + num;
	}

	// 11 - 19
	else if (i >= 11 && i <= 19) {
		num = teens_arr[i - 11];		
		num = num.length;
		teens_num_length = teens_num_length + num;
	}

	// Whole 100's
	else if (i % 100 == 0 && i < 1000) {
		indx = (i / 100) - 1;
		num = single_arr[indx] + ' hundred';
		num = num.replace(/[-/\s]/g,'');
		num = num.length;
		whole_hundreds_length = whole_hundreds_length + num;
	} 
	else if (i == 1000) {
		num = 'One Thousand'.replace(/[-/\s]/g,'');
		num = num.length;
		thousand_length = thousand_length + num;
	}

}





var tens_total = ((ten_num_length - 3) * 9) + (single_nums_length * 9) + teens_num_length + ten_num_length;


// print(tens_total);

// print(tens_total);



var hundreds_total = 0;
hundreds_total = hundreds_total + tens_total; // 1 - 99
hundreds_total = hundreds_total + whole_hundreds_length + thousand_length; // 1 - 99 & 100, 200 - 900 & 1000
hundreds_total = hundreds_total + (((whole_hundreds_length + (3 * 9)) * 99) + (tens_total * 9));

print(hundreds_total);






