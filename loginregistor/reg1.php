<?php
	header('content-type:text/html;charset=utf-8');
	require "conn1.php";//引入公用部分的数据库连接文件。
	
	//验证匹配文件不能直接预览。
	if(isset($_POST['name'])|| isset($_POST['submit'])){//判断用户名存在
		$name=@$_POST['name'];//防止报错
	}else{
		exit('非法登录');
	}
	
	$query="select * from user where username='$name'";
	$result=mysql_query($query);//如果用户名存在，有记录集存在。
	
	if(mysql_fetch_array($result)){
		echo true;//有重复
	}else{
		echo false;//没有重复
	}
	
	if(isset($_POST['submit'])&& $_POST['submit']=='注册'){//是否点击注册按钮
		$name=$_POST['username'];//username:表单的名称
		$pass=md5($_POST['password']);
		$email=$_POST['email'];
		
		$query="insert user values(null,'$name','$pass','$email',NOW())";
		mysql_query($query);
		header('location:login.html');//跳转到登录页面
	}
	
	
?>