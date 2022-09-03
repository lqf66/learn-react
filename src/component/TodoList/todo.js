import {
  useState, useRef, useEffect,
  // memo
} from "react"

function Todo(props) {
  const { data, changeDone, removeTodo, editTodo } = props
  const { id, title, done } = data
  const [editState, changeEditState] = useState(false)
  const [editVal, setEditVal] = useState(title)
  const edit = useRef()
  useEffect(() => {
    editState && edit.current.focus()
  }, [editState])
  console.log('render')
  return <li className={editState ? "editing" : ''}  >
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
            changeEditState(true)
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
          ref={edit}
          value={editVal}
          onChange={({ target }) => {
            setEditVal(target.value)
          }}
          onBlur={() => {
            if (editVal.trim()) {
              editTodo(id, editVal)
            } else {
              setEditVal(title)
            }
            changeEditState(false)
          }}
        />
      </div>
    </div>
  </ li>
}
// const newTodo = memo(Todo, (props, nextProps) => {
//   // console.log(props, nextProps) 
//   // false 更新
//   return props.data === nextProps.data
// })
// export default newTodo
export default Todo
