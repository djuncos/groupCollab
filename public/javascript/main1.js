
	var n=2000

	// var i=0
	// var period = 30
	// var increments = 100
	// var b=2*Math.PI/period
	// var c=b*period/2
	// var threePointFiveCycles = period*increments*(3.5)
	// console.log(threePointFiveCycles)


	// function brandFade(){

	// 	var x = (0.5)*Math.cos((b*i)-c)+(0.5)

	// 	console.log(x)

	// 	$('.brand').css({ opacity: x })

	// }


$(document).ready(function() {
	
	timed1()

	function timed1(){

		$("#brandHomeAnimate").fadeOut(000)	
		$("#firstTextAppear").fadeOut(000)
		$("#secondTextAppear").fadeOut(000)
		$("#thirdTextAppear").fadeOut(000)


		$("#firstTextAppear").fadeIn(n)

		setTimeout(function(){ timed2(); }, n)
	}

	function timed2(){

		$("#firstTextAppear").fadeOut(n)

		setTimeout(function(){ 

			$("#secondTextAppear").fadeIn(n);

		}, n)

		setTimeout(function(){ 

			$("#secondTextAppear").fadeOut(n);

		}, 2*n)

		setTimeout(function(){ 

			$("#brandHomeAnimate").fadeIn(n);

		}, 3*n)

		timed3()

	}

	


	function timed3(){

		setTimeout(function(){ animateHome(); }, 4*n)

	}

	function animateHome() {

	$("#brandHomeAnimate").animate({

	left: "-=75%",
	top: "-=300",
	"font-size": "+=50",
	opacity: "+=.5",
	"font-weight": "+=600",
	
	} , n);

	$("#videoContainerAnimate").animate({

	width: "-=400",
	height: "-=160",
	
	} , n);

	$("#videoAnimate").animate({

	width: "-=450",
	"margin-top": "+=150",
	"margin-left": "+=75"
	
	} , n);

	$("#backGroundInitialHome").animate({

	opacity: "-=1",
	
	} , n);

	setTimeout(function(){ 
		
		$("#thirdTextAppear").fadeIn(n); 


	}, 1.5*n);

}

	

})