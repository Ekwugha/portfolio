//******************************* NAVBAR ********************************//
$(window).scroll(function() {
	if ($(".navbar").offset().top > 50) {
	  $(".navbar").addClass("navbar-b");
	  $(".navbar").addClass("nav-b");
	  $(".navbar-brand").removeClass("text-light");
	  $(".icon").css("color", "black");
	  $(".ntext").addClass("ntext-color");
	} else{
		$(".navbar").removeClass("navbar-b");
		$(".navbar").removeClass("nav-b");
		$(".navbar-brand").addClass("text-light");
		$(".icon").css("color", "white");
		$(".ntext").removeClass("ntext-color");
	}
});


//******************************** COLLAPSE NAVBAR ***************************//
$('.navbar-nav>li>a').on('click', function() {
	$('.navbar-collapse').collapse('hide');
})


//******************************** TEXT SLIDER ********************************//
if ($('.text-slider').length == 1) {
    let typed_strings = $('.text-slider-items').text();
		let typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
       });
}


// ************************** hover effect on social media icon ************************* //
// $(function() {
// 	$('.card1').hover(function() {
// 		$('.icon1').css('background', 'blue');
// 		$('.icon1').css('color', 'black');
// 		$('.a').css('color','white');
// 	})
// 	$('.card2').hover(function() {
// 		$('.icon2').css('background', 'blue');
// 		$('.icon2').css('color', 'black');
// 		$('.b').css('color','white');
// 	})
// 	$('.card3').hover(function() {
// 		$('.icon3').css('background', 'blue');
// 		$('.icon3').css('color', 'black');
// 		$('.c').css('color','white');
// 	})
// 	$('.card4').hover(function() {
// 		$('.icon4').css('background', 'blue');
// 		$('.icon4').css('boxshadow', 'black');
// 		$('.d').css('color','white');
// 	})
// })





//********************************* BACK TO TOP ********************************//
$(window).scroll(function() {
	if ($(this).scrollTop() > 500) {
		$('.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top').fadeOut('slow');
	}
});


//************************************ SET DATE ******************************//
$(function() {
	$(".date").html(new Date().getFullYear())
})