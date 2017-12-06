define(['jquery'],function($){
	
	return {
		change:(function(){
			//数据
$.ajax({
	url: 'http://localhost/jd/php/details.php',
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < 7; i++) {
			var ulwrapimg = data[i]['imgUrl'];
			$('.ul_wrap_img').eq(i).attr({
				'src': ulwrapimg
			});
		}
	}
})
$.ajax({
	url: 'http://localhost/jd/php/details.php',
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < 2; i++) {
			var bigimg = data[i]['imgUrl'];
			$('#datu').eq(i).attr({
				'src': bigimg
			});
		}
	}
})

	//给li加类变红
	$('.ul_wrap ul').on('mousemove', 'li', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('#datu').attr({
			src: $(this).children('img').attr('src')
		})
		$('#hide img').attr({
			src: $('#datu').attr('src')
		})
	})
	//移动到xf发生事件
	$('.left_datu').hover(function() {
		$('#hide').css({
			display: 'block'
		})
		$('#hide img').attr({
			src: $('#datu').attr('src')
		});
		$('#mover').css({
			display: 'block'
		})

	}, function() {
		$('#hide').css({
			display: 'none'
		})
		$('#mover').css({
			display: 'none'
		})
		
	})

			$('.left_datu').on('mouseover',function(){
				$('#mover,#hide').css({display:'block'});
				console.log('触发了');
				$(document).on('mousemove',function(e){	
						$('#mover').offset(function(index, a) {
							var obj = {};
							obj.left = e.pageX - $('#mover').width()/2;
							obj.top = e.pageY - $('#mover').height()/2;
							if(obj.left <= $('#datu').offset().left){
								obj.left = $('#datu').offset().left;
							}
							else if(obj.left >= $('#datu').offset().left+$('#datu').width() - $('#mover').width()){
								obj.left = $('#datu').offset().left+$('#datu').width() - $('#mover').width();
							}
							if(obj.top <= $('#datu').offset().top){
								obj.top = $('#datu').offset().top;
							}
							else if(obj.top >= $('#datu').offset().top+$('#datu').height() - $('#mover').height()){
								obj.top = $('#datu').offset().top+$('#datu').height() - $('#mover').height();
							}
							
							return obj;
						});
						$('#hide img')[0].style.top = '-'+ $('#mover').position().top*3 + 'px';
							$('#hide img')[0].style.left = '-'+ $('#mover').position().left*3 + 'px';
						
				});
			});
			$('.left_datu').on('mouseout',function(){
				$('#mover,#hide').css({display:'none'});
				
				$(document).on('mousemove',null);
			});

			//--下面的的li点击事件
			$('.left_xiaotu li').eq(0).children('i').css({display:'block'});
			$('.left_xiaotu').on('click','li',function(){
				
					$(this).children('i').css({display:'block'}).parent().siblings('li').children('i').css({display:'none'});
					$('#datu').attr({src:$(this).children('img').attr('src')});
					$('#hide').children('img').attr({src:$('#datu').attr('src')});
			})



			//fangda()结束	
	//li a点击换向右图片
	var num = 5;
	$('.righta').on('click', function() {
		if(num < $('.ul_wrap ul li').length) {
			num++;
			if(num == $('.ul_wrap ul li').length) {
				$('.righta i').css({
					display: 'none'
				})
			}
			$('.lefta i').css({
				display: 'block'
			})
		}
		$('.ul_wrap ul').animate({
			left: -$('.ul_wrap ul li').width() * (num - 5) - 15
		}, 400)
	})
	$('.lefta').on('click', function() {
		if(num > 5) {
			num--;
			if(num == 5) {
				$('.lefta i').css({
					display: 'none'
				})
			}
			$('.righta i').css({
				display: 'block'
			})
		}
		$('.ul_wrap ul').animate({
			left: -$('.ul_wrap ul li').width() * (num - 5)
		}, 400)
	})
	//加加减减
			$('.shang').click(function(event) {
				/* Act on the event */
				console.log(parseInt($('.jiajian input').val()));
				$('.jiajian input').val(parseInt($('.jiajian input').val())+1);
				
			});
			$('.xia').click(function(event) {
				/* Act on the event */
				if(parseInt($('.jiajian input').val()) == 0){
					return false;
				}
				else {
					$('.jiajian input').val(parseInt($('.jiajian input').val())-1);
				}
			})
//获取cookie
var cardlist=[];
$('.liji').on('click',function(e){
	console.log(e.target.nodeName.toLowerCase())
	var obj = {};
	obj.ourl=$('#datu').attr('src')
	obj.title=$('.divspan').text()
	obj.price=$('.span2').text()
	obj.num=$('.num').val()			
	console.log(obj)
	cardlist.push(obj)
	document.cookie='cardlist='+JSON.stringify(cardlist)
})

		})(),
	}
})
