//获取页面中的元素
var myplanebox=document.getElementById('plane');//游戏界面
var gameScore=document.getElementsByTagName('strong')[0];//游戏分数
var totalScore=0;

//创建我方飞机。
//1.我方飞机构造函数
function Myplane(w,h,x,y,imgurl,boomurl){
	this.w=w;
	this.h=h;
	this.x=x;
	this.y=y;
	this.imgurl=imgurl;
	this.boomurl=boomurl;
	this.createMyplane();
}
//创建我方飞机
Myplane.prototype.createMyplane=function(){
	this.imgmyplane=document.createElement('img');
	this.imgmyplane.src=this.imgurl;
	this.imgmyplane.style.cssText='width:'+this.w+'px;height:'+this.h+'px;position:absolute;left:'+this.x+'px;top:'+this.y+'px;';
	myplanebox.appendChild(this.imgmyplane);
	this.myplaneMove();
	this.myplaneshoot();
};
//我方飞机运动
Myplane.prototype.myplaneMove=function(){
	var that=this;
	document.onmousemove=function(ev){
		var ev=ev||window.event;
		//我方飞机的位置
		that.mleft=ev.clientX-myplanebox.offsetLeft-that.imgmyplane.offsetWidth/2;
		that.mtop=ev.clientY-myplanebox.offsetTop-that.imgmyplane.offsetHeight/2;
		//限制范围。
		if(that.mleft<0){
			that.mleft=0;
		}else if(that.mleft>=myplanebox.offsetWidth-that.imgmyplane.offsetWidth){
			that.mleft=myplanebox.offsetWidth-that.imgmyplane.offsetWidth;
		}
		
		if(that.mtop<0){
			that.mtop=0;
		}else if(that.mtop>=myplanebox.offsetHeight-that.imgmyplane.offsetHeight){
			that.mtop=myplanebox.offsetHeight-that.imgmyplane.offsetHeight;
		}
		
		that.imgmyplane.style.left=that.mleft+'px';
		that.imgmyplane.style.top=that.mtop+'px';
		return false;
	}
};
//我方飞机发射子弹
Myplane.prototype.myplaneshoot=function(){
	var that=this;
	document.onmousedown=function(ev){//鼠标按下发射子弹。
		var ev=ev||window.event;
		if(ev.which==1){
			shootbullet();
			function shootbullet(){
				new Bullet(6,14,that.imgmyplane.offsetLeft+that.imgmyplane.offsetWidth/2-3,that.imgmyplane.offsetTop-14,'img/bullet.png');
			}
			that.shoottimer=setInterval(shootbullet,400);
			
		}
	}
	document.onmouseup=function(){//松开鼠标停止发射子弹
		clearInterval(that.shoottimer);
	}
	document.oncontextmenu=function(){//禁用鼠标右键
		return false;
	}
}




//子弹的构造函数
function Bullet(w,h,x,y,imgurl){
	this.w=w;
	this.h=h;
	this.x=x;
	this.y=y;
	this.imgurl=imgurl;
	this.createBullet();
}
//创建子弹
Bullet.prototype.createBullet=function(){
	this.imgbullet=document.createElement('img');
	this.imgbullet.src=this.imgurl;
	this.imgbullet.style.cssText='width:'+this.w+'px;height:'+this.h+'px;position:absolute;left:'+this.x+'px;top:'+this.y+'px;';
	myplanebox.appendChild(this.imgbullet);
	this.bulletMove();
}
//子弹移动
Bullet.prototype.bulletMove=function(){
	var that=this;
	this.bullettimer=setInterval(function(){
		that.y-=5;
		if(that.y<=-that.h){
			clearInterval(that.bullettimer);
			myplanebox.removeChild(that.imgbullet);
		}
		that.imgbullet.style.top=that.y+'px';
		that.bulletHit();
	},20);
}
//子弹和飞机碰撞检测
Bullet.prototype.bulletHit=function(){
	var enemys=document.querySelectorAll('.enemy');
	for(var i=0;i<enemys.length;i++){
		if((this.x+this.w)>=enemys[i].offsetLeft && this.x<=(enemys[i].offsetLeft+enemys[i].offsetWidth) && (this.y+this.h)>=enemys[i].offsetTop && this.y<=(enemys[i].offsetTop+enemys[i].offsetHeight)){
			clearInterval(this.bullettimer);//子弹停止运动
			try{//容错：一个子弹碰两个飞机
				myplanebox.removeChild(this.imgbullet);
			}catch(e){
				return;
			}
			enemys[i].blood--;//血量减少
			enemys[i].checked();//检测血量
			
		}
	}
}



//敌机的构造函数
function Enemy(w,h,x,y,imgurl,boomurl,speed,blood,score){
	this.w=w;
	this.h=h;
	this.x=x;
	this.y=y;
	this.imgurl=imgurl;
	this.boomurl=boomurl;
	this.speed=speed;
	this.blood=blood;
	this.score=score;
	this.createEnemy();
}



//创建敌机
Enemy.prototype.createEnemy=function(){
	var that=this;
	this.imgenemy=document.createElement('img');
	this.imgenemy.src=this.imgurl;
	this.imgenemy.style.cssText='width:'+this.w+'px;height:'+this.h+'px;position:absolute;left:'+this.x+'px;top:'+this.y+'px;';
	this.imgenemy.className='enemy';//给每架敌机添加一个类，方便后面获取
	myplanebox.appendChild(this.imgenemy);
	this.imgenemy.blood=this.blood;//敌机添加血量属性。
	this.imgenemy.score=this.score;
	this.imgenemy.checked=function(){//this:代表敌机
		if(this.blood<=0){
			this.className='';//类名清空
			clearInterval(that.imgenemy.timer);//敌机运动的定时器
			this.src=that.boomurl;//替换图片
			setTimeout(function(){//消失延迟500毫秒
				myplanebox.removeChild(that.imgenemy);
			},500);
			totalScore+=this.score;
			gameScore.innerHTML=totalScore;
		}
	}
	this.enemyMove();
}
Enemy.prototype.enemyMove=function(){
	var that=this;
	this.imgenemy.timer=setInterval(function(){
		that.y+=that.speed;//敌机速度
		if(that.y>=myplanebox.offsetHeight){
			clearInterval(that.imgenemy.timer);
			myplanebox.removeChild(that.imgenemy);
		}
		that.imgenemy.style.top=that.y+'px';
		that.enemyHit();
	},20)
}

Enemy.prototype.enemyHit=function(){
	if((this.x+this.w)>=ourplane.mleft && this.x<=(ourplane.mleft+ourplane.w) && (this.y+this.h)>=ourplane.mtop && this.y<=(ourplane.mtop+ourplane.h)){
		var enemys=document.querySelectorAll('.enemy');
		for(var i=0;i<enemys.length;i++){
			clearInterval(enemys[i].timer);
		}
		clearInterval(enemttimer);
		document.onmousemove=null;
		document.onmousedown=null;
		ourplane.imgmyplane.src=ourplane.boomurl;
		setTimeout(function(){
			alert('game over!!');
			window.location.reload();//刷新。
		},1000);
	}
}


var enemttimer=setInterval(function(){
	for(var i=0;i<ranNum(1,5);i++){
		var num=ranNum(1,20);
		if(num<15){
			new Enemy(34,24,ranNum(0,myplanebox.offsetWidth-34),-24,'img/smallplane.png','img/smallplaneboom.gif',ranNum(1,3),1,1);
		}else if(num>=15 && num<20){
			new Enemy(46,60,ranNum(0,myplanebox.offsetWidth-46),-60,'img/midplane.png','img/midplaneboom.gif',ranNum(1,2),3,3);
		}else if(num==20){
			new Enemy(110,164,ranNum(0,myplanebox.offsetWidth-110),-164,'img/bigplane.png','img/bigplaneboom.gif',ranNum(1,1),10,10);
		}
	}
},1000);


var ourplane=new Myplane(66,80,(myplanebox.offsetWidth-66)/2,myplanebox.offsetHeight-80,'img/myplane.gif','img/myplaneBoom.gif');

function ranNum(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}
