/*
 * @Author: Lqf
 * @Date: 2021-12-05 16:02:48
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-05 16:05:19
 * @Description: 我添加了修改
 */

import actions from "../actions"


export default function login (login = {
  user: ''
}, action) {
  switch (action.type) {
    case actions.login.login:
      return {
        user: action.user
      }
    default:
      return login
  }
}