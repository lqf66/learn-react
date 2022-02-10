/*
 * @Author: Lqf
 * @Date: 2021-10-29 22:13:25
 * @LastEditors: Lqf
 * @LastEditTime: 2021-10-30 15:32:10
 * @Description: 我添加了修改
 */

import { Component } from "react"
import Count from './count'
import Nub from './nub'

class Child extends Component {
  render () {
    return <div style={{ display: 'flex' }}>
      <Count />
      <Nub />
    </div>
  }
}
export default Child