import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"; //基于promise 一个库
class Hello  extends React.Component{
	constructor(props){

		super(props);
		this.state={
			datalist:[]
		}
	}

	componentDidMount(){

		// fetch("http://datainfo.duapp.com/shopdata/getclass.php")
		// .then(res=>res.json())//拿到是状态码， 以及响应头信息。 res.text 返回的是字符串
		// //res.json();返回的就是对象
		// .then(res=>{
		// 	console.log(res);
		// })
		
		//get请求
		axios.get("http://datainfo.duapp.com/shopdata/getclass.php",{
			params:{
				name:"kerwin",
				age:100
			}
		}).then(res=>{
			console.log(res.data);// 我们的数据是在res.data
		})
	}

	render(){
		return <div>
			
			
		</div>
	}
}


ReactDOM.render(<Hello/>,document.getElementById("box"));