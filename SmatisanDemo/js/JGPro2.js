var nav = document.querySelector("header .h_nav");
var shopping = document.querySelector("header .h_nav .container > div:nth-of-type(1) > .shopping");
var count = document.querySelector("header .h_nav .container > div:nth-of-type(1) > .count");
var diglog = document.querySelector("header .h_nav .container > div:nth-of-type(2)");
var backTop = document.querySelector("aside > a");
var menu = document.querySelector("header .h_menu");
var menuCon = document.querySelector("header .h_menu > .container");
var menuUl1 = document.querySelector("header .h_menu > .container > ul:nth-of-type(1)");
var menuUl2 = document.querySelector("header .h_menu > .container > ul:nth-of-type(2)")
var jgProLogo = document.querySelector("header .h_menu > .container > h2");
var btnBuy = document.querySelector("header .h_menu > .container > a");
// 中部
var section = document.querySelector("section");

var firstPic = document.querySelector("section > ul > li:nth-child(1) > img");
var secondPic = document.querySelector("section > ul > li:nth-child(2) > img");
var btnTurnBlank = document.querySelector("section > ul > li:nth-child(1) .link > li:nth-child(1)");
var btnTurnRed = document.querySelector("section > ul > li:nth-child(1) .link > li:nth-child(2)");
var btnTurnWhite = document.querySelector("section > ul > li:nth-child(1) .link > li:nth-child(3)");

var btnTurnBlank2 = document.querySelector("section > ul > li:nth-child(2) .link > li:nth-child(1)");
var btnTurnRed2 = document.querySelector("section > ul > li:nth-child(2) .link > li:nth-child(2)");
var btnTurnWhite2 = document.querySelector("section > ul > li:nth-child(2) .link > li:nth-child(3)");

var isOnDiglog = false;
var menuBgColorBlank = "#1a1a1a";
var menuBgImgBlank = "linear-gradient(#000,#121212)";
var menuBgColorRed = "#511824";
var menuBgImgRed = "linear-gradient(#46101b,#4e141f)";
var menuBgColorWhite = "#f9f9f9";
var menuBgImgWhite = "linear-gradient(#f8f8f8,#f5f5f5)";
var picsFirst = ["../imgJianGuoPro2/slogan-black.c0e1509b6295a90184b8737574602a67.jpg", 
		"../imgJianGuoPro2/slogan-red.2b637f9c03fa57a942f9daeca5708b63.jpg",
		"../imgJianGuoPro2/slogan-gold.dc957efe17de4afcfc0e31e5b2d613d4.jpg"];
var picsSecond = ["../imgJianGuoPro2/design-black.e3f4e76cddca5083a4cb8ac631ef68ac.jpg", 
		"../imgJianGuoPro2/design-red.5f6fede35e0f9e2b7c7a9e9e418e827c.jpg",
		"../imgJianGuoPro2/design-gold.6468526ae115a5af0ac82c6f5bb23704.jpg"];

// 主题
var themeFirst = new Theme(menuBgColorRed, menuBgImgRed, picsFirst[0]);
var themeSecond = new Theme(menuBgColorWhite, menuBgImgWhite, picsSecond[2]);

shopping.addEventListener("mouseenter", function(){
	showDiglog(diglog);
});
		
shopping.addEventListener("mouseleave", function(e){
	setTimeout(function() {
		if(!isOnDiglog) {
			showDiglog(diglog);
		}
	}, 100);
});
		
count.addEventListener("mouseenter", function(){
	showDiglog(diglog);
});
		
count.addEventListener("mouseleave", function(){
	setTimeout(function() {
		if(!isOnDiglog) {
			showDiglog(diglog);
		}
	}, 100);
});
		
diglog.addEventListener("mouseenter", function(){
	isOnDiglog = true;
});

diglog.addEventListener("mouseleave", function(){
	isOnDiglog = false;
	showDiglog(diglog);
});

// 显示和隐藏控件
function showDiglog(view) {
	var display = getComputedStyle(view).display;
	if(display == "none") {
		diglog.style.display = "block";
	} else {
		diglog.style.display = "none";
	}
}

// 监听网页滑动
window.onscroll = function(e) {
	var distance = document.documentElement.scrollTop || document.body.scrollTop;
	console.log("---" + distance);
	if(distance >= 700) {
		backTop.style.opacity = 0.64;
		backTop.style.transform = "translateY(0)";
	} else {
		backTop.style.transform = "translateY(60px)";
		backTop.style.opacity = 0;
	}

	// 菜单栏大小动画变化
	if(distance <= 100) {
		menu.style.position = "static";
		menu.style.height = "38px";
		menuCon.style.height = "38px"
		jgProLogo.style.display = "none";
		menuUl1.style.height = "38px";
		menuUl1.style.lineHeight = "38px";
		menuUl2.style.height = "38px";
		menuUl2.style.lineHeight = "38px";
		menuUl2.style.marginLeft = "580px";
		menuUl1.style.transform = "scale(1, 1)";
		menuUl2.style.transform = "scale(1, 1)";
		btnBuy.style.transform = "scale(1, 1)";
		btnBuy.style.top = "4px";
	} else {
		menu.style.position = "fixed";
		menu.style.top = "0";
		menu.style.height = "60px";
		menuCon.style.height = "60px"
		jgProLogo.style.display = "block";
		menuUl1.style.height = "60px";
		menuUl1.style.lineHeight = "60px";
		menuUl2.style.height = "60px";
		menuUl2.style.lineHeight = "60px";
		menuUl2.style.marginLeft = "350px";
		menuUl1.style.transform = "scale(1.2, 1.2)";
		menuUl2.style.transform = "scale(1.2, 1.2)";
		btnBuy.style.transform = "scale(1.2, 1.2)";
		btnBuy.style.top = "12px";
	}
	
	// 菜单栏颜色变化
	if(distance > 100 && distance <1100) {
		menu.style.bgColor = themeFirst.menuBgColor;
		menu.style.backgroundImage = themeFirst.menuBgImg;
		nav.style.bgColor = themeFirst.menuBgColor;
		nav.style.backgroundImage = themeFirst.menuBgImg;
	} else if(distance >= 1100 && distance < 2100 || distance >= 3024){
		menu.style.bgColor = themeSecond.menuBgColor;
		menu.style.backgroundImage = themeSecond.menuBgImg;
		nav.style.bgColor = themeSecond.menuBgColor;
		nav.style.backgroundImage = themeSecond.menuBgImg;
	} else if(distance >= 2100 && distance < 2990){
		menu.style.bgColor = menuBgColorBlank;
		menu.style.backgroundImage = menuBgImgBlank;
	} else if(distance >= 2990){
		menu.style.bgColor = menuBgColorWhite;
		menu.style.backgroundImage = menuBgImgWhite;
	}
}

// 返回顶部按钮
backTop.addEventListener("mouseenter", function(){
	backTop.style.opacity = 1;
});

backTop.addEventListener("mouseleave", function(){
	backTop.style.opacity = 0.64;
});

backTop.addEventListener("click", function(){
	//	window.scroll(0, 0);
	var scrollToTop = window.setInterval(function() {
    	var pos = window.pageYOffset;
	    if ( pos > 0 ) {
	        window.scrollTo( 0, pos - 20 ); // how far to scroll on each step
	    } else {
	        window.clearInterval( scrollToTop );
	    }
	}, 1); // how fast to scroll (this equals roughly 60 fps)
});










btnTurnBlank.addEventListener("click", function() {
	turnTheme(themeFirst, menuBgColorBlank,
		menuBgImgBlank, picsFirst[0], firstPic);
});
btnTurnRed.addEventListener("click", function() {
	turnTheme(themeFirst, menuBgColorRed,
		menuBgImgRed, picsFirst[1], firstPic);
});
btnTurnWhite.addEventListener("click", function() {
	turnTheme(themeFirst, menuBgColorBlank,
		menuBgImgWhite, picsFirst[2], firstPic);
});


btnTurnBlank2.addEventListener("click", function() {
	turnTheme(themeSecond, menuBgColorBlank,
		menuBgImgBlank, picsSecond[0], secondPic);
});
btnTurnRed2.addEventListener("click", function() {
	turnTheme(themeSecond, menuBgColorRed,
		menuBgImgRed, picsSecond[1], secondPic);
});
btnTurnWhite2.addEventListener("click", function() {
	turnTheme(themeSecond, menuBgColorWhite,
		menuBgImgWhite, picsSecond[2], secondPic);
});

// 变换主题
function turnTheme(theme, menuBgColor, menuBgImg, picPath, pic) {
	var distance = document.documentElement.scrollTop || document.body.scrollTop;
	if(theme != themeSecond || distance >= 1100) {
		theme.menuBgColor = menuBgColor;
		theme.menuBgImg = menuBgImg;
		theme.pic = pic;
		nav.style.bgColor = theme.menuBgColor;
		nav.style.backgroundImage = theme.menuBgImg;
		menu.style.bgColor = theme.menuBgColor;
		menu.style.backgroundImage = theme.menuBgImg;
	}
	pic.src = picPath;
}

// 主题类
function Theme(menuBgColor, menuBgImg, picPath) {
	var theme = new Object();
	theme.menuBgColor = menuBgColor;
	theme.menuBgImg = menuBgImg;
	theme.picPath = picPath;
	return theme;
}
