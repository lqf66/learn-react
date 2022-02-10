/*
 * @Author: Lqf
 * @Date: 2021-12-07 20:32:20
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-07 20:44:43
 * @Description: 我添加了修改
 */

import dayjs from 'dayjs'
let relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')

function FromNow(props) {
  let { date } = props
  return dayjs(date).fromNow()
}
export default FromNow