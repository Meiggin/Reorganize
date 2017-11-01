const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

//只要客户端连接 ，下面的这个事件回调函数就会触发
wss.on("connection",function(ws){

	ws.send("欢迎来到聊天室");

	//客户端发消息在这里收到
	ws.on("message",function(msg){
		console.log(msg);
		//遍历所有连接上客户端， 把消息发送给他们
		wss.clients.forEach((client) => {
		  // Todo...
		  if(ws !=client){ //不给自己发信息
		  	client.send(msg);
		  }
		  
		})
	})
})
