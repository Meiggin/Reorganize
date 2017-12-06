import React,{Component} from 'react';
import ReactDOM from 'react-dom';


// 1.父传子
class Hello extends Component{
    constructor(){
        super();
        this.state={
            name:'jiangchao'
        }
    }
    render(){
        return (
            <div>
                hello
                <HelloChild myname={this.state.name}/>
                <button onClick={()=>{
                    this.setState({
                        name:'xiaoming'
                    })
                }}>click</button>
            </div>
        )
    }
}
class HelloChild extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return (
            <div>
                hellochild
                <p>来自父组件---{this.props.myname}</p>
            </div>
        )
    }
}

// 2.子传父亲

class Father extends Component{
    constructor(){
        super();
        this.state={
            name:''
        }
    }
    render(){
        return (
            <div>
                Father
                <p>来自子组件---{this.state.name}</p>
                <Child myevent={this.handleClick.bind(this)}/>
                
            </div>
        )
    }
    handleClick(myvalue){
        console.log(myvalue)
        this.setState({
            name:myvalue
        })
    }
}
class Child extends Component{
    constructor(){
        super();
        this.state={
            name:'jiangchao'
        }
    }
    render(){
        return (
            <div>
                Child
                <button onClick={()=>{
                    // this.setState({
                    //     name:'xiaoming'
                    // })
                    // console.log(this.props.myevent)
                    this.props.myevent('xiaoming')
                }}>click</button>
                

            </div>
        )
    }
}
ReactDOM.render(<Father/>,document.getElementById('box'))