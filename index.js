var merp = document.getElementById("hello")

merp.style.width = "200px";

var length = 1;
var height = 1;
var interval = 50; //value in miliseconds

function myRepeatingInterval () {
	length = length + 1;
	height = height + 1;
	if (length < 50) {
		merp.style.width = length + "px"
		//console.log(length);
	} else if (length == 50) {
		length = 1;
		merp.style.backgroundColor= "blue";
	}
	if (height < 100) {
	merp.style.height = height + "px"
	//console.log(height);
} else if (height == 100) {
	height = 1;
	length = 25;
	merp.style.backgroundColor= "red";
	}
}
setInterval(myRepeatingInterval, interval);


var btn = document.getElementById("button")

function reset() {
	console.log(length)
	length = 1;
	height = 1;
}
