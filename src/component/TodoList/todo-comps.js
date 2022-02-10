/*
 * @Author: Lqf
 * @Date: 2021-10-30 15:51:59
 * @LastEditors: Lqf
 * @LastEditTime: 2021-10-31 13:12:34
 * @Description: 我添加了修改
 */

import { PureComponent, createRef } from "react"

class Todo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      editVal: props.data.title
    }
  }
  edit = createRef()
  todoWrap = createRef()
  componentDidUpdate (prevProps, prevState) {
    // 非编辑状态转入编辑状态
    if (!prevState.isEdit && this.state.isEdit) {
      this.edit.current.focus()
    }
  }
  // shouldComponentUpdate (nextProps) {
  //   // 返回 true 时更新
  //   return nextProps.data !== this.props.data
  // }
  render () {
    const { isEdit, editVal } = this.state
    const { data, changeDone, removeTodo, editTodo } = this.props
    const { id, title, done } = data
    return <li
      className={isEdit ? "editing" : ''}
      ref={this.todoWrap}
    >
      <div className={`todo ${done ? 'done' : ''}`}>
        <div className="display">
          <input
            className="check"
            type="checkbox"
            checked={done}
            onChange={({ target }) => {
              changeDone(id, target.checked)
            }} />
          <div
            className="todo-content"
            onDoubleClick={() => {
              // 也可以写在componentDidComponent中
              this.setState({ isEdit: true })
              // this.setState({ isEdit: true }, () => { this.edit.current.focus() })
            }}
          >{title}</div>
          <span
            className="todo-destroy"
            onClick={() => {
              removeTodo(id)
            }}
          ></span>
        </div>
        <div className="edit">
          <input
            className="todo-input"
            type="text"
            ref={this.edit}
            value={editVal}
            onChange={({ target }) => {
              this.setState({
                editVal: target.value
              })
            }}
            onBlur={() => {
              if (editVal.trim()) {
                editTodo(id, editVal)
              } else {
                this.setState({
                  editVal: title
                })
              }
              this.setState({
                isEdit: false
              })
            }}
          />
        </div>
      </div>
    </ li>
  }
}
export default Todo