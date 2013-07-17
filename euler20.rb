# n! means n × (n − 1) × ... × 3 × 2 × 1
# 
# For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
# and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
# 
# Find the sum of the digits in the number 100!

$i     = 101
$num   = 3
$n     = $i - 1
$sum   = 0
$total = 0

begin

  if $n > 1
  	$i -=1
   	$n -=1
  end

	if $i == 100  
  	$sum += $i * $n
  	$n -=1
  end

  $sum = $sum * $n 

end while $i > $num
	
	$numString = $sum.to_s()
	$numString = $numString.split(//)
	a = 0
	while $numString[a]
		$total += $numString[a].to_i
		a += 1
	end

	puts $total