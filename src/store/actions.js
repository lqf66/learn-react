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
