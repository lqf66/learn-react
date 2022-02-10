/*
 * @Author: Lqf
 * @Date: 2021-10-31 19:50:35
 * @LastEditors: Lqf
 * @LastEditTime: 2021-11-05 18:55:58
 * @Description: 我添加了修改
 */

/**
 * useState
 *    const [state, setState] = useState(initialState);
 *    useState 不会进行浅合并
 *    setState(newState) newState不接受函数
 * 
 * useEffect -- 数据请求,DOM操作,类似于vue的watch
 *    useEffect(() => {
 *      effect: 副作用函数
 *       return () => { cleanup 函数}
 *    }, [input]) input: 依赖参数
 *  挂载阶段: 从上到下执行,碰到useEffect将其effect存入一个队列中,挂载结束后依次执行队列,并获取cleanup函数存储到一个新队列
 *  更新阶段: 更新阶段观察参数有无变化,如果有,从上到下执行,碰到useEffect将其effect存入一个队列中
 *     更新结束后,先执行cleanup队列,然后执行effect队列
 *  卸载阶段: 执行cleanup队列
 *  依赖参数:
 *    1. null: 每次更新都执行
 *    2. []: 组件更新时不执行
 *    3. [参数1, 参数2...]
 * 
 * 
 * useRef
 *  - 类似于 createRef
 *  - 除了可以保存实例之外，还可以保存组件更新前的一些数据
 *  - 当 ref 存储的是数据，数据不会随着组件的更新而自动更新,可以以此来避开挂载更新数据
 * 
 * memo: 返回false时更新  注意作用域问题,可用redux解决
 *  - NewCmp = memo(Cmp,compare:()=>false|true)
 * 
 * useMemo useCallback
 *  - useMemo(() => { return count * 18 }, [count])  返回值,类似于computed
 *  - useCallback(() => { return count * 18 }, [count])  返回函数
 */

import { useState } from 'react'
import Child from './child'

function App (props) {
  const [show, setShow] = useState(false)

  return <div>
    <button onClick={() => { setShow(!show) }}>显示/隐藏</button>
    {show && <Child />}
    <hr />
  </div>
}

export default App
