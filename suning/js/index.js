/**
 * Created by safra on 2018/8/19.
 */
$(function () {
    // 手势切换
    // 1.自动轮播 无缝
    // 2.点随着改变
    // 3.完成手势切换

    var $banner = $('.sn_banner');
    var width = $banner.width();

    var $imageBox = $banner.find('ul:first');
    var $pointBox = $banner.find('ul:last');
    var $points = $pointBox.find('li');

    var animationFun = function () {
        $imageBox.animate({transform:'translateX('+(-index*width)+'px)'},200,function () {
            if (index >= 9){
                index = 1;
                // 瞬间
                $imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }else if(index <= 0){
                index = 8;
                $imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }
            // 2.点随着改变
            $points.removeClass('now').eq(index-1).addClass('now');
        })
    };

    var index = 1;
    var timer = setInterval(function () {
        index ++;
        animationFun();
    },5000);
    // 3.完成手势切换
    // 滑动bug没有解决
    $banner.on('swipeLeft',function () {
        console.log('next');
        // index ++;
        // animationFun();
    });
    $banner.on('swipeRight',function () {
        console.log('prev');
        // index --;
        // animationFun();
    });

});
