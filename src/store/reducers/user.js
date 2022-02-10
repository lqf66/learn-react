/*
 * @Author: Lqf
 * @Date: 2021-12-07 22:21:20
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-07 22:29:50
 * @Description: 我添加了修改
 */

import actions from "../actions"

export default function user(user = {
  loading: true,
  data: {}
}, action) {
  switch (action.type) {
    case actions.user.loading:
      return {
        loading: true,
        data: {}
      }
    case actions.user.update:
      return {
        loading: false,
        data: action.data
      }
    default:
      return user
  }
}