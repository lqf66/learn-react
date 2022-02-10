/*
 * @Author: Lqf
 * @Date: 2021-11-27 17:38:08
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-06 21:15:22
 * @Description: 我添加了修改
 */
import { Switch, Route } from "react-router-dom"
import { routes } from './routes.config'
function IndexRouter () {
  return <Switch>
    {
      routes.map((item, index) => {
        return <Route
          key={index}
          path={item.path}
          exact={item.exact}
          strict={item.strict}
          render={(props) => {
            return item.render(props)
          }}
        />
      })
    }
  </Switch>
}

export default IndexRouter