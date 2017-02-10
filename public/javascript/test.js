

var x = 0;

$(document).ready(function() {
	alert("hi")
	timeDisplay();
	

	

var i=0
var period = 30
var increments = 100
var b=2*Math.PI/period
var c=b*period/2
var threePointFiveCycles = period*increments*(3.5)
console.log(threePointFiveCycles)

function timeDisplay(){

	
	var x = (0.5)*Math.cos((b*i)-c)+(0.5)


	
	
	
	$('.brand').css({ opacity: x });
	
	if(i<threePointFiveCycles){

		i=i+1

		setTimeout(function(){ timeDisplay(); }, 100)

	} else {

		return
	}
	

};

})