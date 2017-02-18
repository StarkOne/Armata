$(function() {

	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	$(".section-content .info-item").equalHeights();
	$(".s1-bottom info-item").equalHeights();

});
