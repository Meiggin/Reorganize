/*
    1.组件首字母是大写，会被认为是自定义组件，首字母是小写，会被认为是原生dom节点。

    2.组件最外层需要被一个标签包裹，不能有兄弟节点

    3.return （加上小括号，可以缩进）

    4.组件可以嵌套。
*/

// 1.jsx
var ReactDom = require('react-dom');
var React = require('react');
// 引入
require('./css/public.css')
require('./css/index.css')
function test() {
    return '我是函数返回'
}
var name = 'Meiggin'
/* ReactDom.render(
    <div>
        <ul>
            <li>{10+20}</li>
            <li>{10>20?'真':'假'}</li>
            <li>{test()}</li>
            <li>{name+'12345'+'age'}</li>
        </ul>
    </div>,document.getElementById("box")
) */
var HelloChild = React.createClass({
    render(){
        return (
            <div>
                hello child
            </div>
        )
    }
})
var Hello = React.createClass({
    render() {
        var mystyle = {
            background:"#ff0",
            fontSize:'30px'
        }

        var myhtml = '<b>11111</b>'

        return (
            /* 样式两种方式：1.加class  htmlfor classname
                        2.行内 */
            <div className='myclass'>
                <ul className={10>20?'':'active'}>
                    <li>{10 + 20}</li>
                    <li>{10 > 20 ? '真' : '假'}</li>
                    <li>{test()}</li>
                    <li>{name + '12345' + 'age'}</li>
                    <li dangerouslySetInnerHTML={{__html:myhtml}}></li>
                </ul>
                <HelloChild></HelloChild>
                <div style={mystyle}>all for one</div>
            </div>
        )
    }
})

ReactDom.render(<Hello/>,document.getElementById('box'))