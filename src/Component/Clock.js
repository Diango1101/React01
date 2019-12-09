import React, { Component } from 'react'

class Clock extends Component {
    state = {
        date: new Date(),
    }
    // this.setState(object)
    // this.setState(fn) 函数式可接受之前的state参数  prevstate，属性

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date(),
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return <div>{this.state.date.toLocaleTimeString()}</div>
    }
}

export default Clock
