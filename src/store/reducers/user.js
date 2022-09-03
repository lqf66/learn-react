import actions from "../actions"

export default function user(user = {
  loading: true,
  data: {}
}, action) {
  switch (action.type) {
    case actions.user.loading:
      return {
        loading: true,
        data: {}
      }
    case actions.user.update:
      return {
        loading: false,
        data: action.data
      }
    default:
      return user
  }
}
