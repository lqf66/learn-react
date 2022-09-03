import { useState } from "react"
import './index.css'
import States from "./states"
import Todos from "./todos"

function TodoList() {
  const [data, setData] = useState([
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
  ])
  const addTodo = (title) => {
    setData([
      ...data,
      {
        id: new Date(),
        title,
        done: false
      }
    ])
  }
  const changeDone = (id, done) => {
    setData(data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          done
        }
      }
      return item
    }))
  }
  const removeTodo = (id) => {
    setData(data.filter(item => item.id !== id))
  }
  const editTodo = (id, title) => {
    setData(data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title
        }
      }
      return item
    }))
  }
  const keyDownEventer = (e) => {
    if (e.keyCode === 13) {
      let val = e.target.value
      if (val.trim()) {
        addTodo(val)
        e.target.value = ''
      }
    }
  }

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
          onKeyDown={keyDownEventer}
        />
      </div>
      <Todos
        data={data}
        removeTodo={removeTodo}
        changeDone={changeDone}
        editTodo={editTodo}
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
        __html: `<h1>这是一个html标签</h1>`
      }}></div>
    </div>
  </div>
}

export default TodoList
