exports.curTime = new Date().getTime();

exports.start = function() {
	exports.curTime = new Date().getTime();
};

exports.print = function(value) {
	var finished = new Date().getTime(),
			end = finished - exports.curTime,
			time = end >= 1000 ? (end/1000) + "s" : end + "ms";

	console.log("Answer:  " + value);
	console.log("Elapsed Time: " + time);
};