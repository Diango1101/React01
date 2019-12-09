import React, { Component } from 'react'

// Dialog作为容器不关心内容和逻辑
function Dialog(props) {
    return (
        <div style={{ border: `4px solid ${props.color || 'blue'}` }}>
            {/* children是固定名称   是非具名插槽  children可以使任意的js表达式*/}
            {props.children}
            <div className="footer">{props.footer}</div>
        </div>
    )
}
// WelcomeDialog通过复合提供内容
function WelcomeDialog(props) {
    return (
        <Dialog {...props}>
            <h1>欢迎光临</h1>
            <p>感谢使用reeact</p>
        </Dialog>
    )
}
const Api = {
    getUser() {
        return { name: 'diango', age: 22 }
    },
}
function Fetcher(props) {
    const user = Api[props.name]()
    return props.children(user)
}
// 过滤器，可以过滤出制定标签类型
function Filter({ children, type }) {
    return (
        <div>
            {React.Children.map(children, (child) => {
                if (child.type !== type) {
                    return
                }
                return child
            })}
        </div>
    )
}

// 修改children
function RadioGroup(props) {
    console.log(
        React.Children.map(props.children, (child) => {
            // vdom不可更改，克隆一个新的去改才行
            // child.props.name = props.name
            return React.cloneElement(child, { name: props.name })
        })
    )
    return (
        <div id="radiogroup">
            {React.Children.map(props.children, (child) => {
                // vdom不可更改，克隆一个新的去改才行
                // child.props.name = props.name
                return React.cloneElement(child, { name: props.name })
            })}
        </div>
    )
}
function Radio({ children, ...rest }) {
    return (
        <label htmlFor="">
            <input type="radio" {...rest} />
            {children}
        </label>
    )
}
export default function() {
    const footer = <button onClick={() => alert('已提交')}>submit</button>
    // return <WelcomeDialog color="green" footer={footer}></WelcomeDialog>
    // 作用于插槽
    // return (
    //     <div>
    //         <Fetcher name="getUser">
    //             {({ name, age }) => (
    //                 <p>
    //                     {name}-{age}
    //                 </p>
    //             )}
    //         </Fetcher>
    //     </div>
    // )
    // 过滤器，可以过滤出制定标签类型
    // return (
    //     <div>
    //         <Filter type="h1">
    //             <h1>React</h1>
    //             <p>lllllll</p>
    //             <h1>vue</h1>
    //             <p>45615</p>
    //         </Filter>
    //     </div>
    // )
    // 修改children
    return (
        <div>
            <RadioGroup name="mvvm">
                <Radio value="vue">vue</Radio>
                <Radio value="react">react</Radio>
                <Radio value="angular">Angular</Radio>
            </RadioGroup>
        </div>
    )
}
