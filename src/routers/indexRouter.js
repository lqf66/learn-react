import { Switch, Route } from "react-router-dom"
import { routes } from './routes.config'
function IndexRouter() {
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
