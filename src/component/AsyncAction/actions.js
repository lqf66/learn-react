import axios from "axios"
function getListData(dispatch, getState) {
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
