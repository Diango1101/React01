import React, { useState, useEffect } from 'react'
// 自定义hook是一个函数，名称以‘use’开头，函数内部可以调用其他钩子
function useAge() {
  const [age, setAge] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setAge(20)
    }, 1000)
  })
  return age
}

export default function HookTest() {
  // useState(initState)
  const [count, setCount] = useState(0)

  // 副作用钩子会在每次渲染时执行
  // 第二个参数为依赖，只有依赖变，才会执行
  useEffect(() => {
    document.title = `您点击了${count}次`
  }, [count])

  // 如果仅打算执行一次，传递第二个参数为[]，类似componentdidmount
  useEffect(() => {
    // api调用 ajax
    console.log('api调用')
  }, [])

  // 多个状态
  // const [age] = useState(20)
  const age = useAge()
  const [fruit, setFruit] = useState('banana')
  const [input, setInput] = useState('')
  const [fruits, setFruits] = useState(['apple', 'banana'])
  return (
    <div>
      <div>
        <p>点击了{count}次</p>
        <button onClick={() => setCount(count + 1)}>点击</button>

        <p>年龄{age ? age : 'loading'}</p>
        <p>选择的水果{fruit}</p>
        <p>
          <input type="text" value={input} onChange={e => setInput(e.target.value)} />
          <button onClick={() => setFruits([...fruits, input])}>新增水果</button>
        </p>
        <ul>
          {fruits.map(f => (
            <li key={f} onClick={() => setFruit(f)}>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
