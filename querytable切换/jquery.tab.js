;(function($){//基本结构
	$.extend({//扩展jquery
		tab:function(options){
			var settings={//默认参数
				event:'click'
			}
			
			$.extend(settings,options);//配置参数存在覆盖默认参数
			
			if(settings.data.btns.length!=settings.data.divs.length){
				$.error('传入的数据长度不匹配');
			}
			
			var $oTab=$('#'+settings.id);
			var $html='<ul>';
			var $str='<div class="main">';
			for(var i=0;i<settings.data.btns.length;i++){
				$html+='<li><a href="javascript:;">'+settings.data.btns[i]+'</a></li>';
				$str+='<div class="content">'+settings.data.divs[i]+'</div>';
			}
			$html+='</ul>';
			$str+='</div>';
			$oTab.append($html).append($str);
			
			var $aBtns=$oTab.find('li');
			var $aDivs=$oTab.find('.content');
			$aBtns.eq(0).addClass('active');
			$aDivs.eq(0).css('display','block');
			var $num=0;
			$aBtns.on(settings.event,function(){
				$num=$(this).index();
				if(settings.delay&&settings.event=='mouseover'){
					var timer=setTimeout(function(){
						tabswitch();
					},settings.delay);
				}else{
					tabswitch()
				}
				
				$(this).mouseout(function(){
					clearTimeout(timer);
				})
				
			});
			
			function autoplay(){
				document.title=$num;
				if($num>=$aBtns.length-1){
					$num=0;
				}else{
					$num++;
				}
				tabswitch();
			}
			
			if(settings.autoplay){
				setInterval(autoplay,2000);
			}
			
			function tabswitch(){
				$aBtns.eq($num).addClass('active').siblings('li').removeClass('active');
				$aDivs.eq($num).css('display','block').siblings('.content').css('display','none');
			}
		}
	})
})(jQuery);
