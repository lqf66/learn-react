import { Component } from "react"

class Menu extends Component {
  render() {
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
