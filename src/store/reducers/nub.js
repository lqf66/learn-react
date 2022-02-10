/*
 * @Author: Lqf
 * @Date: 2021-11-14 16:43:28
 * @LastEditors: Lqf
 * @LastEditTime: 2021-11-14 16:47:21
 * @Description: 我添加了修改
 */

export default function nub (nub = 10, action) {
  switch (action.type) {
    case 'nub/plus':
      return nub + 1
    case 'nub/mius':
      return nub - 1
    default:
      return nub
  }
}