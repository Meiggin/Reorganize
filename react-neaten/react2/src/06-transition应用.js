import React from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import "./css/index.css";


class Siderbar extends React.Component{

  constructor(props) {
    super(props);
  }

  render(){
    return <div>
            <ReactCSSTransitionGroup
          transitionName="kerwin"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          >    

      {
        this.props.isShow?
        <div className="siderbar">
          我是测边栏
        </div>
        :
        null
      }

       </ReactCSSTransitionGroup>
    </div>
  }
}


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isShow:false
    }
  }

  render(){
    return <div>
      
      <button onClick={()=>{
        this.setState({
          isShow:!this.state.isShow
        })
      }}>
        change
      </button>
      <Siderbar  isShow = {this.state.isShow} direction="left"/>
    </div>
  }
}


ReactDOM.render(<TodoList/>,document.getElementById("box"));