var _helpers = require('./helpers');

MATH = {

	isWholeNum: function(n) {
		var whole_num_regex = /^\s*\d+\s*$/;
		return whole_num_regex.test(n);
	},

	isEven: function(n) {
		return n % 2 === 0 ? true : false;
	},

	isOdd: function(n) {
		return n % 2 === 1 ? true : false;
	},

	isPrime: function(n) {
		if (n < 2 || n % 2 === 0) {
			return false;
		} else if (n === 2) {
			return true;
		}
		var maxi = Math.pow(n, 0.5),
					 i = 3;
		while (i <= maxi) {
			if (n % i === 0) {
				return false;
			} else {
				i = i + 2;
			}
		}
		return true;
	},

	getFactors: function(n) {
		var factors = [],
				i;
		for (i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
			if (n % i === 0) {
				factors.push(i);
				if (n / i !== i) {
    			factors.push(n / i);
				}
			}
		}
		factors.sort(function(a, b){return a - b;});  // numeric sort
		return factors;
	},

	generatePrimesTo: function(n) {
		var i, primes = [];
		for (i = 0; i <= n; i++) {
			if (MATH.isPrime(i)) {
				primes.push(i);
			}
		}
		return primes;
	},

	// Sieve of Eratosthenes (finds prime numbers up to limit);
	// Alternate of generatePrimesTo
	// ** http://rosettacode.org/wiki/Sieve_of_Eratosthenes#JavaScript
	erasthenes: function(limit) {
    var primes = [];
    if (limit >= 2) {
      var nums = new Array(limit-1);
      for (var i = 2; i <= limit; i++) {
        nums[i - 2] = i;
        var last_prime;
        var idx = 0;
      }
      while ((last_prime = nums[idx]) <= Math.sqrt(limit)) {
        if (last_prime != null) {
          for (var i = idx + last_prime; i < limit - 1; i += last_prime) {
            nums[i] = null;
          }
        }
        idx++;
      }
      for (var i = 0; i < nums.length; i++) {
        if (nums[i] != null) {
          primes.push(nums[i]);
        }
      }
    }
    return primes;
	},

	getPrimeFactors: function(n) {
		var i, factors = [];

		for (i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
			if (n % i === 0 && MATH.isPrime(i)) {
				factors.push(i);
				if (n / i !== i && MATH.isPrime(n / i)) {
  				factors.push(n / i);
				}
			}
		}
		factors.sort(function(a, b){return a - b;});  // numeric sort
		return factors;
	},

	getFactorial: function(n) {
		return n === 1 ? 1 : n * factorial(n - 1);
	},

	getFibonacci: function(n) {
    if (n <= 1) {
    	return n;
    } else {
    	return MATH.getFibonacci(n-1) + MATH.getFibonacci(n-2)
    }

  },

  generate_nth_triangle_number: function(n) {
    var tri_num = 0;
    for (var i = 1; i <= n; i++) {
      tri_num += i;
    }
    return tri_num;
  },

  isPythagoreanTripleArr: function(arr) {
    return (Math.pow(arr[0],2) + Math.pow(arr[1],2) === Math.pow(arr[2],2)) ? true : false;
  },
  isPythagoreanTriple: function(a, b, c) {
    return (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)) ? true : false;
  },

  // From A
  getPythagorianTriple: function(a) {
		var b, c;
		if (MATH.isOdd(a)) {
			b = (Math.pow(a, 2) / 2) - 0.5;
			c = b + 1;
		} else if (MATH.isEven(a)) {
			b = (Math.pow(a, 2) / 4) - 1;
			c = b + 2;
		}
		return [a, b, c];
  },

  isPalindrome: function(n) {
		num = n.toString();
		if (num.substring(0,3) == _helpers.strReverse(num.substring(3))) {
			return true;
		} else {
			return false;
		}
	}

};

module.exports = MATH;
