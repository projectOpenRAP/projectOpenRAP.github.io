if ('ontouchstart' in document.documentElement) {
	document.addEventListener('touchstart', onTouchStart, {passive: true});
}
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots: true,
		navText: ["<img src='/assets/images/Rectangle_4.png'>","<img src='/assets/images/Rectangle_4 (1).png'>"],
		navText: ["<img src='/assets/images/Layer_14.png'>","<img src='/assets/images/Layer_14 (1).png'>"],
		items:1		
	});
});
