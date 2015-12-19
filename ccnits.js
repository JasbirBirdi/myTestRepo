// JavaScript Document
function myFunction() {
    document.getElementById("Demo").classList.toggle("w3-show");
}
function showlinks() {
	document.getElementById("Demo1").classList.toggle("w3-show"); 	
}
$(function(){
	
	$('a[href^="#"]').click(function(e){
		
		var target = $(this).attr('href');
		var strip  = target.slice(1);
		var anchor = $("a[name='" + strip + "']");
		
		e.preventDefault();
		
		$('html,body').animate({
			
			scrollTop: anchor.offset().top
			
			},'slow');
		});
	
});

