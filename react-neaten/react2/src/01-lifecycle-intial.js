// var React  = require("react");
// var ReactDOM = require("react-dom");
// var Hello  =React.createClass({
		

// 		getDefaultProps:function(){
// 			console.log("getDefaultProps -1");
// 			return{
// 				name:"defaultname"
// 			}
// 		},
// 		getInitialState:function(){
// 			console.log("getInitialState-2");
// 			return {name:"kerwin"};
// 		},

// 		componentWillMount:function(){
// 			console.log("componentWillMount-3-ajax请求-打印日志等操作");
			
// 			//此时可以操作状态了。
// 			//this.setState({name:"kerwin is modified"});
// 		},

// 		render:function(){
// 			console.log("render-4");
// 			return (
// 				<div id="kerwin">
// 					<h1>{this.props.name}</h1>
// 					<h1>{this.state.name}</h1>
// 				</div>
// 			)
// 		},

// 		componentDidMount:function(){
// 			console.log("componentDidMount -5-操作真实dom节点");
			
// 		}
// 	})

import React ,{Component} from "react";
import ReactDOM from "react-dom";


class Hello extends Component{
	constructor(){
		super();
		this.state={
			name:'Meiggin'
		}
	}
	componentWillMount(){
		console.log('componentWillMount')
	}

	componentWillUpdate(){
		console.log('componentWillUpdate')
	}
	render(){
		console.log('render')
		return (
			<div>
				hello----{this.state.name}
				<button onClick={()=>{
					this.setState({
						name:'jiangchao'
					})
				}}>add</button>
			</div>
		)
	}
	componentDidMount(){
		console.log('componentDidMount')
	}
	componentDidUpdate(){
		console.log('componentDidUpdate')
	}
}
ReactDOM.render(<Hello/>,document.getElementById("box"));