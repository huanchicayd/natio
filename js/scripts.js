$( document ).ready(function() {
	
	//Slider de projetos
	// $('.projetos-slider').slick({
	// 	autoplay: true,
	// 	autoplaySpeed: 5000,
	// 	arrows: false,
	// 	dots: true,
	// 	speed: 2000
	// });
	//
	// $('.processo-slider').slick({
	// 	autoplay:true,
	// 	autoplaySpeed: 5000,
	// 	speed: 2000,
	// 	arrows: false
	// });
	
	$('.nav-btn').click(function(){
		$('.nav-btn').toggleClass('nav-btn-active');
		$('html').toggleClass('menu-active');
		$('.nav-menu').fadeToggle();
	});
	
	// $('.typed').typed({
	// 	strings: ["<strong>First sentence.</strong><span class='subtitulo'>Sub phrase type</span>", "Second sentence.", "Third sentence.", "Fourth sentence."],
	// 	typeSpeed: 0,
	// 	loop: true,
	// 	backDelay: 2500
	// });
	
	// Exibir a barra de navegaÃ§Ã£o
	
	// $(document).on('scroll',function(){
	//
	//     if ($(document).scrollTop() > 80) {
	//         $('.nav').addClass('nav-fixed');
	//     } else {
	//         $('.nav').addClass('nav-fixed');
	//     }
	// });
	
});