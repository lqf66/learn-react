/*
 * @Author: Lqf
 * @Date: 2021-12-05 16:38:02
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-05 16:40:25
 * @Description: 我添加了修改
 */

import { useLocation, useHistory } from "react-router-dom"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
function useGuards () {
  const { user } = useSelector(state => state.login)
  const { replace } = useHistory()
  const { pathname } = useLocation()
  useEffect(() => {
    if (!user) {
      localStorage.setItem("prevpath", pathname)
      replace("/login")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]
  )
}

export { useGuards }
