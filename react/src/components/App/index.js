import React from "react";
import "./index.scss";
import {NavLink} from "react-router-dom";

class App extends React.Component{
	constructor(){
		super();
		this.state={

		}
	}

	render(){
		return <div>
			
			App
			{
				//下面就是子组件加载的位置，
			}
			
			<ul>
				<li>
					<NavLink to="/home" activeClassName="active">主页</NavLink>
				</li>
				<li>
					<NavLink to="/film" activeClassName="active">电影</NavLink>
				</li>
				<li>
					<NavLink to="/card" activeClassName="active">card</NavLink>
				</li>
			</ul>

			{
				this.props.children
			}
		</div>
	}
}

export default App;