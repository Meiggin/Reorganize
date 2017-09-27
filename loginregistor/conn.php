<?php 
	header('content-type:text/html;charset="utf-8"');
	$conn=@mysql_connect('localhost','root','12345678');
	if(!$conn){
		die('数据库连接有问题:'.mysql_error());
	}
	mysql_select_db('mytest');
	mysql_query('SET NAMES UTF8');
	
	
	
?>