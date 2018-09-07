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
var liSpans = document.querySelectorAll("section>ul>li>span");
var all = document.querySelector(".all");
/*outline-loop中向上浮动的图片*/
var outlinePhone = document.querySelector("section>.all>.outline-loop>img:nth-child(2)");
var colorImgs = document.querySelector("section>.all>.color-loop>.imgs");

var footer = document.querySelector("footer");


var loopHights = [0,-100,-800,-1500,-2200,-2550];
var index = 0;


body.addEventListener("mousewheel",function(event){
	if(event.wheelDelta < 0){
		setLi(index);
		appearOrDisappear(headerNavAfter,"block");
		appearOrDisappear(header,"none");
		if(index == 0){
			appearOrDisappear(sectionUl,"block");
		}
		if(index <= 4){
			loopTop(++index);
		}
		if(index==5){
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



function loopTop(i){
	all.style.webkitTransform = "translateY("+loopHights[i] + "px)";
	if(i<5){
		appearOrDisappear(footer,"none");
	}
}

//使元素display为none或block的方法
function appearOrDisappear(obj,displayStr){
	obj.style.display = displayStr;
}

function setLi(i){
	for(var j=0;j<liSpans.length;j++){
		liSpans[j].style.backgroundColor = "darkgrey";
	}
	if(i < 4){
		liSpans[i].style.backgroundColor = "red";
	}
}
function setLiDown(i){
	for(var j=0;j<liSpans.length;j++){
		liSpans[j].style.backgroundColor = "darkgrey";
	}
	console.log("setLiDown：" + i);
	if(i <= 5 && i>1){
		liSpans[i-2].style.backgroundColor = "red";
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
function liClick(k){
	index = k;
	loopTop(k)
	setLi(k-1)
	loopAnimation(k)
}


/*loop里面的动画*/
function loopAnimation(i){
	outlinePhone.style.transform = "translateY(100px)";
	if(i == 2){
		outlinePhone.style.transform = "translateY(-100px)";
	}else if(i == 3){
		colorImgs.style.width = "94%";
		colorImgs.style.left = "3%";
	}else{
		
	}
}
