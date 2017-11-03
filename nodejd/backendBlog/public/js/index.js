define(['jquery'],function($){
	return {
		change:(function(){
			/*-------------弹出框--------------*/
$('.case ul li').hover(function(){
	$('.hidebox').show()
},function(){
	$('.hidebox').hide()
})


/*---------顶部搜索栏------*/
$(window).scroll(function(){
		//获取scrolltop值
		var $scrolltop=$(window).scrollTop();
		console.log($scrolltop)
		if($scrolltop>=600){
			$('#fixseach').fadeIn(500);//fadeIn();
		}else{
			$('#fixseach').fadeOut(500);
		}
});

/*------------------rush数据-------------*/
$.ajax({
	url: 'http://localhost/jd/php/rush.php',
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < 5; i++) {
			var rushlitimg = data[i]['imgUrl'];
			$('.rush_li_t_img').eq(i).attr({
				'src': rushlitimg
			});
		}
	}
})
$.ajax({
	url: 'http://localhost/jd/php/rush.php',
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < 2; i++) {
			var rushlitimg = data[i]['imgUrl'];
			$('.rush_comm_rimg').eq(i).attr({
				'src': rushlitimg
			});
		}
	}
})
/*-----------------轮播图--------------------*/
$(function() {
	var num = 0;
	$(".banner_img ol li").eq(0).css('display', 'block')
	//轮播图左右a显示
	$('.banner_img').hover(function() {
		$('.left_a').css('display', 'block')
		$('.right_a').css('display', 'block')
	}, function() {
		$('.left_a').css('display', 'none')
		$('.right_a').css('display', 'none')
	})
	//轮播图下方ol,鼠标滑过淡入淡出
	$(".banner_img ol li").mouseover(function() {
		$(this).addClass('active').siblings().removeClass("active");
		var index = $(this).index();
		i = index;
		$(".banner_img ul li").eq(index).fadeIn(500).siblings().fadeOut(500);
		clearInterval(timer)
	});
	//向右切换
	var play = function() {
		i++;
		i = i > 7 ? 0 : i;
		$(".banner_img ol li").eq(i).addClass('active').siblings().removeClass("active");
		$(".banner_img ul li").eq(i).fadeIn(500).siblings().fadeOut(500);
	}
	//向左切换
	var playLeft = function() {
		i--;
		i = i < 0 ? 7 : i;
		$(".banner_img ol li").eq(i).addClass('active').siblings().removeClass("active");
		$(".banner_img ul li").eq(i).fadeIn(500).siblings().fadeOut(500);
	}
	//点击切换
	$(".left_a").click(function() {
		playLeft();
	})
	$(".right_a").click(function() {
		play();
	})
	//自动轮播
	var i = 0;
	var timer = setInterval(play, 2000);
	//鼠标移入移出效果
	$(".banner_img").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(play, 2000);
	})
});
//轮播图数据
$.ajax({
	url: 'http://localhost/jd/php/lunbotu.php',
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < 8; i++) {
			var lunbo = data[i]['url'];
			$('.banner_bigImg').eq(i).attr({
				'src': lunbo
			});
		}
	}
})
/*------------------轮播图结束---------------------*/
/*-------banneradvert数据-----------*/
$.ajax({
	url: 'http://localhost/jd/php/banner_advert.php',
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < 8; i++) {
			var banneradvert = data[i]['url'];
			$('.advert_img').eq(i).attr({
				'src': banneradvert
			});
		}
	}
})
/*---------banneradvert结束-----*/
/*-------------楼梯--------------*/
//1.通过scroll事件，控制左侧的楼梯显示与隐藏
	$(window).scroll(function(){
		//获取scrolltop值
		var $scrolltop=$(window).scrollTop();
		console.log($scrolltop)
		if($scrolltop>=1300){
			$('#loutinav').fadeIn(500);//fadeIn();
		}else{
			$('#loutinav').fadeOut(500);
		}
		//4.触发滚轮，让对应的楼梯，添加类名，进行切换标注。
		$('#loutinav li').each(function(){
			var $top=$('.louti').eq($(this).index()).offset().top+400;
			if($top>$scrolltop){
				$('#loutinav li').removeClass('active');
				$('#loutinav li').eq($(this).index()).addClass('active');
				return false;
			}
		})
		
		
	});
	//2.点击楼梯，获取对应的楼层的top，将top赋值给(html,body)下面scrolltop
	//on(events,[selector],[data],fn)
	$('#loutinav li').not('.last').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var $index=$(this).index();//当前的索引
		var $top=$('.louti').eq($index).offset().top;//当前楼梯对应的楼层的top值
		$('html,body').animate({//赋值 
			//document.documentElement.scrollTop || document.body.scrollTop
			scrollTop:$top
		},200);
	});
	//3.回到顶部
	$('.last').on('click',function(){
		$('html,body').animate({//赋值 
			//document.documentElement.scrollTop || document.body.scrollTop
			scrollTop:0
		});
	});
/*--------------楼梯结束----------------*/
/*------------------rush数据-------------*/
$.ajax({
	url: 'http://localhost/jd/php/rush.php',
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < 5; i++) {
			var rushlitimg = data[i]['imgUrl'];
			$('.rush_li_t_img').eq(i).attr({
				'src': rushlitimg
			});
		}
	}
})
$.ajax({
	url: 'http://localhost/jd/php/rush.php',
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < 2; i++) {
			var rushlitimg = data[i]['imgUrl'];
			$('.rush_comm_rimg').eq(i).attr({
				'src': rushlitimg
			});
		}
	}
})
/*rush数据结束*/
/*-----------------倒计时-----------------*/
var intDiff = parseInt(12000);//倒计时总秒数量
function timer(intDiff){
    window.setInterval(function(){
    var day=0,
        hour=0,
        minute=0,
        second=0;//时间默认值        
    if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $('.hour').html('<s id="h"></s>'+hour+'');
    $('.minute').html('<s></s>'+minute+'');
    $('.second').html('<s></s>'+second+'');
    intDiff--;
    }, 1000);
} 
$(function(){
    timer(intDiff);
}); 
/*---------------倒计时结束-------------*/
/*-------------guide数据---------------*/
$.ajax({
	url: 'http://localhost/jd/php/rush.php',
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < 16; i++) {
			var guidestuffbimg = data[i]['imgUrl'];
			$('.guide_stuff_b_img').eq(i).attr({
				'src': guidestuffbimg
			});
		}
	}
})
/*guide_special_b数据*/
$.ajax({
	url: 'http://localhost/jd/php/rush.php',
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < 6; i++) {
			var guidespecialbimg = data[i]['imgUrl'];
			$('.guide_special_bimg').eq(i).attr({
				'src': guidespecialbimg
			});
		}
	}
})
/*-----------------morething数据-------------*/
$.ajax({
	url: 'http://localhost/jd/php/rush.php',
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < 103; i++) {
			var moreulimg = data[i]['imgUrl'];
			var moreulp = data[i]['title']
			$('.moreulimg').eq(i).attr({
				'src': moreulimg
			});
			$('.matter').eq(i).text(moreulp);
		}
	}
})
/*-----------loveeat数据-----------*/
$.ajax({
	url: 'http://localhost/jd/php/rush.php',
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < 100; i++) {
			var eatimg = data[i]['imgUrl'];
			$('.eatimg').eq(i).attr({
				'src': eatimg
			});
		}
	}
})
/*-------------loveeatlogo数据------------*/
$.ajax({
	url: 'http://localhost/jd/php/logo.php',
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < 50; i++) {
			var loveeatlogoimg1 = data[i]['imgUrl'];
			$('.loveeatlogoimg').eq(i).attr({
				'src': loveeatlogoimg1
			});
		}
	}
})
/*----------chmina_item_wraph4img数据------------*/
$.ajax({
	url: 'http://localhost/jd/php/rush.php',
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < 10; i++) {
			var chminaitemwraph4img = data[i]['imgUrl'];
			$('.chmina_item_wraph4img').eq(i).attr({
				'src': chminaitemwraph4img
			});
		}
	}
})
/*--------------侧边栏分享-----------*/
$(function () {
    $('.allside').hover(function () {
        $(this).children('em').stop(true,true).animate({ left: '-62px' }, 300);
    }, function () {
         $(this).children('em').stop(true,true).animate({ left: '0' }, 300);
    });
});
/*-------------tab切换------------*/
$('.hi_c_1').on('mouseover','.hi2',function(){
	$('.xian').stop(true,true).animate({left:'53px'},400);
	$('.hi_c_22').css({display:'block'})
	$('.hi_c_21').css({display:'none'})
})
$('.hi_c_1').on('mouseover','.hi1',function(){
	$('.xian').stop(true,true).animate({left:'-2px'},400);
	$('.hi_c_22').css({display:'none'})
	$('.hi_c_21').css({display:'block'})
})

/*--------------搜索框------------*/
/*$('#searchInput').on('input',function(){
console.log('aaaaa');
	$.ajax({
		url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+$(this).val()+'&p=3&req=2&csor=0&cb=baidu',
		type:'GET',
		datatype:'jsonp'
	}).done(function(data){
		console.log(data);
	}).fail(function(){
		console.log('wooo');
	})
	
})*/

//懒加载
//$(window).on('scroll',function result(){
//          if(isVisible($('#lovelife'))){
//              console.log(true);
//          }
//          else{
//              console.log(false);
//          }
//      }) 
//      function isVisible($img){
//          var windowHeight = $(window).height(),
//              windowScrolltop = $(window).scrollTop(),
//              imgoffsetTop = $img.offset().top,
//              imgHeight = $img.outerHeight(true);
//          if(windowHeight + windowScrolltop > imgoffsetTop && windowScrolltop < imgoffsetTop + imgHeight ){
//              return true;
//          }
//          else {
//              return false;
//          }
//      }

		})(),

	}
})
