export default function count(count = 1, action) {
  switch (action.type) {
    case 'count/plus':
      return count + 1
    case 'count/mius':
      return count - 1
    default:
      return count
  }
}
