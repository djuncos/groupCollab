
	var n=2000


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
		"margin-left": "+=75",
		filter: "-=100%"
	
	} , n);

	$("#backGroundInitialHome").animate({

		opacity: "-=1",
	
	} , n);

	setTimeout(function(){ 
		
		$("#thirdTextAppear").fadeIn(n); 

	}, 1.5*n);

}

	

})