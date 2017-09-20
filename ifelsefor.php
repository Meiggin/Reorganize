<?php
	header('content-type:text/html;charset=utf-8');//设置字符编码
	//循环分支语句和js完全一样
/*	$num=10;
	if($num>0){
		echo '正数';
	}else{
		echo '负数';
	}
	
	echo "<hr>";
	$arr=array('zhangsan','lisi','wangwu');
	for($i=0;$i<sizeof($arr);$i++){
		echo $arr[$i].'----';//拼接符号：点(.);
	}*/
	//函数和js完全一样
	/*function cul(){
		$arr=array('zhangsan','lisi','wangwu','tianqi','hehe');
		$html="<ul>";
		for($i=0;$i<count($arr);$i++){
			$html.="<li>$arr[$i]</li>";
		}
		$html.="</ul>";
		return $html;	
	}
	echo cul();*/
	
	/*function ctable($rows=3,$cols=13){
		$html="<table border='1'>";
			for($i=0;$i<$rows;$i++){
				$html.="<tr>";
					for($j=0;$j<$cols;$j++){
						$html.="<td>$i*$j</td>";
					}
				$html.="</tr>";
			}
		$html.="</table>";
		return $html;
	}
	echo ctable(10,20);*/
	
	
	//函数的作用域：函数内部的变量外部无法访问。函数外部的变量内部无法访问;
	/*$num=1000;
	function fn(){
		echo $num;
	}
	fn();//Notice: Undefined variable: num on line 46*/
	
	
	/*function fn(){
		$num=1000;
	}
	fn();
	echo $num;//Notice: Undefined variable: num on line 55*/
	//访问函数内部的变量：全局变量
	/*function fn(){
		global $num;//定义，注意定义和赋值要分开
		$num=1000;
	}
	fn();
	echo $num;//1000*/
	//访问函数内部访问外部的变量:超级全局变量
	$GLOBALS['$num']=100;
	function fn(){
		echo $GLOBALS['$num'];//100
	}
	fn();
?>
