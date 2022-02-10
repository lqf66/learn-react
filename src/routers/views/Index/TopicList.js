/*
* @Author: Lqf
* @Date: 2021-12-04 22:51:05
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-07 21:09:51
* @Description: 我添加了修改
*/

import { Avatar, Col, List } from "antd"
import { UserOutlined } from '@ant-design/icons'
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useHistory, useLocation } from "react-router-dom"
import { useGetTopics } from "../../../store/actions.async"
import qs from 'qs'
import TopicTag from "./TopicTag"
import FromNow from "./FromNow"

function TopicList() {
  const { data, loading } = useSelector(state => state.topics)
  const getTopics = useGetTopics()
  const { search } = useLocation()
  const { tab = 'all', page = '1' } = qs.parse(search.slice(1))
  const { replace } = useHistory()
  useEffect(() => {
    if (isNaN(page)) {
      replace(`/?tab=${tab}&page=1`)
    } else {
      getTopics(page, tab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, page])
  return <List
    className="topic-list"
    dataSource={data}
    loading={loading}
    renderItem={itemData => {
      let { author,
        last_reply_at, good, top, tab, title, id
      } = itemData
      let { loginname, avatar_url } = author
      return <List.Item>
        <Col xs={24} md={20}>
          <Link to={`/user/${loginname}`}>
            <Avatar icon={<UserOutlined />} src={avatar_url} title={loginname} />
          </Link>
          <TopicTag tab={top ? 'top' : good ? 'good' : tab} />
          <Link to={`/topics/${id}`}>{title}</Link>
        </Col>
        <Col xs={0} md={4} className="from_now">
          <FromNow date={last_reply_at} />
        </Col>
      </List.Item>
    }}
  />
}

export default TopicList