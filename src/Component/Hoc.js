import React, { Component } from 'react'
function Courage(props) {
    console.log('courage渲染了')
    return (
        <div>
            {props.stage}-{props.name}
        </div>
    )
}
const withCourage = (Comp) => {
    // 获取name,name可能来自于借口或其他手段
    const name = '高阶组件'
    // return (props) => <Comp {...props} name={name}></Comp>
    return class extends React.Component {
        componentDidMount() {
            console.log('do sth')
        }
        render() {
            return <Comp {...this.props} name={name}></Comp>
        }
    }
}
const withLog = (Comp) => {
    console.log('进行了withlog渲染')
    return (props) => <Comp {...props}></Comp>
}
const NewCourage = withCourage(withLog(Courage))
export default class Hoc extends Component {
    render() {
        return (
            <div>
                <NewCourage stage="React" />
            </div>
        )
    }
}
