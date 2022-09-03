import { Component } from "react"
import Count from './count'
import Nub from './nub'

class Child extends Component {
  render() {
    return <div style={{ display: 'flex' }}>
      <Count />
      <Nub />
    </div>
  }
}
export default Child
