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
var loopDiv = document.querySelector("section > ul > li:nth-child(7) > .loop");

var loopIndex = 0;
var isOnDiglog = false;
var menuBgColorBlank = "#1a1a1a";
var menuBgImgBlank = "linear-gradient(#000,#121212)";
var menuBgColorRed = "#511824";
var menuBgImgRed = "linear-gradient(#46101b,#4e141f)";
var menuBgColorWhite = "#f9f9f9";
var menuBgImgWhite = "linear-gradient(#f8f8f8,#f5f5f5)"

var loopPics = ["../imgJianGuoPro2/features/sample-1.d0bd815d1d103dda748e924d74407da1.jpg",
			"../imgJianGuoPro2/features/sample-2.57df06dcb21c6d8b339e747ea56630d8.jpg",
			"../imgJianGuoPro2/features/sample-3.7098f8557613f60f03b0cc8b2d3f54c7.jpg",
			"../imgJianGuoPro2/features/sample-4.f7a7a54a46d314a212f871c9e3578beb.jpg",
			"../imgJianGuoPro2/features/sample-5.4cfcc4d8b0fd05064a435ad686fb4bb4.jpg",
			"../imgJianGuoPro2/features/sample-6.5974570f36a713f62e8c223dd36dda92.jpg",
			"../imgJianGuoPro2/features/sample-7.e4c3040203be39400fca5d91be2d9d6b.jpg",
			"../imgJianGuoPro2/features/sample-8.c1606fb5957c50ca1a19fa17e0235f30.jpg"];

// 轮播图
setInterval(function() {
	changeLoopPic(loopDiv);
}, 1500);

function changeLoopPic(loopDiv) {
	if(loopIndex > 7) {
		loopIndex = 0;
	}
	loopDiv.style.background = "url(" + loopPics[loopIndex] + ") no-repeat";
	loopDiv.style.backgroundSize = "870px";
	loopIndex++;
}

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
	
	//	 菜单栏颜色变化
	if(distance > 100 && distance < 4200) {
		menu.style.bgColor = menuBgColorBlank;
		menu.style.backgroundImage = menuBgImgBlank;
	} else if(distance >= 4200 && distance < 5100) {
		// 红
		menu.style.bgColor = menuBgColorRed;
		menu.style.backgroundImage = menuBgImgRed;
	} else if(distance >= 5100) {
		// 白
		menu.style.bgColor = menuBgColorWhite;
		menu.style.backgroundImage = menuBgImgWhite;
	}
}