
var myInterval = setInterval(myRepeatingInterval, interval);
var merp = document.getElementById("hello")
var length = 1;
var height = 1;
var interval = 10;
var slider = document.getElementById("slider");
setInterval(function() {
  interval = slider.value;}, 10)

function myRepeatingInterval() {
  clearInterval(myInterval);
	length = length + 1;
	height = height + 1;
	if (length < 50) {
		merp.style.width = length + "px"
		//console.log(length);
	} else if (length >= 50 && length <= 100) {
		merp.style.backgroundColor= "blue";
		merp.style.top = "220px"
		merp.style.left = "75px"
		merp.style.width = length + "px"
	} else {
		merp.style.top = "100px"
		merp.style.left = "0"
		length = 1;
		height = 12;
	}

	if (height < 50) {
		merp.style.height = height + "px"
		merp.style.backgroundColor = "green"
		//console.log(height);
	} else if (height >= 50 && height <= 100) {
		merp.style.left = "100px"
		merp.style.top = "0px"
		merp.style.height = height + "px"
	} else {
		merp.style.left = "200px"
		merp.style.top = "150px"
		merp.style.backgroundColor= "red";
		height = 1;
		length = 25;
	}
}


 function runThis() {
   var myInterval = setInterval(myRepeatingInterval, interval);
 }
  function reset() {
    clearInterval(myInterval);
    interval = null;
     length = 1;
     height = 1;
     merp.style.top = "0";
     merp.style.left = "0";
  }
