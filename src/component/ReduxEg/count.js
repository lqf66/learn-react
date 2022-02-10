/*
 * @Author: Lqf
 * @Date: 2021-11-14 16:00:05
 * @LastEditors: Lqf
 * @LastEditTime: 2021-11-14 16:07:36
 * @Description: 我添加了修改
 */
import { connect } from 'react-redux'

function Count (props) {
  console.log('props: ', props)
  return <div>

  </div>
}

const withConnect = connect(state => {
  return {
    count: state.count
  }
})

export default withConnect(Count)