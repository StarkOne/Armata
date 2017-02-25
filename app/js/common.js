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
	$(".cards .card").equalHeights();
	
	$(".section_4").waypoint(function() {

		$(".section_4 .card").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("card-off").addClass("card-on");
			}, 150*index);
		});
	},{
		offset:"20%"
	});
	$(".section_5").waypoint(function() {

		$(".section_5 .tc-item").each(function(index){
			var ths = $(this);
			setTimeout(function(){
				ths.removeClass("tc-item-off").addClass("tc-item-on");
			}, 200*index);
		});
	},{
		offset:"20%"
	});

	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});
	$(".arrow-bottom").click(function(){
		$("html, body").animate({ scrollTop: $(".main-head").height()+120}, "slow");
		return false;
	});

	$(".section-head h2, .section-head p").animated("fadeInRight");
	$(".info-item-wrap").animated("zoomIn");
	$(".teams .team").animated("zoomIn");
	$(".slider .slide").animated("rollIn");
	$(".homesect.section_8 .forms").animated("fadeInRight");
	$(".section_8 .section-head p").animated("zoomIn");

	$(".section_2").waypoint(function() {
		$(".s2-item-wrap").each(function(index){
				var ths = $(this);
				setInterval(function(){
					ths.addClass("on");
				}, 200*index);
		});
	},{
		offset:"20%"
	});
	$(".section_8").waypoint(function() {
		$(".s8-item").each(function(index){
				var ths = $(this);
				setInterval(function(){
					ths.addClass("on");
				}, 200*index);
		});
	},{
		offset:"20%"
	});

	$(".top").click(function(){
		$("html, body").animate({ scrollTop: 0}, "slow");
		return false;
	});
	$(".homesect .section-bottom .buttons").click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});

}); 