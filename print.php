<?php
/*
php的输出：echo、print、print_r、var_dump
echo、print可以省略括号，用空格加上所需显示的字符串或变量。
 区别是echo没有返回值，print有int类型的返回值。


print_r的功能是打印一个变量的易于理解的信息，与echo和print的区别是，比如输出一个数组，echo和print输出的是Array，而print_r输出的除了Array外，还会把数组里的成员也打印出来。

var_dump和print_r的区别，var_dump列出的是变量的详细信息，而print_r列出的则是易于理解的一些基本信息。*/

//echo print "hello";//返回值

$arr=array('zhangsan','lisi','wangwu');
//echo $arr;//array
//print $arr;//array

//print_r($arr);//打印一个变量的易于理解的信息

//var_dump($arr);//array(3) { [0]=> string(8) "zhangsan" [1]=> string(4) "lisi" [2]=> string(6) "wangwu" }

?>
