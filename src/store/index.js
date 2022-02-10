/*
 * @Author: Lqf
 * @Date: 2021-11-05 21:34:05
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-07 22:22:02
 * @Description: 我添加了修改
 */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import count from './reducers/count'
import nub from './reducers/nub'
import list from './reducers/list'
import news from './reducers/news'
import topics from './reducers/topics'
import topic from './reducers/topic'
import login from './reducers/login'
import user from './reducers/user'

const reducer = combineReducers({
  count,
  nub,
  list,
  news,
  topics,
  topic,
  login,
  user
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store

// function reducer (state = {
//   count: undefined,
//   nub: undefined,
//   list: undefined
// }, action) {
//   return {
//     count: count(state.count, action),
//     nub: nub(state.nub, action),
//     list: list(state.list, action)
//   }
// }


// 未拆分版本的reducer
// const reducer = (state = {
//   count: 1,
//   nub: 10,
//   list: {
//     index: 2,
//     data: [
//       {
//         id: 0,
//         title: '列表项-0'
//       },
//       {
//         id: 1,
//         title: '列表项-1'
//       }
//     ]
//   }
// }, action) => {
//   let { type, count, nub } = action
//   switch (type) {
//     case 'count/plus':
//       return {
//         ...state,
//         count: state.count + (count === undefined ? 1 : count)
//       }
//     case 'count/mius':
//       return {
//         ...state,
//         count: state.count - (count === undefined ? 1 : count)
//       }
//     case 'nub/plus':
//       return {
//         ...state,
//         nub: state.nub + (nub === undefined ? 1 : nub)
//       }
//     case 'nub/mius':
//       return {
//         ...state,
//         nub: state.nub - (nub === undefined ? 1 : nub)
//       }
//     default:
//   }
//   return state
// }