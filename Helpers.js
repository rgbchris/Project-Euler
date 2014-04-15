
// Return max value in array
Array.max = function( array ){
  return Math.max.apply( Math, array );
};



var HELPERS = {

	addUpArray: function(arr) {
		var total = 0;

		for (var i in arr) { 
			total += arr[i]; 
		}
		return total;
	},

	productOfArray: function(arr) {
		var total = 1;
		for (var i in arr) {
			total = total * arr[i]
		}
		return total;
	},

	arrayMax: function(arr) {
		return Math.max.apply(Math, arr);
	},

	strReverse: function(str) {
		return str.split('').reverse().join('');
	}

};

module.exports = HELPERS;