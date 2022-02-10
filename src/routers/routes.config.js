/*
 * @Author: Lqf
 * @Date: 2021-11-27 17:50:15
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-06 21:14:58
 * @Description: 我添加了修改
 */

import { lazy, Suspense } from "react"
import { Redirect } from "react-router-dom"
import HomeView from "./views/Home/Home"
import IndexView from './views/Index/index'
import APIView from "./views/Api/Api"
import AboutView from "./views/About/About"
import AboutDetailView from './views/About/AboutDetail'
import ListView from './views/List/ListView'
import UndefinedView from "./views/404/Undefined"
import LoginView from "./views/Login/Login"
import withGuard from "../component/Guard"
import UserView from "./views/User/User"
import TopicView from "./views/Topic/Topic"

const StartView = lazy(() => import("./views/Start/Start"))
// import StartView from "./views/Start/Start"

// 路由表
const user = 'lqf'
const types = ['ask', 'good', 'share']
const routes = [
  {
    path: ["/", "/index"],
    exact: true,
    render (props) {
      return <IndexView user={user} {...props} />
    }
  },
  {
    path: "/home",
    exact: true,
    render (props) {
      return <HomeView user={user} {...props} />
    }
  },
  {
    path: "/start",
    exact: true,
    render (props) {
      return <Suspense fallback={<div>组件请求中...</div>}>
        <StartView {...props} />
      </Suspense>
    }
  },
  {
    path: "/api",
    exact: true,
    render (props) {
      let NewAPIView = withGuard(APIView)
      return <NewAPIView  {...props} />
    }
  },
  {
    path: "/user/:username",
    exact: true,
    render (props) {
      return <UserView  {...props} />
    }
  },
  {
    path: "/topics/:id",
    exact: true,
    render (props) {
      return <TopicView  {...props} />
    }
  },
  {
    path: "/about",
    exact: true,
    strict: true,
    render (props) {
      return <AboutView {...props} />
    }
  },
  {
    path: "/about/detail",
    exact: true,
    strict: true,
    render (props) {
      if (user) {
        return <AboutDetailView {...props} />
      }
      return <Redirect to='/404' />
    }
  },
  {
    path: "/list/:type?/:page?",
    exact: true,
    render (props) {
      const { type = 'good', page = "1" } = props.match.params
      if (types.includes(type) && Number(page) > 0 && String(Number(page)) === page) {
        return <ListView />
      }
      return <Redirect to="/404" />
    }
  },
  {
    path: "/login",
    exact: true,
    render (props) {
      return <LoginView {...props} />
    }
  },
  {
    path: "/404",
    exact: false,
    render (props) {
      return <UndefinedView {...props} />
    }
  },
  {
    path: "",
    render () {
      return <Redirect to="/404" />
    }
  }
]
export { routes }
