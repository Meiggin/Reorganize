<?php
header('content-type:text/html;charset=utf-8');
	$conn=mysql_connect('localhost','root','12345678');
	
	mysql_select_db('jiuxianwang');
	mysql_query('SET NAMES UTF8');
	
	$query="select * from bjg";
	$result=mysql_query($query);//获取内容，存放到$result  记录集
	
	
	//mysql_fetch_array：逐条的获取记录集，返回一个数组，参1：记录集  参2：获取数字下标，字符串下标
	//print_r(mysql_fetch_array($result , MYSQL_NUM));//获取记录集的第一条
	//print_r(mysql_fetch_array($result , MYSQL_ASSOC));//获取记录集的第二条
	//print_r(mysql_fetch_array($result , MYSQL_ASSOC));//获取记录集的第三条
	
	//echo mysql_num_rows($result);
	
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result , MYSQL_ASSOC);//将数组给另外一个数组，形成二维数组。
	}
	
	echo json_encode($arr);

	
?>