function fixFooter() {
	if ($(window).height() >= $(document).height()) {
	  $(".page-content").css("min-height", $(window).height() - 3 * $(".site-footer").height() - $(".site-header").height() - $(".splash-wrapper").height());
	}
};

function fixPageContentMarginTop() {
	$(".page-content").css("margin-top", $(".splash-wrapper").height() + 90 + "px");
};

$( document ).ready(function() {
  // Handler for .ready() called.
  fixPageContentMarginTop();
  fixFooter();
});