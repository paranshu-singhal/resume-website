$(document).ready(function(){
resizeDiv();
window.onresize=function(){resizeDiv(); };
function resizeDiv() {
var vph = window.innerHeight;
var wid = screen.width;
$('.page').css({'height':vph});
var vph2=(document.getElementById("header").offsetHeight)+(document.getElementById("nav").offsetHeight);
//alert(wid+' '+vph2);
$('.page2').css({'height':Math.max(vph2,vph)});
}
$("body").on('click',"#logo-name", function(){
$('html, body').animate({
    scrollTop: $("#main-page").offset().top
}, 1000);
});
$("body").on('click',"#nav-abtme", function(){
$('html, body').animate({
    scrollTop: $("#abtme-page").offset().top
}, 1000);
});
$("body").on('click',"#nav-edu", function(){
	$('html, body').animate({
    scrollTop: $("#edu-page").offset().top
}, 1000);
});  
$("body").on('click',"#nav-empl", function(){
	$('html, body').animate({
    scrollTop: $("#empl-page").offset().top
}, 1000);
});
$("body").on('click',"#nav-skills", function(){
	$('html, body').animate({
    scrollTop: $("#skills-page").offset().top
}, 1000);
});
$("body").on('click',"#nav-proj", function(){
	$('html, body').animate({
    scrollTop: $("#proj-page").offset().top
}, 1000);
});
$("body").on('click',"#nav-trophy", function(){
	$('html, body').animate({
    scrollTop: $("#trophy-page").offset().top
}, 1000);
}); 
$("body").on('click',"#nav-phone", function(){
	$('html, body').animate({
    scrollTop: $("#phone-page").offset().top
}, 1000);
});
$("body").on("click","#git-logo",function(){
	window.open("https://github.com/paranshu-singhal","_blank");
});
$("body").on("click","#fb-logo",function(){
	window.open("https://www.facebook.com/paranshu.singhal","_blank");
});
});

	