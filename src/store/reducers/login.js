import actions from "../actions"


export default function login(login = {
  user: ''
}, action) {
  switch (action.type) {
    case actions.login.login:
      return {
        user: action.user
      }
    default:
      return login
  }
}
