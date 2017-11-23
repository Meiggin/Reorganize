import React from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import "./css/index.css";


class TodoList extends React.Component{

  constructor(){
    super();
    this.state={
      list:["111","222"],
      isShow:false
    }
  }

  render(){
    return <div>
      <input type="text" ref="mytext"/>
      <button onClick={this.handleClick.bind(this)}>add</button>
      <ul>
              <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

        {this.state.list.map((item,index)=>
            <li key={item}>
              {item}
              <button onClick={()=>{
                var list = [...this.state.list];
                list.splice(index,1);
                this.setState({
                  list
                })
              }}>del</button>
            </li>
          )}

      </ReactCSSTransitionGroup>

      </ul>
      <SideBar show={this.state.isShow}></SideBar>
    </div>
  }

  handleClick(){
    var list = [...this.state.list,this.refs.mytext.value];
    // this.setState({
    //   list
    // })
    // 
    this.setState({
      isShow:!this.state.isShow
    })
  }

}


class SideBar extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }


  render(){
    return (
        
        <ReactCSSTransitionGroup
          transitionName="kerwin"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

          
            {

              this.props.show?
              <div className="siderbar">aaaa</div>:
              null
            }

          
        </ReactCSSTransitionGroup>
    
  )}
}



ReactDOM.render(<TodoList/>,document.getElementById("box"));