window.onscroll = function() {scrollFunction()};
window.onload = function() {scrollFunction()};

function scrollFunction() {
  	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    	document.getElementById("logo").style.height = "100px";
  	} else {
    	document.getElementById("logo").style.height = "130px";
  	}
}

var lastScrollTop = 0;
document.addEventListener("scroll", function(){
   	var st = window.pageYOffset || document.documentElement.scrollTop;
   	if (st > lastScrollTop){
		document.getElementById("header").style.transform = "translateY(-100%)";
	} else {
		document.getElementById("header").style.transform = "translateY(0)";
	}
	lastScrollTop = st <= 0 ? 0 : st;
}, false);