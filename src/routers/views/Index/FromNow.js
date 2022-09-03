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
