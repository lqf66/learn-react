import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function ListNav() {
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
