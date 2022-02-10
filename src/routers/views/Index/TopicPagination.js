/*
 * @Author: Lqf
 * @Date: 2021-12-05 12:10:05
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-07 21:06:56
 * @Description: 我添加了修改
 */
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