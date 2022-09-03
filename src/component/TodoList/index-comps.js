import { Component } from "react"
import './index.css'
import States from "./states"
import Todos from "./todos"

class TodoList extends Component {
  state = {
    data: [
      {
        id: 1,
        title: '打LOL',
        done: false
      },
      {
        id: 2,
        title: '金克丝',
        done: true
      }
    ],
    htmlTag: `<h1>这是一个html标签</h1>`
  }
  addTodo = (title) => {
    const { data } = this.state
    this.setState({
      data: [
        ...data,
        {
          id: new Date(),
          title,
          done: false
        }
      ]
    })
  }
  changeDone = (id, done) => {
    let { data } = this.state
    data = data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          done
        }
      }
      return item
    })
    this.setState({ data })
  }
  removeTodo = (id) => {
    const { data } = this.state
    this.setState({
      data: data.filter(item => item.id !== id)
    })
  }
  editTodo = (id, title) => {
    let { data } = this.state
    data = data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title
        }
      }
      return item
    })
    this.setState({ data })
  }
  keyDownEventer = (e) => {
    if (e.keyCode === 13) {
      let val = e.target.value
      if (val.trim()) {
        this.addTodo(val)
        e.target.value = ''
      }
    }
  }
  render() {
    const { data, htmlTag } = this.state
    return <div id="todoapp">
      <div className="title">
        <h1>todo</h1>
      </div>
      <div className="content">
        <div id="create-todo">
          <input
            id="new-todo"
            placeholder="What needs to be done?"
            autoComplete="off"
            type="text"
            onKeyDown={this.keyDownEventer}
          />
        </div>
        <Todos
          data={data}
          removeTodo={this.removeTodo}
          changeDone={this.changeDone}
          editTodo={this.editTodo}
        />
        <States
          data={data}
        >
          {/* 相当于插槽 */}
          <p>111</p>
          <p>222</p>
          <p>333</p>
        </States>
        {/* dangerouslySetInnerHTML 接收一个对象, __html中填入innerHTML */}
        <div dangerouslySetInnerHTML={{
          __html: htmlTag
        }}></div>
      </div>
    </div>
  }
}

export default TodoList
