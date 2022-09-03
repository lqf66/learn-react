import Todo from "./todo"

function Todos({ data, ...props }) {
  return <ul id="todo-list">
    {
      data.map((item) => <Todo key={item.id} {...props} data={item} />)
    }
  </ul>
}
export default Todos
