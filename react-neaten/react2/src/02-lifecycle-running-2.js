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
			console.log("componentWillReceiveProps",props);
		},
		shouldComponentUpdate:function(props){
			
			console.log("shouldComponentUpdate",props);
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
					}}>change</button>
				<Hello name={this.state.name}></Hello>
		</div>
	}
})


ReactDOM.render(<HelloParent />,document.getElementById("box"));