$(function() {

	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	$(".section_1 .section-content .info-item").equalHeights();
	$(".section_3 .section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	$(".s2-item").equalHeights();
	$(".s2-bottom .img-wrap").equalHeights();
	//$(".cards .card").equalHeights();
	
	$(".section_4 ").waypoint(function() {

		$(".section_4 .card").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("card-off").addClass("card-on");
			}, 150*index);
		});
	},{
		offset:"20%"
	});
});
