$(document).ready(function() {
	$("a.nav-toggle").click(function() {
		$("#main-nav").toggleClass("open");
		console.log("toggled");
	});
});