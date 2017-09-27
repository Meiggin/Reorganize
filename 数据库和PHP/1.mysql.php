<?php
	//php数据库连接
	header('content-type:text/html;charset=utf-8');
	//1.连接数据库,打开一个到 MySQL 服务器的连接
	$conn=@mysql_connect('localhost','root','12345678');//主机，用户名，密码  @容错符号，去掉一些警告。
	if(!$conn){
		die('数据库连接错误'.mysql_error());//die():输出错误，exit()   mysql_error():数据库本身的报错。
	}
	
	//2.选择数据库,设置字符集
	mysql_select_db('js1707',$conn) or die ('选择数据库错误' . mysql_error());
	mysql_query('SET NAMES UTF8');//中文的。
	
	//3.操作数据库（增删改查）
	$name=$_POST['username'];
	$pass=md5($_POST['password']);
	$email=$_POST['email'];
	$query="insert user values(null,'$name','$pass','$email',NOW())";//sql语句
	
	mysql_query($query);//执行sql语句。
	
	mysql_close($conn);
?>