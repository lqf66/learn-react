/*
 * @Author: Lqf
 * @Date: 2021-10-27 21:47:39
 * @LastEditors: Lqf
 * @LastEditTime: 2021-11-19 20:21:00
 * @Description: 我添加了修改
 */
import { Component } from "react"

class Menu extends Component {
  state = {
    show: false
  }
  changeShow = () => {
    const { show } = this.state
    this.setState({
      show: !show
    })
  }
  render () {
    const { show } = this.state
    const { title, list } = this.props
    return <li className={show ? 'subList-show' : ''}>
      <div className="title" onClick={this.changeShow}>{title}</div>
      <ul className="subList">
        {
          list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </li>
  }
}

export default Menu