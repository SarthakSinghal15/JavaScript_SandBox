let val;

val = String(12);
val  = String(true);
val = String([1,2,3,4]);
val = (5).toString();

val = Number('5');

val = parseFloat('100.30');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(3));

var val1 = String(5);
var val2 = 6;
var sum = val2+val1;
console.log(sum);
console.log(typeof sum);