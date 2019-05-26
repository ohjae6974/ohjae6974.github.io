$(document).ready(function(){
	/*ë°˜ì‘í˜• width ë°›ê¸°*/
	var width_size = window.outerWidth;
	$(window).resize(function(){
		width_size = window.outerWidth;
	});
	if(width_size < 1200){
		$("video").removeAttr("autoplay")
	};
	/*í—¤ë”*/
	$(".section_list li").on("click",function(e){
		var scrollPositionHeader = $($(this).attr("data-target")).offset().top;
		 $("html,body").stop().animate({scrollTop: scrollPositionHeader}, 500);
		 console.log(scrollPositionHeader)
	})
	/*aboutì— ìžˆëŠ” contactë°”ë¡œê°€ê¸° ë²„íŠ¼*/
	var scrollPosition = $(".contact").offset().top;
	console.log(scrollPosition)
	$(".btn_contact").on("click",function(e){
		$("html,body").stop().animate({scrollTop:scrollPosition},400);			
	});
	/*í¬íŠ¸í´ë¦¬ì˜¤ ë³´ê¸°*/
	 // $(".works_preview").on("click",function(e){
	 // 	$('.works_contents').css('display','none');
	 // 	$(this).parent().find('div').slideToggle();
	 // 	event.preventDefault();
	 // });
});
