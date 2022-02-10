/*
 * @Author: Lqf
 * @Date: 2021-11-27 17:18:42
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-07 22:25:13
 * @Description: 我添加了修改
 */

import { useCallback } from "react"
import { useDispatch } from "react-redux"
import api from "../assets/js/api.config"
import actions from "./actions"


function useGetTopics() {
  const dispatch = useDispatch()
  const getData = useCallback((page, tab) => {
    dispatch({
      type: actions.topics.loading
    })
    api.topics(page, tab)
      .then(res => {
        dispatch({
          type: actions.topics.update,
          data: res.data.data
        })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return getData
}

// 获取主题详情
function useTopics() {
  const dispatch = useDispatch()
  const getData = useCallback((id) => {
    dispatch({
      type: actions.topic.loading
    })
    api.topic(id)
      .then(res => {
        dispatch({
          type: actions.topic.update,
          data: res.data.data
        })
      })
      .catch((res) => {
        dispatch({
          type: actions.topic.error,
          error_msg: res.response.data.error_msg
        })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return getData
}

// 获取用户详情
function useUser() {
  const dispatch = useDispatch()
  const getData = useCallback((loginname) => {
    dispatch({
      type: actions.user.loading
    })
    api.user(loginname)
      .then(res => {
        dispatch({
          type: actions.user.update,
          data: res.data.data
        })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return getData
}

export { useGetTopics, useTopics, useUser }