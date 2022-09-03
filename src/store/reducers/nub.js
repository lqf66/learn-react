export default function nub(nub = 10, action) {
  switch (action.type) {
    case 'nub/plus':
      return nub + 1
    case 'nub/mius':
      return nub - 1
    default:
      return nub
  }
}
