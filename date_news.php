<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<script type="text/javascript">
			//http://127.0.0.1/js1707/Day%2021/date.php  
			//ajax：异步的javascript和xml
			
			/*function getmain(){
				var ajax=new XMLHttpRequest();
				ajax.open('get','http://127.0.0.1/js1707/Day%2021/date.php',true);
				ajax.send();
				ajax.onreadystatechange=function(){
					if(ajax.readyState==4){
						//ajax.reponseText:接口返回的数据
						//alert(ajax.responseText);//string   JSON.parse()
						var arr=JSON.parse(ajax.responseText);
						
						var html='<ul>';
						for(var i=0;i<arr.length;i++){
							html+='<li>'+arr[i].title+'</li>';
						}
						html+='</ul>';
						document.body.innerHTML=html;
					}
				}
			}
			getmain();
			setInterval(getmain,1000);*/
			
			var ajax=new XMLHttpRequest();
				ajax.open('get','http://127.0.0.1/js1707/Day%2021/huanyouji/index.html',true);
				ajax.send();
				ajax.onreadystatechange=function(){
					if(ajax.readyState==4){
						//ajax.reponseText:接口返回的数据
						//alert(ajax.responseText);
						document.body.innerHTML=ajax.responseText;
					}
				}
			
		</script>
	</body>
</html>
