
var info = document.querySelector("section>.info");
var infoImg = document.querySelector("section>.info>img");
var lis = document.querySelectorAll("section>.info>ul>li");
var li_1 = lis[0];
var li_2 = lis[1];
var li_3 = lis[2];
var li_4 = lis[3];
var li_5 = lis[4];

var infoBgPicPath = ["black-bg.jpg","red-bg.jpg","blackgolden-bg.jpg","white-bg.jpg","brown-bg.jpg"];
var infoImgPath = ["black-phone.png","red-phone.png","blackgolden-phone.png","white-phone.png","brown-phone.png"];
var path = infoImg.src.substring(0,infoImg.src.indexOf("black"));
//alert(path);



li_1.onclick = function(){
	info.style.opacity = "0";
	infoImg.style.opacity = "0";
	liClick(0);
}
li_2.onclick = function(){
	info.style.opacity = "0";
	infoImg.style.opacity = "0";
	liClick(1);
}
li_3.onclick = function(){
	info.style.opacity = "0";
	infoImg.style.opacity = "0";
	liClick(2);
}
li_4.onclick = function(){
	info.style.opacity = "0";
	infoImg.style.opacity = "0";
	liClick(3);
}
li_5.onclick = function(){
	info.style.opacity = "0";
	infoImg.style.opacity = "0";
	liClick(4);
}

function liClick(i){
//	img/pro-parameter/black-phone.png
	info.style.transition = "all 1.5s";
	info.style.opacity = "1";
	infoImg.style.transition = "all 1.5s";
	infoImg.style.opacity = "1";
	info.style.backgroundImage = "url(" + path + infoBgPicPath[i] + ")";
	infoImg.src = path + infoImgPath[i];
	
}
