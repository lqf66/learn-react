/*
 * @Author: Lqf
 * @Date: 2021-11-19 18:32:00
 * @LastEditors: Lqf
 * @LastEditTime: 2021-11-19 20:06:02
 * @Description: 我添加了修改
 */

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getListData } from "./actions"

function AsyncAction () {
  const { news } = useSelector(state => state)
  const { loading, list, page } = news
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])
  return <div>
    <ul>
      {loading ? <p>数据获取中</p> : <ul>{
        list.map(item => <li key={item.id}>{item.title}</li>)
      }</ul>}
    </ul>
    <button onClick={() => {
      dispatch({
        type: 'news/prev'
      })
    }}>上一页</button>
    <button onClick={() => {
      dispatch({
        type: 'news/next'
      })
    }}>下一页</button>
    <hr />
  </div>
}

export default AsyncAction