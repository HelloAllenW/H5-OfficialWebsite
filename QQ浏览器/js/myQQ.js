/*
* @Author: apple
* @Date:   2017-10-08 17:31:39
* @Last Modified by:   apple
* @Last Modified time: 2017-10-09 23:13:48
*/
$(function(){
	// 属于你的浏览器 添加
	 setTimeout(function() {
	 	$(".section1").addClass('comein');
	 }, 200);
     $('#fullpage').fullpage({
    	// 显示项目符号
    	navigation: true,
    	// 循环滚动
    	loopBottom: true, 
    	onLeave: function(index, nextIndex, direction) {
    		// 当我们离开第一屏幕的时候，section1 就移除 comein 
    		$(".section1").removeClass('comein');
    		// 如果下一屏幕的的索引号是 1 说明我们要到第一屏幕了 添加 comein
    		if(nextIndex == 1) {
    			$(".section1").addClass('comein');
    		}

    		if(nextIndex != 1) {
    			// 如果不是第一屏幕 就给背景添加旋转的  因为逆时针所以- 60deg
    			$("#bg").addClass('rotate');
    		} else {

    			$("#bg").removeClass('rotate');
    		}

    		// 第2屏幕的制作 
    		// 当我们进入第2屏幕的时候，  53 这个 图片变大 
    		if(nextIndex == 2) {
    			// 我们的jquery  里面的animate 是不支持 transform 等 
    			// jquery 里面通过 css 和  transition 搭配也能基本实现 类似animate 效果
    			$(".p2").css("transform", "translateX(-50%) translateY(-50%) translateZ(0px) scale(1)");  
    		} else {
    			$(".p2").css("transform", "translateX(-50%) translateY(-50%) translateZ(2000px) scale(1)");  
    		}
    		// 第3屏幕的制作 
    		//  当我们进入第3屏幕的时候，  盒子进入 屏幕
    		if(nextIndex == 3) {
    			$(".p3").css("transform", "translateZ(-50px) rotateX(30deg)")
    			$(".title3").css("transform", "translateZ(0px) rotateX(0deg)")
    		} 
			// 第4屏幕的制作
			if(nextIndex == 4) {
    			$(".p3").css("transform", "translateZ(-200px) rotateX(-45deg) translateX(3000px)")
    			$(".title3").css("transform", "translateZ(1200px) rotateY(-60deg)")
    		} 
    	}

    });
});