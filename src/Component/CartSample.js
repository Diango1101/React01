import React, { Component } from 'react'
import Card from './Card'

class CartSample extends Component {
    // 状态初始化一般放在构造器中
    constructor(props) {
        super(props)
        this.state = {
            goods: [
                { id: 1, name: 'spboot' },
                { id: 2, name: 'pcharm' },
            ],
            text: '',
            cart: [],
        }
        //  解决addgoodthis绑定错误，或者采用textchange这种箭头函数也可解决this问题
        this.addGood = this.addGood.bind(this)
    }
    // 回调函数声明为箭头函数
    textChange = (e) => {
        this.setState({ text: e.target.value })
        console.log(this.state.text)
    }
    addGood() {
        this.setState((prevState) => {
            return {
                goods: [
                    ...prevState.goods,
                    {
                        id: prevState.goods.length + 1,
                        name: prevState.text,
                    },
                ],
            }
        })
    }
    addToCart = (good) => {
        // 创建新购物车
        const newCart = [...this.state.cart]
        const idx = newCart.findIndex((c) => c.id === good.id)
        const item = newCart[idx]
        if (item) {
            newCart.splice(idx, 1, { ...item, count: item.count + 1 })
        } else {
            newCart.push({ ...good, count: 1 })
        }
        // 更新
        this.setState({ cart: newCart })
    }
    // 处理购物车数量更新
    minus = (good) => {
        // 创建新购物车
        const newCart = [...this.state.cart]
        const idx = newCart.findIndex((c) => c.id === good.id)
        const item = newCart[idx]
        newCart.splice(idx, 1, { ...item, count: item.count - 1 })

        // 更新
        this.setState({ cart: newCart })
    }
    add = (good) => {
        // 创建新购物车
        const newCart = [...this.state.cart]
        const idx = newCart.findIndex((c) => c.id === good.id)
        const item = newCart[idx]
        newCart.splice(idx, 1, { ...item, count: item.count + 1 })

        // 更新
        this.setState({ cart: newCart })
    }
    render() {
        const title = this.props.title ? <h1>{this.props.title}</h1> : null
        return (
            <div>
                {/* 条件渲染 */}
                {title}
                {/* 列表渲染 */}
                <div>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.textChange}
                    />
                    <button onClick={this.addGood}>add goods</button>
                </div>
                <ul>
                    {this.state.goods.map((good) => (
                        <li key={good.id}>
                            {good.name}
                            <button onClick={() => this.addToCart(good)}>
                                add to cart
                            </button>
                        </li>
                    ))}
                </ul>

                <Card
                    data={this.state.cart}
                    minus={this.minus}
                    add={this.add}
                ></Card>
            </div>
        )
    }
}

export default CartSample
