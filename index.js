var merp = document.getElementById("hello")
console.log("hello");
console.log(merp);

merp.style.width = "200px";

var length = 1;
var interval = 100; //value in miliseconds

function myRepeatingInterval () {
	length = length + 1;
	//console.log(length);
	merp.style.width = length + "px"
}
setInterval(myRepeatingInterval, interval);


var btn = document.getElementById("button")

window.reset = function reset() {
	console.log(length)
	length = 1;
}
