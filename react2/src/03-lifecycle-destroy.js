import React from "react";
import ReactDOM from "react-dom";



var Hello  =React.createClass({
		

		getDefaultProps:function(){
			console.log("getDefaultProps -1");
			return{
				name:"defaultname-child"
			}
		},
		getInitialState:function(){
			console.log("getInitialState-2");
			return {};
		},

		componentWillMount:function(){
			console.log("componentWillMount-3-ajax请求-打印日志等操作");
			
			//此时可以操作状态了。
			//this.setState({name:"kerwin is modified"});
		},

		render:function(){
			console.log("render-4");
			return (
				<div id="kerwin">
					<h1>{this.props.name}</h1>
				</div>
			)
		},

		componentDidMount:function(){
			console.log("componentDidMount -5-操作真实dom节点");
			
		},

		componentWillReceiveProps:function(props){
			
			//从父组件传值来 才会真正调用
			console.log("componentWillReceiveProps");
		},
		shouldComponentUpdate:function(props){
			
			console.log("shouldComponentUpdate");
			// return true; // 如果是true ，那么render 函数就会被调用

			return true; //告诉组件不需要二次更新了。
		},
		componentWillUpdate:function(){

			console.log("componentWillUpdate");
		},

		componentDidUpdate:function(){
			console.log("componentDidUpdate");
		},

		componentWillUnmount:function(){
			console.log("componentWillUnmount-子组件销毁");

			//清除定时器， 解绑事件监听器等...
		}

	})

var HelloParent = React.createClass({
	getInitialState:function(){
			return {name:"kerwin"};
	},
	
	render:function(){
		return <div>
				<button onClick = {()=>{
						this.setState({
							name:"xiaoming"
						})
					}}>change xiaoming</button>
				<button onClick = {()=>{
						this.setState({
							name:"kerwin"
						})
					}}>change kerwin</button>
				{
					this.state.name=="kerwin"?
					<Hello name={this.state.name}></Hello>
					:
					null
				}
				
		</div>
	},

	componentWillUnmount:function(){
			console.log("componentWillUnmount-父组件销毁");

			//清除定时器， 解绑事件监听器等...
	}
})


ReactDOM.render(<HelloParent />,document.getElementById("box"));

/*
	    在删除组件之前进行清理操作，比如计时器和事件监听器
		被卸载后， 下一次又是重新创建这个组件
	
		(1) 可以在render 进行不同return， 实现对子组件的卸载
		(2)ReactDOM.unmountComponentAtNode(document.getElementById('box'));
			//这个方法想要卸载成功， 前提这个节点必须被ReactDom.render处理过
	*/