import { Component } from "react"
import Menu from './menu'
import data from './data'
import "./style.css"

class Nav extends Component {
  render() {
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
