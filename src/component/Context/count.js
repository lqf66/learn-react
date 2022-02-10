/*
 * @Author: Lqf
 * @Date: 2021-10-29 22:13:36
 * @LastEditors: Lqf
 * @LastEditTime: 2021-10-30 14:38:33
 * @Description: 我添加了修改
 */

import { Component } from "react"
import context from "./context"

class Count extends Component {
  // 相当于向this中注入context的内容
  static contextType = context
  render () {
    const { count, addCount } = this.context
    return <div>
      <p>count:{count}</p>
      <button onClick={addCount}>Count</button>
    </div>
  }
}
export default Count