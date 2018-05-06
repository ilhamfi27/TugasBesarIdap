$(".dropdown").click(function(){
	$(this).children(".dropdown-menu").toggleClass("dropdown-menu-open");
});
$(".sidebar-dropdown").click(function() {
	$(this).find("ul > li > a").toggleClass("dropdown-menu-open");
	var comp = $(this).find("ul > li > a > i");
	console.log(comp);
	if(comp.hasClass("fa-angle-left")){
		comp.removeClass("fa-angle-left");
		comp.addClass("fa-angle-down");
	} else {
		comp.removeClass("fa-angle-down");
		comp.addClass("fa-angle-left");
	}
});
