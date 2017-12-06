import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./css/index.css');

// require('./css/public.css')
//-------------------------------改变姓名和num--------------------------
class Hello extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Meiggin',
            count: 1
        }//定义初始状态值
    }
    render() {
        console.log('render')
        {/* var name = 'j' */ }

        return (
            <div>
                {/* 赋予状态值 */}
                <p>hello-{this.state.name}</p>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick.bind(this)}>click</button>
            </div>
        )
    }
    handleClick() {
        console.log('click');

        // 1.改变状态值  异步
        /* this.setState({
            name:'jiangchao',
            count:this.state.count+1
        }) */

        //2.prevState可以拿到最近一次状态的值
        /* this.setState((prevState,props)=>({
            count:prevState.count+1
        }))//(￣︶￣)> <(￣︶￣)/ (‵﹏′) ╮(‵▽′)╭ 
        this.setState((prevState,props)=>({
            count:prevState.count+1
        }))
        this.setState((prevState,props)=>({
            count:prevState.count+1
        })) */

        console.log(this.state.name)
    }
}

//-------------------------遍历  改变颜色-----------------------------

class Color extends Component{
    constructor(){
        super();
        this.state={
            list:['1111','2222','3333','4444','5555'],
            current:0
        }
    }
    render(){
        return (
            <div>
                <ul>
                    {/* 遍历 */}
                    {this.state.list.map((item,index)=>
                        <li key={item} className={this.state.current==index?'active':''} onClick={this.handleClick.bind(this,index)}>{item}</li>
                    )}
                </ul>
            </div>
            
        )
        
    }
    handleClick(index){
        console.log(index)
        this.setState({
            current:index
        })
    }
}
//-------------------------todolist-----------------------------
class Todolist extends Component {
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    render() {
        return (
            <div>
                <input ref='mytext'/>
                <button onClick={this.handleClick.bind(this)}>add</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>
                            <li key={item}>{item}
                                <button onClick={this.handleDelClick.bind(this,index)}>del</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
    handleClick(){
        console.log(this.refs.mytext.value)
        this.setState({
            list:[...this.state.list,this.refs.mytext.value]
        })
    }
    handleDelClick(index){
        console.log(index)
        // this.state.list.splice(index,1);
        let mylist = [...this.state.list];
        mylist.splice(index,1)
        this.setState({
            list:mylist
        })
    }
}

ReactDOM.render(<Todolist/>, document.getElementById('box'))