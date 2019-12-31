import React, { useContext } from 'react'

// 1.创建上下文
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

export default function ContextTest() {
  return (
    // provider和consumer之间可以无限次嵌套

    <div>
      <Provider value={{ foo: 'bar', coo: 'coo' }}>
        {/* 消费方法1：Consumer */}
        <Consumer>{value => <Child {...value} />}</Consumer>
        {/* 消费方法2：hook */}
        <Child2></Child2>
        {/* 消费方式3：contextType */}
        <Child3></Child3>
      </Provider>
    </div>
  )
}

function Child(prop) {
  return <div>Child:{prop.foo}</div>
}
// 使用hook消费
function Child2() {
  const ctx = useContext(MyContext)
  return <div>Child2:{ctx.coo}</div>
}

// 使用class制定静态contextType
class Child3 extends React.Component {
  static contextType = MyContext
  render() {
    // 这里的this.context是固定的
    return <div>Child3:{this.context.foo}</div>
  }
}
