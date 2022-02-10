/*
 * @Author: Lqf
 * @Date: 2021-10-27 21:43:52
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-06 21:42:38
 * @Description: 
 *  Route
 *    1. 以 url 以当前 path 为开始则匹配
 *    2. exact 精确匹配 strict 严格匹配 [] 多路径匹配
 *    3. 无 path 或 path 为空,匹配所有路径
 *    4. 动态路由 :?
 * 
 *  Switch: 有多个 Route 其中一项匹配成功，则不再匹配剩余项
 *  Redirect: 重定向 from to
 * 
 *  路由参数
 *  - history 跳转信息
 *    1. action: 跳转到当前视图时的类型
 *      POP: 直接输入地址/刷新/从其他站点跳入
 *      PUSH: Link/NavLink/push方法
 *      REPLACE: 重定向/replace方法
 *    2. go/goBack/goForward/push/replace
 *    3. length: 当前源/域记录在历史记录的项
 * 
 *  - location 地址栏信息
 *    1. hash
 *    2. pathname 当前的url '/join'
 *    3. search 当前search
 *    4. state push或replace传递的信息
 * 
 *  - match 匹配信息
 *    1. isExact 当前项是否精确匹配
 *    2. params 动态路由参数
 *    3. path
 *    4. url 当前匹配项url节选
 * 
 *  获取路由参数
 *    1. Route 的 component 调用,可以从 props 中获取
 *    2. Route 的 render 调用,需要进行传递
 *    3. 非Route调用,使用 withRouter 或 Route Hooks 来获取
 *      - useHistory  获取 history 对象
        - useLocation 获取 location 对象
        - useParams   获取动态路由参数
        - useRouteMatch 获取 Match 对象
 */

import './assets/css/index.css'
import { Layout, Affix, Row, Col } from 'antd'
import IndexRouter from './routers/indexRouter'
import { Link } from 'react-router-dom'
import logo from './assets/images/logo.png'
import CNodeNav from './component/CNodeNav'
import { navs } from './assets/js/navs.config'

function App () {
  return <Layout id='page'>
    <Affix offsetTop={0}>
      <Layout.Header>
        <Row className='wrap'>
          <Col span={4}>
            <h1 id='logo'>
              <Link to='/'>
                <img src={logo} alt="" />
                {/* require 方式导入 */}
                {/* <img src={require('./assets/images/logo.png').default} alt="" /> */}
              </Link>
            </h1>
          </Col>
          <Col span={20}>
            <CNodeNav
              data={navs}
              getSelectKey={({ pathname }) => {
                return navs.findIndex(nav => {
                  if (nav.isActive) {
                    return nav.isActive(pathname)
                  }
                  return pathname === nav.path
                })
              }}
            />
          </Col>
        </Row>
      </Layout.Header>
    </Affix>
    <Layout className='wrap'>
      <IndexRouter />
    </Layout>
    <Layout.Footer className='wrap' id='footer'>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</Layout.Footer>
  </Layout >
}
export default App


//    <Switch >
//     <Route path={["/", "/index", "/home"]} exact render={(props) => {
//       return <Home user={user} {...props} />
//     }} />
//     <Route path="/about" exact strict component={About} />
//     <Route path="/about/detail" render={() => {
//       // 鉴权
//       if (user) {
//         return <AboutDetail />
//       }
//       return <Redirect to='/' />
//     }} />
//     <Route path="/list/:type?/:page?" render={(props) => {
//       const { type = 'good', page = "1" } = props.match.params
//       if (types.includes(type) && Number(page) > 0 && String(Number(page)) === page) {
//         return <ListView />
//       }
//       return <Redirect to="/404" />
//     }} />
//     <Route path='/404' component={Undefined} />
//     <Redirect to='/404' />
//   </ > 