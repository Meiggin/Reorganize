<?php
	header('content-type:text/html;charset=utf-8');//设置字符编码
	//array创建数组
	/*$arr=array('zhangsan','wangwu','lisi');
	echo $arr[0];//下标访问
	echo "<hr>";
	//$arr1=Array(1,2,3,4,5);
	$arrkey=array('name'=>'zhangsan','age'=>1000,'sex'=>'男');
	echo $arrkey['name'];//key值访问
	//echo $arrkey[0];//报错
	var_dump($arrkey);*/
	
	//range():创建数组
	
	/*$numarr=range(1,100);
	print_r($numarr);
	echo "<hr>";
	$strarr=range('a','z');
	print_r($strarr);
	echo "<hr>";
	$numarr1=range(-1,-10);
	print_r($numarr1);
	echo "<hr>";
	$strarr1=range('hehe','xixi');
	print_r($strarr1);*/
	
	
//	count()和 sizeof()（别名） 统计数组下标的个数
//	array_count_values() 统计数组中所有的值出现的次数
	/*$arr=array('a','b','c','d','a','b','c','d','a','d','a');
	$arr1=array_count_values($arr);
	print_r($arr1);
	print_r($arr);//不会改变原数组*/
//	array_unshift() 函数将新元素添加到数组头
//	array_push() 函数将每个新元素添加到数组的末尾。
//	array_shift()删除数组头第一个元素，与其相反的函数是 array_pop(),删除并返回数组末
//	尾的一个元素。
	/*$arr=array('zhangsan','wangwu','lisi');
	array_push($arr,'nigulasizhaosi','hehe');//注意写法。
	print_r($arr);*/
//	sort() 数组排序
	/*$arr=array(19,51,1,3,50,7,400,6,2222);
	sort($arr,SORT_NUMERIC);//sort($arr,SORT_STRING);
	print_r($arr);*/
//	foreach() 提供了遍历数组的简单方式,仅能够应用于数组和对象
	/*$arrkey=array('name'=>'zhangsan','age'=>1000,'sex'=>'男');
	foreach($arrkey as $keys=>$values){
		echo $keys.'----'.$values.'<br>';
	}*/
	
//	each() 返回数组中当前的键／值对并将数组指针向前移动一步
	//$foo = array("bob", "fred", "jussi", "jouni", "egon", "marliese");
	/*print_r(each($foo));//bob
	print_r(each($foo));
	print_r(each($foo));
	print_r(each($foo));
	print_r(each($foo));
	print_r(each($foo));*/
	$fruit = array('a' => 'apple', 'b' => 'banana', 'c' => 'cranberry');
	/*print_r(each($fruit));//'a' => 'apple'
	print_r(each($fruit));//'b' => 'banana'
	print_r(each($fruit));//'c' => 'cranberry'*/
	/*while (list($key, $val) = each($fruit)) {
	    echo "$key => $val<br>";
	}*/
	
//	list() 把数组中的值赋给一些变量
	/*$arr=array('zhangsan','wangwu','lisi');
	list($a,$b,$c)=$arr;
	echo "$a---$b---$c";//zhangsan---wangwu---lisi*/
//	array_unique()  移除数组中重复的值(生成新数组)
	
	/*$arr=array('a','b','c','d','a','b','c','d','a','d','a');
	print_r(array_unique($arr));
	echo "<hr>";
	print_r($arr);//不改变原数组*/
?>
