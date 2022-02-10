/*
 * @Author: Lqf
 * @Date: 2021-10-29 20:51:21
 * @LastEditors: Lqf
 * @LastEditTime: 2021-10-29 21:40:32
 * @Description: 我添加了修改
 */

import { Component } from "react"

class Menu extends Component {
  render () {
    const { data, name, openName, setOpen } = this.props
    const { title, list } = data
    return (
      <dl className={`friend-group ${name === openName ? 'expanded' : ''}`}>
        <dt onClick={() => { setOpen(name === openName ? '' : name) }}>{title}</dt>
        {
          list.map((item, index) => {
            return <dd key={index}>{item.name}</dd>
          })
        }
      </dl >
    )
  }
}
export default Menu