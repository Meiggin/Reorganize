//同步操作的方式


//1、获取数据
//判断当前的产品是否存在购物车，如果存在，数量累加，如果不存在购物车，创建购物车。
$.ajax({
	//获取数据
	url:'json/cart.json',
	dataType:'json',
	async:false,
	success:function(data){
		var $html='';
		for(var i=0;i<data.length;i++){
			$html+='<li>'+
                    '<div class="goodsinfo">'+
	                    '<div class="p-img">'+
	                        '<a href="##"><img class="loadimg" src="'+data[i].img+'" alt="" sid="'+data[i].sid+'" /></a>'+
	                    '</div>'+
	                    '<div class="p-name">'+
	                       '<a class="loadt" href="##">'+data[i].title+'</a>'+
	                    '</div>'+
	                    '<div class="p-price"><strong><em>￥</em><i class="loadpcp">'+data[i].price+'</i></strong></div>'+
	                    '<div class="p-btn"><a href="javascript:void(0)"><b></b>加入购物车</a></div>'+
               		'</div>'+
                	'</li>';
		}
		$('.goods-list ul').html($html);
		
		//页面加载，先看看购物车是否右商品，如果有，先创建出来。
		if(getCookie('cartsid') && getCookie('cartnum')){
			var s=getCookie('cartsid').split(',');//先转数组，方便后面的遍历创建
			var n=getCookie('cartnum').split(',');//
			for(var i=0;i<s.length;i++){
				createcart(s[i],n[i]);
			}
		}
	}
	
});

//如果商品存在于购物车数量累加，否则创建商品信息进购物车,主要是利用数组进行判断。
var sidarr=[];//存放商品编号（sid）
var numarr=[];//存放商品数量

//获取对应的cookie,转换成对应的数组
function cookieToArray(){
	if(getCookie('cartsid')){
		sidarr=getCookie('cartsid').split(',');//将cookie值通过逗号拆分为数组。
	}else{
		sidarr=[];
	}
	
	if(getCookie('cartnum')){//存放数量
		numarr=getCookie('cartnum').split(',');
	}else{
		numarr=[];
	}
}

//取到和按钮对应的图片下面的sid，执行 cookieToArray() ，判断sid是否存在于存放商品编号的数组中。
$('.p-btn a').on('click',function(){
	//取到和按钮对应的图片下面的sid
	var $sid=$(this).parents('.goodsinfo').find('.loadimg').attr('sid');
	cookieToArray();//将对应的cookie转换成数组
	if($.inArray($sid,sidarr)!=-1){//判断当前的id是否存在于cookie中，如果存在数量累加，否则创建购物车。
		$('.goods-item:visible').each(function(){//对以及加入购物车的商品进行遍历。
			if($sid==$(this).find('img').attr('sid')){//当前传入的sid是否等于遍历的sid
				var $num=$(this).find('.quantity-form').find('input').val();//获取数量的值。
				$num++;//累加
				$(this).find('.quantity-form').find('input').val($num);//还回去给表单
				var $dj=parseFloat($(this).find('.b-price').children('strong').html());//取单价
				$(this).find('.b-sum').find('strong').html(($dj*$num).toFixed(2));//单价*num赋值给小计
				numarr[sidarr.indexOf($sid)]=$num;//当前的sid的位置，就是你num的位置。先获取sid位置。
				addCookie('cartnum',numarr.toString(),7);//添加到cookie
				totalprice();
			}
		});
	}else{//将对应的id编号添加到数组然后添加到cookie中
		sidarr.push($sid);
		addCookie('cartsid',sidarr.toString(),7);
		numarr.push(1);//将对应的数量添加到数组然后添加到cookie中,因为是第一次创建,数量为1,如果第二次创建走上面if语句.
		addCookie('cartnum',numarr.toString(),7);
		createcart($sid,1);//创建购物车商品列表，传入对应的参数(当前的商品编号，商品的数量)
	}
});

//添加创建到购物车的方法。
function createcart(sid,num){//sid图片的id，num：数量
	$.ajax({
		url:'json/cart.json',
		dataType:'json',
		async:false,
		success:function(data){
			for(var i=0;i<data.length;i++){
				if(sid==data[i].sid){//判断传入的id和数据的id是否一致。知道此次创建追加的数据是那一条
					var $clone=$('.goods-item:hidden').clone(true);//克隆隐藏的元素。
					$clone.find('.goods-pic').find('img').attr('src',data[i].img);
					$clone.find('.goods-pic').find('img').attr('sid',data[i].sid);
					$clone.find('.goods-d-info').find('a').html(data[i].title);
					$clone.find('.b-price').find('strong').html(data[i].price);
					$clone.find('.quantity-form').find('input').val(num);
					
					var $dprice=parseFloat(data[i].price);//获取单价
					$clone.find('.b-sum').find('strong').html(($dprice*num).toFixed(2));//将单价*数量追加到小计里面
					$clone.css('display','block');//让克隆的盒子显示出来；
					$('.item-list').append($clone);//追加
					kong();
					totalprice();
				}
			}
		}
	});
} 

//控制购物车空空的哦
//程序自定加载执行一次
kong();
function kong(){
	if(getCookie('cartsid')){//如果cookie不存在，让盒子显示，否则消失。
		$('.empty-cart').css('display','none');
	}else{
		$('.empty-cart').css('display','block');
	}
}

//计算购物车所有商品的总价格
totalprice();
function totalprice(){
	var total=0;//自定义的求和变量
	$('.goods-item:visible').each(function(){
		if($(this).find('input:checkbox').is(':checked')){//复选框被选中
			total+=parseFloat($(this).find('.b-sum').find('strong').html());
		}
	});
	$('.totalprice').html('￥'+total.toFixed(2));
	$('.amount-sum').find('em').html($('.goods-item:visible').find('.cart-checkbox input:checked').length);
}


//删除一行或者全部的cookie值。 
function delgoodslist(sid,sidarray){//sid 图片id    sidarray：存放id的数组
	var arr=[];//定义一个空数组
	for(var i=0;i<sidarray.length;i++){//传入存放id的数组
		if(sid!=sidarray[i]){//如果当前传入的id不等于数组的,单独存储出来
			arr.push(sidarray[i]);//arr存放的就是不会删除的id.
		}
	}
	numarr.splice(sidarray.indexOf(sid),1);//数量的数组进行截取删除，（改变原数组）
	sidarr=arr;//保留的id存放到cookie里面去。
	addCookie('cartsid',sidarr.toString(),7);//删除后的sid
	addCookie('cartnum',numarr.toString(),7);//删除后的数量
}

//删除一个商品
$('.b-action').find('a:first').on('click',function(){
	cookieToArray();//将cookie转数组
	$(this).parents('.goods-item').remove();//删除一行。
	delgoodslist($(this).parents('.goods-item').find('img').attr('sid'),sidarr);//cookie删除目标。
	totalprice();
});


//删除全部商品
$('.operation a:first').on('click',function(){
	$('.goods-item:visible').each(function(){
		if($(this).find('input:checkbox').is(':checked')){
			$(this).remove();
			delgoodslist($(this).find('img').attr('sid'),sidarr);
		}
	});
	totalprice();
});


//全选
$('.allsel').on('change',function(){
	if($(this).prop('checked')){
		$('.goods-item:visible').find('input:checkbox').prop('checked',true);
	}else{
		$('.goods-item:visible').find('input:checkbox').prop('checked',false);
	}
	$('.allsel').prop('checked',$(this).prop('checked'));
	totalprice();
});

var $input=$('.goods-item:visible').find('input:checkbox');
$('.goods-item:visible').find('input:checkbox').on('change',function(){
	if($('.goods-item:visible').find('input:checked').length==$input.size()){
		$('.allsel').prop('checked',true);
	}else{
		$('.allsel').prop('checked',false);
	}
	totalprice();
});


//改变数量++
$('.quantity-add').on('click',function(){
	var $count=$(this).parents('.goods-item').find('.quantity-form input').val();
	$count++;
	if($count>=99){
		$count=99;
	}
	$(this).parents('.goods-item').find('.quantity-form input').val($count);
	$(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));
	totalprice();
	setcookie($(this));
	
});


//改变数量--
$('.quantity-down').on('click',function(){
	var $count=$(this).parents('.goods-item').find('.quantity-form input').val();
	$count--;
	if($count<=1){
		$count=1;
	}
	$(this).parents('.goods-item').find('.quantity-form input').val($count);
	$(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));
	totalprice();
	setcookie($(this));
});

$('.quantity-form input').on('input',function(){
	var $reg=/^\d+$/g;//只能输入数字
	var $value=parseInt($(this).val());
	if($reg.test($value)){
		if($value>=99){
			$(this).val(99);
		}else if($value<=0){
			$(this).val(1);
		}else{
			$(this).val($value);
		}
	}else{
		$(this).val(1);
	}
	$(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));
	totalprice();
	setcookie($(this));
});

//计算单个商品的价格
function singlegoodsprice(row){
	var $dj=parseFloat(row.parents('.goods-item').find('.b-price').find('strong').html());
	var $cnum=parseInt(row.parents('.goods-item').find('.quantity-form input').val());
	return ($dj*$cnum).toFixed(2);
}


//将改变后的数量的值存放到cookie
function setcookie(obj){
	cookieToArray();
	var $index=obj.parents('.goods-item').find('img').attr('sid');
	numarr[sidarr.indexOf($index)]=obj.parents('.goods-item').find('.quantity-form input').val();
	addCookie('cartnum',numarr.toString(),7);
}
