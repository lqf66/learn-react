/*
 * @Author: Lqf
 * @Date: 2021-11-14 16:19:43
 * @LastEditors: Lqf
 * @LastEditTime: 2021-11-14 16:30:14
 * @Description: 我添加了修改
 */

import {
  useSelector, useDispatch,
  // useStore
} from "react-redux"


function Nub () {
  // console.log(useSelector(state => state.nub))
  // console.log(useDispatch())
  // console.log(useStore())
  const nub = useSelector(state => state.nub)
  const dispatch = useDispatch()
  return <div>
    <hr />
    <h2>redux</h2>
    <button onClick={() => {
      dispatch({
        type: "nub/mius"
      })
    }}>-</button>
    <span>{nub}</span>
    <button onClick={() => {
      dispatch({
        type: "nub/plus"
      })
    }}>+</button>
    <hr />
  </div>
}
export default Nub