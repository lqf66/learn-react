import axios from "axios"
import qs from 'qs'

const http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
})

const api = {
  topics: (page = 1, tab = 'all', limit = 10) => {
    return http.get('/topics?' + qs.stringify({ page, tab, limit }))
  },
  topic: (id) => {
    return http.get(`/topic/${id}`)
  },
  user: (loginname) => {
    return http.get(`/user/${loginname}`)
  }
}

export default api
