if ('ontouchstart' in document.documentElement) {
	document.addEventListener('touchstart', onTouchStart, {passive: true});
}
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots: true,
		navText: ["<img src='/assets/images/icons/left_arrow.png' alt='Left Arrow'>","<img src='/assets/images/icons/right_arrow.png' alt='Right Arrow'>"],
		items:1		
	});
});
