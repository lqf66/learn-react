/*
 * @Author: Lqf
 * @Date: 2021-10-29 20:48:53
 * @LastEditors: Lqf
 * @LastEditTime: 2021-10-30 15:41:30
 * @Description: 我添加了修改
 */

import { Component } from "react"
import './style.css'
import Menu from './menu'
import data from './data'

class Sidebar extends Component {
  state = {
    openName: ''
  }
  setOpen = (openName) => {
    this.setState({
      openName
    })
  }
  render () {
    const { openName } = this.state
    return (
      <div className="friend-list">
        {
          Object.keys(data).map(item => {
            return <Menu
              key={item}
              name={item}
              openName={openName}
              data={data[item]}
              setOpen={this.setOpen}
            />
          })
        }
      </div>
    )
  }
}
export default Sidebar
