/*
 * @Author: Lqf
 * @Date: 2021-10-29 20:39:44
 * @LastEditors: Lqf
 * @LastEditTime: 2021-10-29 20:45:13
 * @Description: 我添加了修改
 */
/*
 * @Author: Lqf
 * @Date: 2021-10-27 21:28:52
 * @LastEditors: Lqf
 * @LastEditTime: 2021-10-27 21:52:19
 * @Description: 我添加了修改
 */

import { Component } from "react"
import Menu from './menu'
import data from './data'
import "./style.css"

class Nav extends Component {
  render () {
    return <ul id="menu">
      {
        Object.keys(data).map((item, index) => {
          return <Menu key={index} title={item} list={data[item]} />
        })
      }
    </ul>
  }
}

export default Nav