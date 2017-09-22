<?php
	$city=isset($_GET['city'])?$_GET["city"]:'杭州';
	$infomation=file_get_contents("http://www.sojson.com/open/api/weather/json.shtml?city={$city}");
	echo $infomation;
?>
