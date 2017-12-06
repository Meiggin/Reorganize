import React from "react"
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import App from "../components/App";
import Home from "../components/Home";
import Card from "../components/Card";
import Film from "../components/Film";
import Nowplaying from "../components/Film/Nowplaying";
import Comingsoon from "../components/Film/Comingsoon";


/*
	Vue:
	mode :history    /home 
	mode : hash      #/home

	React :

	BrowserRouter   /home
	HashRouter     #/home
 */

const router = (
	<Router>		
		<App>
			 <Switch>
			 	{
			 		//switch 只加载匹配路径的第一个孩子
			 	}
				<Route path="/home" component={Home}/>
				<Route path="/card" component={Card}/>
				<Route path="/film" render={()=>

					<Film>
						<Switch>
							<Route path="/film/nowplaying" component={Nowplaying}/>
							<Route path="/film/comingsoon" component={Comingsoon}/>
							<Redirect from="/film" to="/film/nowplaying"/>
						</Switch>
					</Film>
				}/>

				<Redirect from="*" to="/home"/>
			</Switch>
		</App>
	</Router>
)


export default router;
