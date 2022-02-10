/*
 * @Author: Lqf
 * @Date: 2021-11-24 19:58:32
 * @LastEditors: Lqf
 * @LastEditTime: 2021-11-27 17:49:49
 * @Description: 我添加了修改
 */
import List from './List'
import ListNav from './ListNav'
import ListPage from './ListPage'
function ListView () {
  return <h1>
    <ListNav />
    <List />
    <ListPage />
  </h1>
}
export default ListView