;(function(){
	function Dialog(options){//options:配置参数
		this.settings={//默认参数
			width:300,
			height:300,
			title:'请输入标题'
		};
		this.init(options);
	}
	var num=1;
	Dialog.prototype.bstop={};
	/*
	 bstop={
	 	1:true,
	 	2:true,
	 	3:true,
	 }
	*/
	Dialog.prototype.init=function(options){//初始化。
		extend(this.settings,options);
		if(this.bstop[this.settings.sort]==undefined){//第一次   单体模式
			this.bstop[this.settings.sort]=true;//第一次没有值，传一个ture;
		}
		if(this.bstop[this.settings.sort]){
			this.createdialog();
			this.closed();
			this.drag1();
			if(this.settings.drag){//设置drag为true才能对盒子进行拖拽
				this.drag();
			}
			if(this.settings.mask){
				if(!document.querySelector('.mask')){
					this.mask();
				}
				
			}
			this.bstop[this.settings.sort]=false;//无法创建，等到关闭后，开关开启，方可调用
		}
	}
	Dialog.prototype.createdialog=function(){//创建弹窗
		this.dialog=document.createElement('div');
		this.dialog.className='dialog';
		this.dialog.style.width=this.settings.width+'px';
		this.dialog.style.height=this.settings.height+'px';
		if(this.settings.direction=='center'){//参数进行判断
			this.dialog.style.left=(document.documentElement.clientWidth-this.settings.width)/2+'px';
			this.dialog.style.top=(document.documentElement.clientHeight-this.settings.height)/2+'px';
		}else if(this.settings.direction=='rightbottom'){
			this.dialog.style.left=(document.documentElement.clientWidth-this.settings.width)-2+'px';
			this.dialog.style.top=(document.documentElement.clientHeight-this.settings.height)-2+'px';
		}else{
			this.dialog.style.left=this.settings.left+'px';
			this.dialog.style.top=this.settings.top+'px';
		}
		this.dialog.innerHTML='<div class="title"><span>'+this.settings.title+'</span><a href="javascript:void(0)">X</a></div><div class="content"><span></span></div>';
		document.body.appendChild(this.dialog);
	}
	Dialog.prototype.closed=function(){
		var that=this;
		var close=this.dialog.getElementsByTagName('a')[0];
		close.onmousedown=function(ev){
			var ev=ev||window.event;
			ev.stopPropagation();//取消冒泡
			document.body.removeChild(that.dialog);
			if(that.settings.mask){
				that.mask.style.display='none';
			}
			that.bstop[that.settings.sort]=true;//新建的盒子删除了，再创建。
		}
		
	}
	
	Dialog.prototype.drag=function(){
		var that=this;
		var title=this.dialog.querySelector('.title');
		var shortx=null;
		var shorty=null;
		title.onmousedown=function(ev){
			that.dialog.style.zIndex=++num;//改变dialog z-index的属性值
			var ev=ev||window.event;
			shortx=ev.offsetX;
			shorty=ev.offsetY;
			document.onmousemove=function(ev){
				var ev=ev||window.event;
				var x=ev.clientX-shortx;
				var y=ev.clientY-shorty;
				if(that.settings.limit){
					if(x<0){
						x=0;
					}else if(x>=document.documentElement.clientWidth-that.dialog.offsetWidth){
						x=document.documentElement.clientWidth-that.dialog.offsetWidth-2;
					}
				}
				that.dialog.style.left=x+'px';
				that.dialog.style.top=y+'px';
			};
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
			};
			return false;
		}
	};
	
	Dialog.prototype.drag1=function(){
		var that=this;
		var title1=this.dialog.querySelectorAll('span')[1];
		var shortx=null;
		var shorty=null;
		title1.onmousedown=function(ev){
			that.dialog.style.zIndex=++num;//改变dialog z-index的属性值
			var ev=ev||window.event;
			shortx=ev.offsetX;
			shorty=ev.offsetY;
			document.onmousemove=function(ev){
				var ev=ev||window.event;
				var x=ev.clientX-shortx-that.dialog.offsetLeft;
				var y=ev.clientY-shorty-that.dialog.offsetTop;
				title1.style.left=x+'px';
				title1.style.top=y+'px';
				that.dialog.style.width=x+50+'px';
				that.dialog.style.height=y+50+'px';
			};
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
			};
			return false;
		}
	};
	
	Dialog.prototype.mask=function(){
		this.mask=document.createElement('div');
		this.mask.className='mask';
		this.mask.style.width='100%';
		this.mask.style.height='100%';
		this.mask.style.backgroundColor='rgba(0,0,0,0.8)';
		this.mask.style.position='absolute';
		this.mask.style.left='0';
		this.mask.style.top='0';
		document.body.appendChild(this.mask);
	}
	
	function extend(obj1,obj2){//obj1:默认  obj2:配置
		for(var i in obj2){
			obj1[i]=obj2[i];
		}
	}
	
	
	window.Dialog=Dialog;
})();


