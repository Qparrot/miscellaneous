$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.leaf3').css({
		"transform":"translate( " + -wScroll + 'px,' + wScroll + "px)"
	});
	$('.leaf4').css({
		"transform":"translate( " + wScroll + 'px,' + wScroll + "px)"
	});
	$('.leaf1').css({
		"transform":"translate( 0px," + wScroll * 5 + "px)"
	});
	$('.leaf2').css({
		"transform":"translate(0px," + -wScroll * 5 + "px)"
	});
	$('.kitsch').css({
		"transform":"rotate(" + wScroll * 1 + "deg)",
	});	
	$('.kitschContainer').css({	
		"transform":"translate(0px," + wScroll + "px)"
	});
	console.log(wScroll);
});
