import { Component } from "react"
import { Consumer } from './context'

class Nub extends Component {
  render() {
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
