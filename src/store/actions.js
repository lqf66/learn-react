/*
 * @Author: Lqf
 * @Date: 2021-11-27 17:18:13
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-07 22:22:50
 * @Description: 我添加了修改
 */

const actions = {
  topics: {
    loading: Symbol('loading'),
    update: Symbol('update')
  },
  topic: {
    loading: Symbol('loading'),
    update: Symbol('update'),
    error: Symbol('error')
  },
  user: {
    loading: Symbol('loading'),
    update: Symbol('update')
  },
  login: {
    login: Symbol('login')
  }
}

export default actions