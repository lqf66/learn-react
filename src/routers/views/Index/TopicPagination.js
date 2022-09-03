import { Pagination } from "antd"
import { useLocation, useHistory } from "react-router-dom"
import qs from 'qs'

function TopicPagination() {
  const { search } = useLocation()
  const { push } = useHistory()
  const { tab = 'all', page = '1' } = qs.parse(search.slice(1))
  return <Pagination
    className="topics-pagination"
    total={500}
    pageSize={10}
    current={Number(page)}
    showSizeChanger={false}
    onChange={(page) => {
      push(`/?tab=${tab}&page=${page}`)
    }}
  />
}

export default TopicPagination
