import { Component } from "react"
import Child from "./child"
import { Provider } from "./context"

class Context extends Component {

  state = {
    count: 1,
    nub: 10
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  addNub = () => {
    this.setState({
      nub: this.state.nub + 5
    })
  }
  render() {
    const { count, nub } = this.state
    return (
      // value 是传递给后代的值
      <Provider
        value={{
          count,
          nub,
          addCount: this.addCount,
          addNub: this.addNub
        }}
      >
        <hr />Context
        <Child />
        <hr />
      </Provider>
    )
  }
}
export default Context
