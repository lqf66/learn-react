/*
 * @Author: Lqf
 * @Date: 2021-10-31 20:14:51
 * @LastEditors: Lqf
 * @LastEditTime: 2021-11-04 23:12:25
 * @Description: 我添加了修改
 */

import { useState, useEffect, useRef } from 'react'

function Child (props) {
  const [count, setCount] = useState(0)
  const [nub, setNub] = useState(5)
  const isMount = useRef(false)

  useEffect(() => {
    console.log('effect-1')
    return () => {
      console.log('cleanup-1')
    }
  }, [count])
  useEffect(() => {
    console.log('effect-2')
    return () => {
      console.log('cleanup-2')
    }
  }, [nub])

  useEffect(() => {
    console.log('挂载完成及更新完成')
  })
  useEffect(() => {
    if (isMount.current) {
      console.log('组件更新完成')
    } else {
      isMount.current = true
    }
  })
  useEffect(() => {
    console.log('挂载完成')
    return () => {
      console.log('组件即将卸载')
    }
  }, [])
  return <div>
    <p>{count}</p>
    <button onClick={() => { setCount(count + 1) }}>Add Count</button>
    <p>{nub}</p>
    <button onClick={() => { setNub(nub + 1) }}>Add Nub</button>
  </div>
}

export default Child