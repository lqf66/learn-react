import { createStore } from 'redux'
/**
 *  store 仓库,用于对状态进行管理
 *    - getState: ƒ getStore() 获取store中的状态
 *    - dispatch: ƒ dispatch(action) 同步方法
 *      发起一个状态的修改指令,然后store重新调用reducer,获取到当前的action之后,根据action映射出新的state
 *    - replaceReducer: 传入一个函数替代reducer
 *    - subscribe: ƒ subscribe(listener) 监听state改变
 *  reducer 纯函数,用于修改状态
 *    - state 当前状态
 *    - action 对状态的修改指令,type 修改指令  payload 参数
 */
const reducer = (state = { count: 1 }, action) => {
  let nub = action.nub
  switch (action.type) {
    case 'plus':
      return {
        count: state.count + (nub === undefined ? 1 : nub)
      }
    case 'mius':
      return {
        count: state.count - (nub === undefined ? 1 : nub)
      }
    default:
  }
  return state
}
const store = createStore(reducer)
const unSubscribe = store.subscribe(() => {
  console.log(store.getState(), 'subscribe')
})

console.log('store: ', store.getState())
store.dispatch({ type: 'plus' })
console.log('store: ', store.getState())

store.dispatch({ type: 'plus', nub: 5 })
console.log('store: ', store.getState())

store.dispatch({ type: 'mius', nub: 5 })
console.log('store: ', store.getState())


