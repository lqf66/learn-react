import { useLocation, useHistory } from "react-router-dom"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
function useGuards() {
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
