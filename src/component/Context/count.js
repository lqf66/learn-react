import { Component } from "react"
import context from "./context"

class Count extends Component {
  // 相当于向this中注入context的内容
  static contextType = context
  render() {
    const { count, addCount } = this.context
    return <div>
      <p>count:{count}</p>
      <button onClick={addCount}>Count</button>
    </div>
  }
}
export default Count
