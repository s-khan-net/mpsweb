// Write your JavaScript code.
$(document).ready(function(){
	
	// if($(window).width()>760){
	// 	$.each($('#myCarousel .carousel-inner .item'),function(i,v){
	// 		//console.log($(v).attr('data-slide'));
	// 		switch(i){
	// 			case 0: var im = $(v).context.childNodes[1];
	// 					im.setAttribute('src','images/slideb1.jpg');
	// 					break;
	// 			case 1: var im = $(v).context.childNodes[1];
	// 					im.setAttribute('src','images/slideb2.jpg');
	// 					break;
	// 			case 2: var im = $(v).context.childNodes[1];
	// 					im.setAttribute('src','images/slideb3.jpg');
	// 					break;
	// 			case 3: var im = $(v).context.childNodes[1];
	// 					im.setAttribute('src','images/slideb4.jpg');
	// 					break;
	// 		}
	// 	});
		
	// }
	// else{
	// 	$.each($('#myCarousel .carousel-inner .item'),function(i,v){
	// 		//console.log($(v).attr('data-slide'));
	// 		switch(i){
	// 			case 0: var im = $(v).context.childNodes[1];
	// 					im.setAttribute('src','images/slide1.jpg');
	// 					break;
	// 			case 1: var im = $(v).context.childNodes[1];
	// 					im.setAttribute('src','images/slide2.jpg');
	// 					break;
	// 			case 2: var im = $(v).context.childNodes[1];
	// 					im.setAttribute('src','images/slide3.jpg');
	// 					break;
	// 			case 3: var im = $(v).context.childNodes[1];
	// 					im.setAttribute('src','images/slide4.jpg');
	// 					break;
	// 		}
	// 	});
	// }

});
$(document).scroll(function(){
	// calculate the percentage the user has scrolled down the page
    scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    //$('#scrollcounter').html($(window).scrollTop() + '<br>' + $(document).height() + '<br>' + $(window).height() + '<br>' + scrollPercent+'<br>'+$(window).width())
	if($(window).width()>765)    
    if(scrollPercent>+77){
    	$('.top-name-header').attr('style','color:#f5f5f5');
    	$('.top-name-header i').fadeOut('fast');//.attr('style','color:#fff');
    	$('.navbar').attr('style','margin-top:27px');
    	$('#logo').addClass('logo_b');
    	$('#logo').removeClass('logo_m');

    }
    else{
    	$('.top-name-header').attr('style','color:#043987');
    	$('.top-name-header i').fadeIn('slow');//attr('style','color:#efa22f');
    	$('.navbar').attr('style','margin-top:58px');	
    	$('#logo').addClass('logo_m');
    	$('#logo').removeClass('logo_b');
    }
});