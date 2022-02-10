/*
 * @Author: Lqf
 * @Date: 2021-10-30 15:48:00
 * @LastEditors: Lqf
 * @LastEditTime: 2021-10-31 12:06:11
 * @Description: 我添加了修改
 */

import Todo from "./todo"

function Todos ({ data, ...props }) {
  return <ul id="todo-list">
    {
      data.map((item) => <Todo key={item.id} {...props} data={item} />)
    }
  </ul>
}
export default Todos