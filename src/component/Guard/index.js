/*
 * @Author: Lqf
 * @Date: 2021-12-05 16:09:20
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-05 16:26:51
 * @Description: 我添加了修改
 */

import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Redirect, useLocation } from "react-router-dom"

function Guard ({ Cmp, ...props }) {
  const { user } = useSelector(state => state.login)
  const { pathname } = useLocation()
  useEffect(() => {
    if (!user) {
      localStorage.setItem('prevPath', pathname)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  if (user) {
    return <Cmp {...props} />
  }
  return <Redirect to='/login' />
}

function withGuard (Cmp) {
  return (props) => {
    return <Guard Cmp={Cmp} {...props} />
  }
}

export default withGuard