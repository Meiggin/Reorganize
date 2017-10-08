//获取页面中的元素
var myplanebox = document.querySelector("div")//游戏界面
var gameScore = document.querySelector("span")//分数

//1.创建我方飞机

function Myplane(w,h,x,y,imgurl,boomurl){
	this.w=w;
	this.h=h;
	this.x=x;
	this.y=y;
	this.imgurl=imgurl;
	this.boomurl=boomurl;
	this.createMyplane();
}
Myplane.prototype.createMyplane=function(){
	this.imgmyplane=document.createElement("img")
	this.imgmyplane.src=this.imgurl;
	this.imgmyplane.style.cssText='width:'+this.w+'px;height:'+this.h+'px;position:absolute;left:'+this.x+'px;top:'+this.y+'px;';
	myplanebox.appendChild(this.imgmyplane)
	this.myplaneMove()
}
//2.跟随鼠标移动，设定边界
Myplane.prototype.myplaneMove = function() {
	var that = this;
	document.onmousemove = function(e) {
		var e = e || window.event;
		//我方飞机的位置
		that.mleft = e.clientX - myplanebox.offsetLfet - that.imgmyplane.offsetWidth / 2;
		that.mtop = e.clientY - myplanebox.offsetTop - that.imgmyplane.offsetHeight / 2;
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

//3.创建我方子弹
var myplane = new Myplane(66,80,(myplanebox.offsetWidth-66)/2,myplanebox.offsetHeight-80,'img/myplane.gif','img/myplaneBoom.gif')










//4.子弹向前运动，到底消失