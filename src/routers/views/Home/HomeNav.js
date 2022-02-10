/*
 * @Author: Lqf
 * @Date: 2021-11-21 13:08:04
 * @LastEditors: Lqf
 * @LastEditTime: 2021-11-24 20:01:40
 * @Description: 
 *   NavLink 内链跳转
 *    activeClassName 当前项被选中后的class
 *    activeStyle 当前项被选中后的style
 *    exact 精确匹配
 *    isActive: func 判断当前是否应该选中
 */

import { withRouter } from "react-router-dom"
import { NavLink } from "react-router-dom"

function Nav (props) {
  console.log('props: ', props)
  return <nav className="nav">
    <NavLink
      to="/"
      exact
      activeClassName="indexActive"
      isActive={() => {
        return true
      }}
    >首页</NavLink>
    <span> | </span>
    <NavLink to="/about" exact activeStyle={{
      textDecoration: "underLine"
    }}>关于</NavLink>
    <span> | </span>
    <NavLink to="/about/detail" exact>关于-详情</NavLink>
    <span> | </span>
    <NavLink to="/list">列表页</NavLink>
  </nav>
}

export default withRouter(Nav)