var banner = document.getElementById('banner');
var legal = document.getElementById('roll-cta');

var tl = new TimelineMax({repeat:0, repeatDelay:2});

window.onload = function() {   
    
	tl.set(banner, {visibility: "visible"})

	/*frame one*/	
	.add("frame1")
	.from(".frame-1-text,.dell_logo,.fundinglogof1,.cta", .5, {alpha:0, ease:Linear.easeIn}, "frame1+=.2")
		 .to(".frame-1-text,.dell_logo,.bg,.cta", .3, {alpha:0, ease:Power4.easeOut}, "frame1+=2.4")

	/*frame two*/
	.add("frame2","frame1+=2.4")
	.from(".dell_logo2,.cta2", .3, {alpha:0, ease:Linear.easeIn}, "frame2")
	.from(".frame-2-text", .3, {alpha:0, ease:Linear.easeIn}, "frame2")
	.from(".product_f2", .3, {alpha:0, x:300, ease:Linear.easeIn}, "frame2")
		.to(".frame-2-text", .3, {alpha:0, ease:Power4.easeOut}, "frame2+=2.4")
		.to(".product_f2", .3, {alpha:0, x:-200, ease:Power4.easeOut}, "frame2+=2.4")

	/*frame three*/
	.add("frame3","frame2+=2.4")
	.from(".frame-3-text,.fundinglogof2", .3, {alpha:0, ease:Linear.easeIn}, "frame3")
	.from(".violator_f3", .3, {alpha:0, scale:0.05, ease:Linear.easeIn}, "frame3+=.4")
	.from(".product_f3,.frame-3-text2", .3, {alpha:0, x:300, ease:Linear.easeIn}, "frame3")
	.from(".linear", .3, {alpha:0, x:300, ease:Linear.easeIn}, "frame3+=.2")
		.to(".frame-3-text,.fundinglogof2, .linear", .3, {alpha:0, ease:Power4.easeOut}, "frame3+=2.4")
		.to(".violator_f3", .3, {alpha:0, ease:Power4.easeOut}, "frame3+=2.2")
		.to(".product_f3,.frame-3-text2", .3, {alpha:0, x:200, ease:Power4.easeOut}, "frame3+=2.4")

	/*frame four*/
	.add("frame4","frame3+=2.4")
	.from(".frame-4-text", .3, {alpha:0, ease:Linear.easeIn}, "frame4")
	.from(".product_f4", .3, {alpha:0, x:300, ease:Linear.easeIn}, "frame4")
		.to(".frame-4-text", .3, {alpha:0, ease:Power4.easeOut}, "frame4+=2.4")
		.to(".product_f4", .3, {alpha:0, x:-200, ease:Power4.easeOut}, "frame4+=2.4")
		
	/*frame five*/	
	.add("frame5","frame4+=2.4")
	.from(".frame-5-text,.fundinglogof3", .3, {alpha:0, ease:Linear.easeIn}, "frame5")
	.from(".product_f5", .3, {alpha:0, x:300, ease:Linear.easeIn}, "frame5")
	.from(".linear2", .3, {alpha:0, x:-300, ease:Linear.easeIn}, "frame5+=.2")
		.to(".frame-5-text,.fundinglogof3", .3, {alpha:0, ease:Power4.easeOut}, "frame5+=2.4")
		.to(".product_f5,.linear2", .3, {alpha:0, x:-200, ease:Power4.easeOut}, "frame5+=2.4")

	/*frame six*/
	.add("frame6","frame5+=2.4")
	.from(".product_f6", .3, {alpha:0, x:-150, ease:Linear.easeIn}, "frame6+=.3")
	.from(".frame-6-text,.f6-price, .vendor_text,.frame-3-text1", .3, {alpha:0, ease:Power4.easeIn}, "frame6")

	/*roll over*/
	.from("#roll-cta", .3, {alpha:0, x:-300, ease:Power4.easeout}, "frame6+=0.7")
	.from("#rolltext", .3, {alpha:0, ease:Power4.easeout}, "frame6+=0.7")
	.from("#legal-text", .3, {alpha:0, ease:Power4.easeout}, "frame6+=0.7")

	legal.addEventListener("mouseover",legalHover);
	function legalHover(){
		tl.pause();
		TweenMax.to("#legal", .5, {top:0, ease:Power1.easeOut})  
	}

	legal.addEventListener("mouseout",legalOut);
	function legalOut(){
		tl.play();
		TweenMax.to("#legal", .5, {top:-1000, ease:Power1.easeIn})
	}

	;

  // tl.seek("loop")

  var currentDuration = tl.duration();
  console.log(currentDuration);  
  
}