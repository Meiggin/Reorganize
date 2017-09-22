
//ajax
function datastr(dataobj){
	var arr=[];
	for(var attr in dataobj){
		arr.push(attr+'='+dataobj[attr]);
	}
	return arr.join('&');
}

function ajax(obj){
	obj.type=obj.type || 'get'
	
	if(typeof obj.data!='string'){
		obj.data=datastr(obj.data);
	}else{
		obj.data=obj.data|| '';
	}
	var ajax=null;
	try{
		ajax=new XMLHttpRequest();
	}catch(e){
		ajax=new ActiveXObject('Microsoft.XMLHTTP');
	}
	if(obj.type=='get' && obj.data){
		obj.url+='?'+obj.data;
	}
	
	ajax.open(obj.type,obj.url,true);
	
	if(obj.type=='get'){
		ajax.send();
	}else{
		ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
		ajax.send(obj.data);
	}
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4){
			if(ajax.status==200){
				obj.success&&obj.success(ajax.responseText);
			}else{
				obj.error&&obj.error(ajax.status);
			}
		}
	}
}
