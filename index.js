var merp = document.getElementById("hello")
var derp = document.getElementById("container")
var length = 1;
var height = 1;
var interval = 10;
var slider = document.getElementById("slider");
setInterval(function() {
  interval = slider.value;}, 10);

function myRepeatingInterval() {
  merp.style.borderRadius = "5px";
  merp.style.transition = "all 1s ease-out";
  length = length + 1;
	height = height + 1;
	if (length <= 50) {
    derp.style.backgroundColor = "blue"
    merp.style.backgroundColor = "red";
		merp.style.width = length + "px"
	} else if (length >= 50 && length <= 100) {
		merp.style.backgroundColor= "blue";
		merp.style.top = "240px"
		merp.style.left = "75px"
		merp.style.width = length + "px"
    derp.style.backgroundColor = "black"
	} else {
		merp.style.top = "100px"
		merp.style.left = "0"
		length = 1;
		height = 12;
	};

	if (height < 50) {
		merp.style.height = height + "px"
		merp.style.backgroundColor = "green"
    derp.style.backgroundColor = "yellow"
	} else if (height >= 50 && height <= 100) {
    derp.style.backgroundColor = "red"
		merp.style.left = "100px"
		merp.style.top = "0px"
		merp.style.height = height + "px"
	} else {
		merp.style.left = "220px"
		merp.style.top = "150px"
		height = 1;
		length = 25;
	};
};
var myInterval;

 function runThis() {
    if (!myInterval) {
      myInterval = setInterval(myRepeatingInterval, interval);
    }
 };

  function reset() {
     merp.style.height = 1;
     merp.style.width = 1;
     merp.style.top = "0";
     merp.style.left = "0";
  };

  function stop() {
    clearInterval(myInterval);
    myInterval = null;
  };
