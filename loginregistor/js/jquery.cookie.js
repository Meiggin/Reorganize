//添加cookie的函数
		function addCookie(key,value,day){
			var date=new Date();//创建日期对象
			date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
			document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
		}
//得到cookie
		function getCookie(key){
			var str=decodeURI(document.cookie);
			var arr=str.split('; ');
			for(var i=0;i<arr.length;i++){
				var arr1=arr[i].split('=');
 				if(arr1[0]==key){
					return arr1[1];
				}
			}
		}
//删除cookie
		
		function delCookie(key,value){
			addCookie(key,value,-1);//添加的函数,将时间设置为过去时间
		}