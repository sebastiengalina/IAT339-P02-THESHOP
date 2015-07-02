$(document).ready(function() {
	$("a.nav-toggle").click(function(e) {
		e.preventDefault();
		$("#main-nav").toggleClass("open");
		console.log("toggled");
	});
});