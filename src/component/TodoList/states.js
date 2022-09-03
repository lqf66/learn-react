export default function States({ data, children }) {
  const undoneArr = data.filter(item => !item.done)
  const doneArr = data.filter(item => item.done)
  return <div id="todo-stats">
    <span className="todo-count">
      <span className="number">{undoneArr.length}</span>
      <span className="word">项待完成</span>
    </span>
    <span className="todo-clear">
      <div>Clear <span>{doneArr.length}</span> 已完成事项</div>
    </span>
    {children[0]}
  </div>

}
