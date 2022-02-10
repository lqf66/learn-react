/*
 * @Author: Lqf
 * @Date: 2021-11-14 16:32:30
 * @LastEditors: Lqf
 * @LastEditTime: 2021-11-14 16:46:22
 * @Description: 我添加了修改
 */
export default function count (count = 1, action) {
  switch (action.type) {
    case 'count/plus':
      return count + 1
    case 'count/mius':
      return count - 1
    default:
      return count
  }
}