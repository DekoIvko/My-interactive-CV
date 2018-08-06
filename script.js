function stickyNavigation()
{         
	if($(window).scrollTop() > lnStickyNavigation) 
	{   
		$('body').addClass('fixed');  
	} 
	else 
	{  
		$('body').removeClass('fixed');   
	}  
}


$("#profile").show(function(){
	$(".profilee").css("background-color", "#380606");
});


$("#profile").bind('show',function(){
    $(".profilee").css("background-color", "white");
});
