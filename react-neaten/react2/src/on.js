import React,{Component} from 'react';

var ReactDOM = require('react-dom');

require('./css/index.css');

require('./css/public.css')
// 1.老写法
// var Hello = React.createClass({
        // getDefaultProps(){   默认属性老写法
        //     return {
                    // name:'',
                    // age:''
        //     }
        // },
//     render(){
//         var name = 'Meiggin'
//         return (
//             <div>
//                 <input ref='username' type='text'/>
//                 <input ref='password' type='password'/>
//                 <button onClick={this.handleClick}>click</button>
//                 <p>{name}</p>
//             </div>
//         )
//     },
//     handleClick(){
//         console.log('1111');
//         console.log(this.refs.password.value)
//         console.log(this.refs.username.value)
//         /*--- 无法直接修改数据，列如：this.name='hahaha'是不行的，需要使用状态 ---*/
//     }
// })

// 2.新写法



class Hello extends Component{
    render(){
        var obj = {
            name:'Meiggin',
            age:100
        }

        return (
            <div>
                <input ref='username' type='text'/>
                <input ref='password' type='password'/>
                 <button onClick={this.handleClick.bind(this)}>click</button>
                 <button onClick={()=>{
                     console.log(this.refs.password)
                 }}>password</button>
                 <p>{obj.name}</p>
                 <HelloChild name={obj.name} age={obj.age} isShow={true}></HelloChild>
                 <HelloChild {...obj} isShow={true}></HelloChild>
                 <HelloChild name='jiangchao' age={100} isShow={false}></HelloChild>
                 <HelloChild></HelloChild>
            </div>
        )
    }
    handleClick(){
        console.log('111')
        console.log(this.refs.username.value)
    }
}

class HelloChild extends Component{
    render(){
        return (
            <div>
                hello Child----------
                {this.props.name}----------
                {this.props.age}
                {
                    this.props.isShow?
                    <div>
                        我是动态创建和隐藏
                    </div>
                    :null
                }
                <div className={this.props.isShow?'show':'hide'}>
                    我是哈哈哈哈哈哈哈哈
                </div>
            </div>
        )
    }
}
HelloChild.defaultProps = {
    name:'张三',
    age:'18'
}    

ReactDOM.render(<Hello/>,document.getElementById('box'))
