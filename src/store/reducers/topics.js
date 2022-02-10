/*
 * @Author: Lqf
 * @Date: 2021-12-04 16:46:37
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-04 23:02:47
 * @Description: 我添加了修改
 */
import actions from "../actions"

function topics (topics = {
  loading: false,
  data: []
}, action) {
  switch (action.type) {
    case actions.topics.loading:
      return {
        loading: true,
        data: []
      }
    case actions.topics.update:
      return {
        loading: false,
        data: action.data
      }
    default:
      return topics
  }
}
export default topics