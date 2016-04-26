$(".nav-toggle").click(function() {
  $(".main-nav ul").toggle();
});

var width = $(window).width();
$(window).resize(function(){
   if($(this).width() != width){
    	if ($(this).width() >= 751) {
    		$(".main-nav ul").show();
    	} else if (($(this).width() <= 750) && (width >= 751)) {
    		$(".main-nav ul").hide();
    	}
    	width = $(this).width();
   }
});