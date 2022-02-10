/*
 * @Author: Lqf
 * @Date: 2021-11-24 20:25:51
 * @LastEditors: Lqf
 * @LastEditTime: 2021-11-24 22:42:03
 * @Description: 我添加了修改
 */
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function ListNav () {
  const { type = 'good' } = useParams()
  return <nav className="list-nav">
    <NavLink to="/list/good"
      isActive={() => {
        return type === 'good'
      }}
    >good</NavLink>
    <span> | </span>
    <NavLink to="/list/share">share</NavLink>
    <span> | </span>
    <NavLink to="/list/ask">ask</NavLink>
  </nav>
}
export default ListNav