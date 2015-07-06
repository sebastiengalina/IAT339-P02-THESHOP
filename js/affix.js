$(document).ready(function() {
	var affixItem = $("#affix-top");
	console.log("affixItem "+affixItem);
	$(window).scroll(function() {
		var headerHeight = $("#header-main").height();
		if ($(window).width() > 766) {
			var affixItemTop = affixItem.offset().top;
			if ($(window).scrollTop() > affixItemTop) {
				affixItem.addClass("affixed");
			}
		}
	});
});