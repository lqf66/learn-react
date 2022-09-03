import { useParams, Link } from 'react-router-dom'
import data from '../../../data/data'
const limit = 5
function ListPage() {
  let { type = "good", page = "1" } = useParams()
  let nowDataLen = data[type].length
  let pageLen = Math.ceil(nowDataLen / limit)
  page = Number(page)
  const render = () => {
    let pageNub = []
    for (let i = 1; i <= pageLen; i++) {
      if (page === i) {
        pageNub.push(<span key={i}>{i}</span>)
      } else {
        pageNub.push(<Link key={i} to={`/list/${type}/${i}`}>{i}</Link>)
      }
    }
    return pageNub
  }
  return <nav>{render()}</nav>

}

export default ListPage
