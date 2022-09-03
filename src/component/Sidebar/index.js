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
  render() {
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
