/*
 * @Author: Lqf
 * @Date: 2021-12-07 21:11:38
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-07 21:47:54
 * @Description: 我添加了修改
 */

import actions from "../actions"

export default function topic(topic = {
  loading: true,
  data: { author: {} },
  isError: false,
  error_msg: ''
}, action) {
  switch (action.type) {
    case actions.topic.loading:
      return {
        loading: true,
        data: { author: {} },
        isError: false,
        error_msg: ''
      }
    case actions.topic.update:
      return {
        loading: false,
        data: action.data,
        isError: false,
        error_msg: ''
      }
    case actions.topic.error:
      return {
        loading: false,
        data: { author: {} },
        isError: true,
        error_msg: action.error_msg
      }
    default:
      return topic
  }
}