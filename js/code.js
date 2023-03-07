$(document).ready(function() {
	$('[focusable]').on('selected', function(event) {
		$(event.currentTarget).toggleClass("selected");
	})
});
