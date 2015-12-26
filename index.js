$(document).ready(function(){
if(!localStorage.feed)localStorage.feed=-1;
if(localStorage.feed=="true"){
	var path=document.getElementsByClassName('like-btn-fill');
    for(var i=0;i<path.length;i++){
		path[i].setAttribute('fill','#0f0');
	}
	}
else if(localStorage.feed=="false"){
	var path=document.getElementsByClassName('unlike-btn-fill');
    for(var i=0;i<path.length;i++){
		path[i].setAttribute('fill','#f00');
	}
	}
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
$("#Capa_2").click(function(){
	var nam=prompt("Please enter your name: ");
    if(nam.length>2){
	localStorage.feed="true";
	document.getElementById("thank-ul").className=("thank-anim");
	window.setTimeout(function(){document.getElementById("thank-ul").className=("");},5000);
	var path=document.getElementsByClassName('like-btn-fill');
    for(var i=0;i<path.length;i++){
		path[i].setAttribute('fill','#0f0');
	}
	var path=document.getElementsByClassName('unlike-btn-fill');
    for(var i=0;i<path.length;i++){
		path[i].setAttribute('fill','#fff');
	}
	}
	//document.getElementById("thank-ul").className="";
});
$("#Capa_1").click(function(){
	var nam=prompt("Please enter your name: ");
    if(nam.length>2){
	localStorage.feed="false";
	document.getElementById("thank-ul").className=("thank-anim");
	window.setTimeout(function(){document.getElementById("thank-ul").className=("");},5000);
	
	var path=document.getElementsByClassName('unlike-btn-fill');
    for(var i=0;i<path.length;i++){
		path[i].setAttribute('fill','#f00');
	}
	var path=document.getElementsByClassName('like-btn-fill');
    for(var i=0;i<path.length;i++){
		path[i].setAttribute('fill','#fff');
	}
	}
	//document.getElementById("thank-ul").className="";
});
});

