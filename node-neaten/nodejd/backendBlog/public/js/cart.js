define(['jquery'],function($){
	
	return {
		change:(function(){

//获取cooki
//console.log(document.cookie)
var cardlist=[]
var arr=document.cookie.split(';');
//console.log(arr)
for(var i =0;i<arr.length;i++){
	var arr2=arr[i].split('=')
	console.log(arr2)
	if(arr2[0]=='cardlist'){
		console.log(JSON.parse(arr2[1]))
		
		cardlist=JSON.parse(arr2[1]);
	}
}
$('.goods-pic img').attr({src:cardlist[0].ourl})
$('.goods-d-info a').text(cardlist[0].title)

$('.b-price strong').text(cardlist[0].price)
$('.quantity-down-input').val(cardlist[0].num)
$('.b-sum strong').text(cardlist[0].price)
if(cardlist!==0){
	$('.goods-item-sele').css({display:'block'})
	$('#cart').css({display:'none'})
}
$('.shanchu').on('click',function(){
/*	var keys = document.cookie.match(/[^ =;]+(?=\=)/g);  
        if(keys) {  
        for(var i = keys.length; i--;)  
        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()  
    }  */

$('.item-list').on('click', '.b-action a', function(ev) {
//获取cookie转换成数组
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
    $(this).first().parents('.goods-info').remove();
    delgoodslist($(this).first().parents('.goods-info').find('img').attr('sid'), sidarr);
    totalprice();
});
	$('.goods-item-sele').css({display:'none'})
	$('#cart').css({display:'block'})
	document.cookie='cardlist='+JSON.stringify(cardlist)
console.log('111')
})

//计算总价
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
//全选
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
//修改数量的操作
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

//--
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
$('.quantity-down-input').on('input', function() {
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

});

//计算单个商品的价格
function singlegoodsprice(row) { //row:当前元素
    var $dj = parseFloat(row.parents('.goods-item').find('.b-price').find('strong').html());
    var $cnum = parseInt(row.parents('.goods-item').find('.quantity-form input').val());
    return ($dj * $cnum).toFixed(2);
}

//-


		})(),

	}
})
