import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"

function List() {
  const list = useSelector(state => state.list)
  const dispatch = useDispatch()
  const { data, index } = list
  return <>
    <h2>列表<button onClick={() => {
      dispatch({
        type: 'list/add',
        title: '新增列表项-' + index
      })
    }}>添加</button></h2>
    <ul>
      {data.map(item => <NewLi key={item.id} data={item} />)}
    </ul>
    <hr />
  </>
}

const NewLi = memo(Li, (props, nextProps) => {
  return props.data === nextProps.data // true 不更新
})

function Li({ data }) {
  const dispatch = useDispatch()
  const { id, title } = data
  console.log(id, 'render')
  return <li>{title} - <button onClick={() => {
    dispatch({
      type: 'list/remove',
      id
    })
  }}>删除</button></li>
}
export default List
