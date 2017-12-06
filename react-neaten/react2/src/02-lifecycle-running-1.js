import React from "react";
import ReactDOM from "react-dom";


var Hello  =React.createClass({
		

		getDefaultProps:function(){
			console.log("getDefaultProps -1");
			return{
				name:"defaultname"
			}
		},
		getInitialState:function(){
			console.log("getInitialState-2");
			return {name:"kerwin"};
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
					<h1>{this.state.name}</h1>
					<button onClick = {()=>{
						this.setState({
							name:"xiaoming"
						})
					}}>change</button>
				</div>
			)
		},

		componentDidMount:function(){
			console.log("componentDidMount -5-操作真实dom节点");
			
		},

		componentWillReceiveProps:function(){
			//从父组件传值来 才会真正调用
			console.log("componentWillReceiveProps");
		},
		shouldComponentUpdate:function(){
			console.log("shouldComponentUpdate");
			// return true; // 如果是true ，那么render 函数就会被调用

			return true; //告诉组件不需要二次更新了。
		},
		componentWillUpdate:function(){

			console.log("componentWillUpdate");
		},

		componentDidUpdate:function(){
			console.log("componentDidUpdate");
		}
	})


ReactDOM.render(<Hello />,document.getElementById("box"));