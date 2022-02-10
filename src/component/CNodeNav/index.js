/*
 * @Author: Lqf
 * @Date: 2021-12-04 19:40:33
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-04 21:55:57
 * @Description: 我添加了修改
 */

import { Menu } from "antd"
import { Link, useLocation } from "react-router-dom"

function Nav ({ theme = 'dark', data, getSelectKey = () => { } }) {
  const location = useLocation()
  const selectKey = String(getSelectKey(location))
  return <Menu
    theme={theme}
    mode="horizontal"
    selectedKeys={[selectKey]}
  >
    {
      data.map((nav, index) => {
        return <Menu.Item key={index}><Link to={nav.path}>{nav.title}</Link></Menu.Item>
      })
    }
  </Menu>
}
export default Nav