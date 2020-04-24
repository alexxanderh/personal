// JavaScript Document
$(document).ready(function(){
	
	var flag = false;
    var scroll;
	
	$(window).scroll(function(){
		
		scroll = $(window).scrollTop();
		
		if(scroll > 300){
			if(!flag){
				$("#cabecera").css({"background-color": "rgba(4,32,42,0.9)"});
				flag = true;
			}
			
		}else{
			if(flag){
				$("#cabecera").css({"background-color": "transparent"});
				flag = false;
			}
			
			
		}
		
	});	
	
	
	var menuBtn = $('.menu-icon'),
		menu = $('.navegacion ul');
	
		menuBtn.click(function() { 
			
		if( menu.hasClass('show') ){
			$("#cabecera").css({"background-color": "rgba(4,32,42,0.6)"})
			$("#cabecera").css({"height": "50px"});
			
			menu.removeClass('show')
			
		}else{
			
			menu.addClass('show')
			$("#cabecera").css({"background-color": "rgba(4,32,42,0.9)"})
			$("#cabecera").css({"height": "500px"});
		}
			
		}); 
	
});