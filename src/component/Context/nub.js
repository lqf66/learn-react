/*
 * @Author: Lqf
 * @Date: 2021-10-29 22:13:53
 * @LastEditors: Lqf
 * @LastEditTime: 2021-10-30 15:32:44
 * @Description: 我添加了修改
 */

import { Component } from "react"
import { Consumer } from './context'

class Nub extends Component {
  render () {
    return <Consumer>
      {
        ({ nub, addNub }) => {
          return <div>
            <p>nub:{nub}</p>
            <button onClick={addNub}>Nub</button>
          </div>
        }
      }
    </Consumer>
  }
}

export default Nub