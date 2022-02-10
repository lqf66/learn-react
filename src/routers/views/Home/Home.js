/*
 * @Author: Lqf
 * @Date: 2021-10-27 21:28:52
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-04 19:05:27
 * @Description: 
 *    1. 组件必须继承自React.Component,必须有一个render方法来输出视图
 *    2. 使用setState改变state的值
 *    3. React事件中this为undefined: 箭头函数 / this绑定
 *    4. 阻止默认事件使用 event.preventDefault(), return false无效
 */

import HomeNav from './HomeNav'
import ReactNav from '../../../component/ReactNav'
import Sidebar from "../../../component/Sidebar"
import Context from "../../../component/Context"
import LifeCycle from "../../../component/LifeCycle"
import TodoList from "../../../component/TodoList"
import UseFunction from '../../../component/UseFunction'
import ReduxEg from "../../../component/ReduxEg"
import Shop from "../../../component/Shop"
import AsyncAction from "../../../component/AsyncAction"

function Home (props) {
  console.log('props: ', props)
  return <div>
    <HomeNav />
    <hr />
    <ReactNav />
    <Sidebar />
    <Context />
    <LifeCycle />
    <UseFunction />
    <ReduxEg />
    <Shop />
    <AsyncAction />
    <TodoList />
  </div>
}

export default Home