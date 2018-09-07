var body = document.querySelector("body");
var headerNavAfter = document.querySelector(".header-nav-after");
var header = document.querySelector("header");
var section = document.querySelector("section");
var sectionUl = document.querySelector("section>ul");
var lis = document.querySelectorAll("section>ul>li");
var li01 = lis[0];
var li02 = lis[1];
var li03 = lis[2];
var li04 = lis[3];
var li05 = lis[4];

//function-loop中放三张图片的盒子
var functionImgs = document.querySelector("section>.all>.function-loop>.function-imgs");
//design-loop中向上浮动的图片
var designImg = document.querySelector("section>.all>.design-loop>.function-imgs>img:nth-child(1)"); 
//OS-LOOP中放图片的盒子
var OSImgs = document.querySelector("section>.all>.OS-loop>.function-imgs");

var liSpans = document.querySelectorAll("section>ul>li>span");
var all = document.querySelector(".all");
var firstH3 = document.querySelector("section>.all>.first-loop>h3");
var footer = document.querySelector("footer");

var loopHights = [100,-200,-1100,-1800,-2500,-3250,-3600];
var index = 0;

body.addEventListener("mousewheel",function(event){
	if(event.wheelDelta < 0){//向下滚动
		setLi(index);
		appearOrDisappear(headerNavAfter,"block");
		appearOrDisappear(header,"none");
		if(index == 0){
			appearOrDisappear(firstH3,"none");
			appearOrDisappear(sectionUl,"block");
		}
		if(index <= 5){
			loopTop(++index);
		}
		if(index==6){
			section.style.height = "310px";
			appearOrDisappear(footer,"block");
			console.log("footer-block");
		}
	}else if(event.wheelDelta > 0){
		setLiDown(index-1);
		if(index >0){
			loopTop(--index);
		}
		appearOrDisappear(footer,"none");
		section.style.height = "100%";
		if(index == 0){
			appearOrDisappear(firstH3,"block");
			appearOrDisappear(headerNavAfter,"none");
			appearOrDisappear(header,"block");
			appearOrDisappear(firstH3,"block");
			appearOrDisappear(sectionUl,"none");
		}
	}
	loopAnimation(index);
	console.log(index);
});

//使元素display为none或block的方法
function appearOrDisappear(obj,displayStr){
	obj.style.display = displayStr;
}

function loopTop(i,str){
	all.style.webkitTransform = "translateY("+loopHights[i] + "px)";
	if(i<6){
		appearOrDisappear(footer,"none");
	}
}

function setLi(i){
	for(var j=0;j<liSpans.length;j++){
		liSpans[j].style.backgroundColor = "darkgrey";
	}
	console.log("setLi：" + i);
	if(i < 5){
		liSpans[i].style.backgroundColor = "red";
		console.log("setLiP：" + i);
	}
}
function setLiDown(i){
	for(var j=0;j<liSpans.length;j++){
		liSpans[j].style.backgroundColor = "darkgrey";
	}
	console.log("setLiDown：" + i);
	if(i <= 5 && i>0){
		liSpans[i-1].style.backgroundColor = "red";
		console.log("setLiDownP：" + i);
	}
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
li04.onclick=function(){
	liClick(4);
};
li05.onclick=function(){
	liClick(5);
};
function liClick(k){
	index = k;
	loopTop(k)
	setLi(k-1)
	loopAnimation(k)
}


/*loop里面的动画*/
function loopAnimation(i){
	functionImgs.style.transform = "none";
	designImg.style.transform = "translate(-50%,100%)";
	OSImgs.style.width = "50%";
	if(i == 2){
		functionImgs.style.transition = "all 2s";
		functionImgs.style.transform = "scale(1.1)";
	}else if(i == 3){
		designImg.style.transition = "all 2s";
		designImg.style.transform = "translateY(50%)"
	}else if(i == 5){
		OSImgs.style.transition = "all 2s";
		OSImgs.style.width = "60%";
	}
}



