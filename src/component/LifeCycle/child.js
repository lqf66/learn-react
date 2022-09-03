import { Component } from "react"
/*
生命周期:

挂载阶段(mount): 从组件初始化 --> 组件构建的视图已经渲染到DOM树中
- constructor 初始化组件
- static getDerivedStateFromProps(props) 将 props 中的内容关联到 state 中 
    - 注意 this 问题
- render 构建虚拟DOM
- componentDidMount 组件完成挂载
    -- 处理副作用(DOM 操作，数据请求)

更新阶段(update): 从组件开始更新 --> 组件将对应的 DOM 视图更新完成

    组件更新：
        1. 调用 setState 会进行组件更新
        2. 在 React 父组件更新会引起子组件进行更新
    
    - static getDerivedStateFromProps(props, state)
    - shouldComponentUpdate()  -- 判断是否更新
    - render()
    - getSnapshotBeforeUpdate() 
    - componentDidUpdate() -- 处理副作用(请求)    


卸载阶段(unMount): 组件从 DOM 中删除
*/

class Child extends Component {
  constructor(props) {
    super(props)
    console.log('mount 1', "初始化组件")
    this.state = {
      count: 1
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log('mount 2 ', 'update 1', "将 props 中的数据映射到 state 中")
    return props // 返回值，是根据 props 要映射到 state 中的数据
  }
  componentDidMount() {
    console.log('mount4', "组件挂载完成")
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("props",this.props,nextProps);
    // console.log("state",this.state,nextState);
    console.log('update 2', "判断当前组件是否需要更新")
    return true // true 继续完成当前组件更新，false 中断当前组件更新
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 已经构建好新的虚拟DOM即将去更新真实DOM
    console.log('update 4', "获取DOM更新前的快照")
    return document.querySelector("#info").innerHTML
  }
  componentDidUpdate(prevProps, prevState, prevDOM) {
    console.log('update5', "组件更新完成", prevDOM)
  }

  componentWillUnmount() {
    console.log("组件即将卸载")
    window.onresize = null
  }
  render() {
    console.log(3, "构建虚拟DOM")
    const { parentInfo, count } = this.state
    return <>
      <p id="info">{parentInfo} --- {count}</p>
      <button onClick={() => { this.setState({ count: count + 1 }) }}>Add Count</button>
    </>
  }
}

export default Child
