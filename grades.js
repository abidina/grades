
var f = 0
var d = 0
var c = 0
var b = 0
var a = 0

// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// var gradesElement = document.getElementById("grades");


for (var i = 0; i <= scores.length; i++) {
	if (scores[i] > 90) {
		a++;
	} else if (scores[i] > 80) {
		b++;
	} else if (scores[i] > 70) {
		c++;	
	} else if (scores[i] > 60) {
		d++;
	} else {
		f++
	}
}

console.log("A's", a);
console.log("B's", b);
console.log("C's", c);
console.log("D's", d);
console.log("F's", f);


console.log(Math.max(82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87));
console.log(Math.min(82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87));
