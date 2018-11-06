// console.log("test");

// var arr = [11,23,56,10,32];

// var min= arr[0];
// var max= arr[0];

// for(i=0;i<arr.length;i++){
//    if (min>arr[i]) min = arr[i];
//    if (max<arr[i]) max = arr[i];
// }

// console.log(min); 
// console.log(max);

var array_counter = function(array) {
	return "в массиве находиться " + array.length + " элемент! ";

};

var multiply = function(x, y) {
	return `${x} умножить ${y} равно ${x * y}`;

};
var some_value = 451;

module.exports.array_counter = array_counter;
module.exports.multiply = multiply;
module.exports.some_value = some_value;
