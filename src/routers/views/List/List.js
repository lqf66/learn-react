import { useParams } from 'react-router-dom'
import data from '../../../data/data'
const limit = 5
function List() {
  let { type = "good", page = "1" } = useParams()
  page = Number(page)
  let start = (page - 1) * limit
  let end = start + limit
  let nowData = data[type].filter((item, index) => (index >= start && index < end))
  return <ul>
    {
      nowData.map((item => <li key={item.id}>{item.id} - {item.title}</li>))
    }
  </ul>
}
export default List
