import actions from "../actions"

function topics(topics = {
  loading: false,
  data: []
}, action) {
  switch (action.type) {
    case actions.topics.loading:
      return {
        loading: true,
        data: []
      }
    case actions.topics.update:
      return {
        loading: false,
        data: action.data
      }
    default:
      return topics
  }
}
export default topics
