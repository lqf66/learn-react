/*
 * @Author: Lqf
 * @Date: 2021-11-19 19:39:07
 * @LastEditors: Lqf
 * @LastEditTime: 2021-11-19 20:04:56
 * @Description: 我添加了修改
 */
import axios from "axios"
function getListData (dispatch, getState) {
  dispatch({
    type: "news/loading"
  })
  const { news: { page } } = getState()
  axios.get(`https://cnodejs.org/api/v1/topics?page=${page}&limit=5`)
    .then(res => {
      dispatch({
        type: "news/update",
        list: res.data.data
      })
    })
}

export { getListData }
