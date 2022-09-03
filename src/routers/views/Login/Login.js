import { Layout } from "antd"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import actions from "../../../store/actions"


function LoginView() {
  const { user } = useSelector(state => state.login)
  const dispatch = useDispatch()
  const { action, replace, goBack } = useHistory()
  useEffect(() => {
    if (user.trim()) {
      switch (action) {
        case 'POP':
          replace('/')
          break
        case 'PUSH':
          goBack()
          break
        case 'REPLACE':
          const prevPath = localStorage.getItem('prevPath')
          replace(prevPath ? prevPath : '/')
          localStorage.removeItem('prevPath')
          break
        default:
          replace('/')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  return <Layout.Content>
    <h1>登陆视图</h1>
    <button onClick={() => {
      dispatch({
        type: actions.login.login,
        user: 'lqf'
      })
    }}>登录</button>
  </Layout.Content>
}

export default LoginView
