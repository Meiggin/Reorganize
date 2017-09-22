<?php
	$fn=isset($_GET['cb'])? $_GET["cb"] : 'fn';
	$data=file_get_contents('http://www.kuitao8.com/api/joke');
	echo $fn.'('.$data.')';
?>
