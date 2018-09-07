var body = document.querySelector("body");
var headerNavAfter = document.querySelector(".header-nav-after");
var header = document.querySelector("header");
var section = document.querySelector("section");
var sectionUl = document.querySelector("section>ul");
var lis = document.querySelectorAll("section>ul>li");
var li01 = lis[0];
var li02 = lis[1];
var li03 = lis[2];
var liSpans = document.querySelectorAll("section>ul>li>span");
var all = document.querySelector(".all");
var black1left = document.querySelector("section>.all>.black-1-loop>.left");
var black1right = document.querySelector("section>.all>.black-1-loop>.right");
var redLeft = document.querySelector("section>.all>.red-loop>.left");
var redRight = document.querySelector("section>.all>.red-loop>.right");
var black2left = document.querySelector("section>.all>.black-2-loop>.left");
var black2right = document.querySelector("section>.all>.black-2-loop>.right");


var footer = document.querySelector("footer");


var loopHights = [0,-100,-940,-1740,-2200];
var index = 0;

loopAnimation(index);
body.addEventListener("mousewheel",function(event){
	if(event.wheelDelta < 0){
		setLi(index);
		appearOrDisappear(headerNavAfter,"block");
		appearOrDisappear(header,"none");
		if(index == 0){
			appearOrDisappear(sectionUl,"block");
		}
		if(index <= 3){
			loopTop(++index);
		}
		if(index==4){
			section.style.height = "310px";
			appearOrDisappear(footer,"block");
			console.log("footer-block");
		}
	}else if(event.wheelDelta > 0){
		setLiDown(index);
		appearOrDisappear(footer,"none");
		section.style.height = "100%";
		if(index >1){
			loopTop(--index);
		}else if(index == 1){
			loopTop(--index);
			appearOrDisappear(headerNavAfter,"none");
			appearOrDisappear(header,"block");
			appearOrDisappear(sectionUl,"none");
		}
	}
	loopAnimation(index);
	console.log(index);
});


function setLi(i){
	for(var j=0;j<liSpans.length;j++){
		liSpans[j].style.backgroundColor = "darkgrey";
	}
	if(i < 3){
		liSpans[i].style.backgroundColor = "red";
	}
}
function setLiDown(i){
	for(var j=0;j<liSpans.length;j++){
		liSpans[j].style.backgroundColor = "darkgrey";
	}
	console.log("setLiDown：" + i);
	if(i <= 3 && i>0){
		liSpans[i-1].style.backgroundColor = "red";
		console.log("setLiDownP：" + i);
	}
}
//使元素display为none或block的方法
function appearOrDisappear(obj,displayStr){
	obj.style.display = displayStr;
}

/*li的点击事件*/
li01.onclick=function(){
	liClick(1);
};
li02.onclick=function(){
	liClick(2);
};
li03.onclick=function(){
	liClick(3);
};
function liClick(k){
	index = k;
	loopTop(k);
	setLi(k-1);
	loopAnimation(k);
}


function loopTop(i){
	all.style.webkitTransform = "translateY("+loopHights[i] + "px)";
	if(i<5){
		appearOrDisappear(footer,"none");
	}
}

/*loop里面的动画*/
function loopAnimation(i){
	black1left.style.bottom = "0%";
	black1right.style.top = "-20%";
	redLeft.style.bottom = "-30%";
	redRight.style.top = "-30%";
	
	black2left.style.left = "0%";
	black2left.style.bottom = "-10%";
	black2right.style.right = "0%";
	black2right.style.top = "-10%";
	
	if(i == 0 || i == 1){
		black1left.style.bottom = "20%";
		black1right.style.top = "0%";
	}else if(i == 2){
		redLeft.style.bottom = "0%";
		redRight.style.top = "0%";
	}else if(i == 3){
		black2left.style.left = "25%";
		black2left.style.bottom = "15%";
		black2right.style.right = "25%";
		black2right.style.top = "-5%";
	}else{
		
	}
}



