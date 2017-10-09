//事件委托的方式
$.ajax({
	url:'json/cart.json',
	dataType:'json'
}).done(function(data){
	var html='';
	for(var i=0;i<data.length;i++){
		html+='<li>' +
					'<div class="goodsinfo">' +
						'<div class="p-img">' +
						'<a href="##"><img class="loadimg" src="' + data[i].img + '" alt="" sid="' + data[i].sid + '" /></a>' +
						'</div>' +
						'<div class="p-name">' +
						'<a class="loadt" href="##">' + data[i].title + '</a>' +
						'</div>' +
						'<div class="p-price"><strong><em>￥</em><i class="loadpcp">' + data[i].price + '</i></strong></div>' +
						'<div class="p-btn"><a href="javascript:void(0)"><b></b>加入购物车</a></div>' +
					'</div>' +
			   '</li>';
	}
	$('.goods-list ul').append(html);
	
	
	if(getCookie('cartsid') && getCookie('cartnum')){
		var s=getCookie('cartsid').split(',');//[1,2,3,4]
		var n=getCookie('cartnum').split(',');//[1,1,1,1]
		console.log(s,n);
		for(var i=0;i<s.length;i++){
			creategoods(s[i],n[i]);//逐个创建	s[i]:sid   n[i]:num
		}
	}
	
});

//假设两个数组，存放商品的sid和商品的数量    
var arrsid=[];
var arrnum=[];

//提前设置cookie名称，cartsid（存放sid的名称）   cartnum（存放数量的名称）
//取出cookie转换成数组
function cookietoarray(){
	if(getCookie('cartsid')){
		arrsid=getCookie('cartsid').split(',');
	}else{
		arrsid=[];
	}
	
	if(getCookie('cartnum')){
		arrnum=getCookie('cartnum').split(',');
	}else{
		arrnum=[];
	}
}


$('.goods-list ul').on('click','.p-btn a',function(){
	//alert($(this).parents('.goodsinfo').find('.loadimg').attr('sid'));
	//alert($(this).html());//$(this)指向委托的元素。
	var sid=$(this).parents('.goodsinfo').find('.loadimg').attr('sid');//当前点击按钮对应的图片的sid
	cookietoarray();
	if($.inArray(sid,arrsid)!=-1){//判断当前的sid是否存在与cookie中，存在，数量累加,cookie数量变化，不存在，创建商品列表，添加cookie
		$('.goods-item:visible').each(function(){
			if(sid==$(this).find('.goods-pic img').attr('sid')){
				var num=$(this).find('.quantity-form input').val();
				num++;
				$(this).find('.quantity-form input').val(num);
				var dj=parseFloat($(this).find('.b-price strong').html());
				$(this).find('.b-sum strong').html((num*dj).toFixed(2));
				arrnum[$.inArray(sid,arrsid)]=num;
				addCookie('cartnum',arrnum.toString(),7);//仅需要存放数量
			}
		})
	}else{
		arrsid.push(sid);//存放商品编号的数组
		addCookie('cartsid',arrsid.toString(),7);
		arrnum.push(1);
		addCookie('cartnum',arrnum.toString(),7);
		creategoods(sid,1);
	}
	kong();
});


function creategoods(sid,num){//sid:商品编号sid  num:商品数量
	$.ajax({
		url:'json/cart.json',
		dataType:'json'
	}).done(function(data){
		for(var i=0;i<data.length;i++){
			if(data[i].sid==sid){//接口数据下面的sid和点击按钮对应的sid进行比较，确认内容。
				var clone=$('.goods-item:hidden').clone(true);
				clone.find('.goods-pic img').attr({//换内容
					src:data[i].img,
					sid:data[i].sid
				});
				clone.find('.goods-d-info a').html(data[i].title);
				clone.find('.b-price strong').html(data[i].price);
				clone.find('.quantity-form input').val(num);
				clone.css('display','block');
				$('.item-list').append(clone);
			}
		}
	});
}


kong();
function kong(){
	if(getCookie('cartsid')){
		$('.empty-cart').hide();
	}else{
		$('.empty-cart').show();
	}
}







































/*//1.添加购物车商品的数据
$.ajax({
    url: 'json/cart.json',
    dataType: 'json'
}).done(function(data) {
    var $html = '';
    for (var i = 0; i < data.length; i++) {
        $html += '<li>' +
            '<div class="goodsinfo">' +
            '<div class="p-img">' +
            '<a href="##"><img class="loadimg" src="' + data[i].img + '" alt="" sid="' + data[i].sid + '" /></a>' +
            '</div>' +
            '<div class="p-name">' +
            '<a class="loadt" href="##">' + data[i].title + '</a>' +
            '</div>' +
            '<div class="p-price"><strong><em>￥</em><i class="loadpcp">' + data[i].price + '</i></strong></div>' +
            '<div class="p-btn"><a href="javascript:void(0)"><b></b>加入购物车</a></div>' +
            '</div>' +
            '</li>';
    }
    $('.goods-list ul').html($html);//将数据追加到商品列表


    //页面加载检测购物车中是否有数据，有的话创建商品列表
    if (getCookie('cartsid') && getCookie('cartnum')) {
        var s = getCookie('cartsid').split(',');
        var n = getCookie('cartnum').split(',');
        for (var i = 0; i < s.length; i++) {
            createcart(s[i], n[i]);//创建商品列表
        }
    }
});


//2.判断是否创建商品列表或者数量累加
var sidarr = [];
var numarr = [];

function cookieToArray() {//获取cookie转换成数组
    if (getCookie('cartsid')) {
        sidarr = getCookie('cartsid').split(','); //将cookie值通过逗号拆分为数组。
    } else {
        sidarr = [];//没有cookie就是空数组
    }

    if (getCookie('cartnum')) { //存放数量
        numarr = getCookie('cartnum').split(',');
    } else {
        numarr = [];
    }
}

//委托原理获取商品列表的添加购物车按钮
$('.goods-list ul').on('click', '.p-btn a', function() {
    var sid = $(this).parents('.goodsinfo').find('.loadimg').attr('sid');
    cookieToArray();
    if ($.inArray(sid, sidarr) != -1) { //确定第一个参数在数组中的位置，从0开始计数(如果没有找到则返回 -1 )
        $('.goods-item:visible').each(function() {//遍历可视的商品列表
            if (sid == $(this).find('img').attr('sid')) {//添加购物车按钮的索引和购物车中商品列表的索引一致
                var $num = $(this).find('.quantity-form input').val();//获取数量
                $num++;//数量累加
                $(this).find('.quantity-form input').val($num);//数量赋值
                var $dj = parseFloat($(this).find('.b-price strong').html());//获取当前的单价
                $(this).find('.b-sum strong').html(($dj * $num).toFixed(2));//计算商品总价
                numarr[$.inArray(sid, sidarr)] = $num;//将数量存储到对应的cookie存放数量的数组中
                addCookie('cartnum', numarr.toString(), 7);//添加购物车
                totalprice();//计算总价
            }
        });
    } else {//当前商品列表没有进入购物车，创建商品列表
        sidarr.push(sid);
        addCookie('cartsid', sidarr.toString(), 7);
        numarr.push(1);
        addCookie('cartnum', numarr.toString(), 7);
        createcart(sid, 1);//调用创建商品列表的函数
    }
});


//3.创建商品列表的函数
function createcart(sid, num) {
    $.ajax({
        url: 'json/cart.json',
        dataType: 'json'
    }).done(function(data) {
        for (var i = 0; i < data.length; i++) {
            if (sid == data[i].sid) {
                var $clone = $('.goods-item:hidden').clone(true);
                $clone.find('.goods-pic').find('img').attr('src', data[i].img);
                $clone.find('.goods-pic').find('img').attr('sid', data[i].sid);
                $clone.find('.goods-d-info').find('a').html(data[i].title);
                $clone.find('.b-price').find('strong').html(data[i].price);
                $clone.find('.quantity-form').find('input').val(num);
                var $dj1 = parseFloat($clone.find('.b-price strong').html());
                $clone.find('.b-sum strong').html(($dj1 * num).toFixed(2));
                $clone.css('display', 'block');
                $('.item-list').append($clone);
                kong();
                totalprice();
            }
        }
    });
}

//4.商品列表不存在显示购物车为空
kong()

function kong() {
    if (getCookie('cartsid')) {
        $('.empty-cart').hide();
    } else {
        $('.empty-cart').show();
    }
}


//5.计算总价
totalprice();

function totalprice() {//计算总价
    var total = 0;
    var countnum = 0;
    $('.goods-item:visible').each(function() {
        if ($(this).find('input:checkbox').is(':checked')) {
            total += parseFloat($(this).find('.b-sum strong').html());
            countnum += parseInt($(this).find('.quantity-form').find('input').val());
        }
    });
    $('.totalprice').html('￥' + total.toFixed(2));
    $('.amount-sum em').html(countnum);
}



//6.全选
$('.allsel').on('change', function() {
    $('.goods-item:visible').find('input:checkbox').prop('checked', $(this).prop('checked'));
    $('.allsel').prop('checked', $(this).prop('checked'));
    totalprice();
});

var $inputchecked = $('.goods-item:visible').find('input:checkbox');//获取委托元素
$('.item-list').on('change', $inputchecked, function() {
    var $inputs = $('.goods-item:visible').find('input:checkbox'); //放内部
    if ($('.goods-item:visible').find('input:checked').length == $inputs.size()) {
        $('.allsel').prop('checked', true);
    } else {
        $('.allsel').prop('checked', false);
    }
    totalprice();
});


//7.删除商品列表
//删除cookie的函数
function delgoodslist(sid, sidarr) {//sid：当前的sid，sidarr:cookie的sid的值
    var index = -1;
    for (var i = 0; i < sidarr.length; i++) {
        if (sid == sidarr[i]) {
            index = i;
        }
    }
    sidarr.splice(index, 1);//删除数组对应的值
    numarr.splice(index, 1);//删除数组对应的值
    addCookie('cartsid', sidarr.toString(), 7);//添加cookie
    addCookie('cartnum', numarr.toString(), 7);
}

//删除单个商品的函数(委托)
$('.item-list').on('click', '.b-action a', function(ev) {
    cookieToArray(); //转数组
    $(this).first().parents('.goods-info').remove();
    delgoodslist($(this).first().parents('.goods-info').find('img').attr('sid'), sidarr);
    totalprice();
});


//删除全部商品的函数
$('.operation a:first').on('click', function() {
    $('.goods-item:visible').each(function() {
        if ($(this).find('input:checkbox').is(':checked')) {
            $(this).remove();
            delgoodslist($(this).find('img').attr('sid'), sidarr);
        }
    });
    totalprice();
});

//8.修改数量的操作
//改变商品数量++
$('.quantity-add').on('click', function() {
    var $count = $(this).parents('.goods-item').find('.quantity-form input').val();
    $count++;
    if ($count >= 99) {
        $count = 99;
    }
    $(this).parents('.goods-item').find('.quantity-form input').val($count);
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));

});


//改变商品数量--
$('.quantity-down').on('click', function() {
    var $count = $(this).parents('.goods-item').find('.quantity-form input').val();
    $count--;
    if ($count <= 1) {
        $count = 1;
    }
    $(this).parents('.goods-item').find('.quantity-form input').val($count);
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));
});


//直接输入改变数量
$('.quantity-form input').on('input', function() {
    var $reg = /^\d+$/g; //只能输入数字
    var $value = parseInt($(this).val());
    if ($reg.test($value)) {
        if ($value >= 99) {//限定范围
            $(this).val(99);
        } else if ($value <= 0) {
            $(this).val(1);
        } else {
            $(this).val($value);
        }
    } else {
        $(this).val(1);
    }
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));
});



//9.计算单个商品的价格
function singlegoodsprice(row) { //row:当前元素
    var $dj = parseFloat(row.parents('.goods-item').find('.b-price').find('strong').html());
    var $cnum = parseInt(row.parents('.goods-item').find('.quantity-form input').val());
    return ($dj * $cnum).toFixed(2);
}


//10.将改变后的数量的值存放到cookie
function setcookie(obj) { //obj:当前操作的对象
    cookieToArray();
    var $index = obj.parents('.goods-item').find('img').attr('sid');
    numarr[sidarr.indexOf($index)] = obj.parents('.goods-item').find('.quantity-form input').val();
    addCookie('cartnum', numarr.toString(), 7);
}
*/