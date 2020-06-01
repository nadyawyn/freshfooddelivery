$(document).ready(function () {

	//Animation 
	new WOW().init();


	//more Animation

});

$(window).scroll(function () {
	$('.header__onion').each(function () {
		const imagePos = $(this).offset().top;
		const topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 200) {
			$(this).addClass('animated_l');
		}
	});
	$('.discover__leaf').each(function () {
		const imagePos = $(this).offset().top;
		const topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 200) {
			$(this).addClass('animated_def');
		}
	});
	$('.tap__mushroom').each(function () {
		const imagePos = $(this).offset().top;
		const topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 200) {
			$(this).addClass('animated_l');
		}
	});
	$('.track__foods').each(function () {
		const imagePos = $(this).offset().top;
		const topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 200) {
			$(this).addClass('animated_b');
		}
	});

	$('.get-app__leaves').each(function () {
		const imagePos = $(this).offset().top;
		const topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 200) {
			$(this).addClass('animated_def');
		}
	});

	$('.get-app__foods').each(function () {
		const imagePos = $(this).offset().top;
		const topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 200) {
			$(this).addClass('animated_b');
		}
	});

});



