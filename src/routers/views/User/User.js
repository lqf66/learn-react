import { Card, Avatar } from "antd"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useUser } from "../../../store/actions.async"
import TopicList from "../Index/TopicList"
import { UserOutlined } from '@ant-design/icons'
import FromNow from "../Index/FromNow"

function UserView() {
  let { username } = useParams()
  let getData = useUser()
  let { data, loading } = useSelector(state => state.user)
  let { recent_topics = [], recent_replies = [], avatar_url, create_at, githubUsername, score } = data
  useEffect(() => {
    getData(username)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username])
  return <div className="user_page">
    <Card
      loading={loading}
      className="user_details"
    >
      <Avatar
        size={80}
        icon={<UserOutlined />}
        src={avatar_url}
      />
      <p style={{
        marginTop: 20
      }}>用户名：{username}　注册时间：{<FromNow date={create_at} />}　积分：{score}</p>
      <p>github：<a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">https://github.com/{githubUsername}</a></p>
    </Card>
    <Card
      loading={loading}
      title={'最近创建的话题'}
      type="inner"
    >
      <TopicList
        loading={loading}
        data={recent_topics}
      />
    </Card>
    <Card
      loading={loading}
      title={'最近参与的话题'}
      type="inner"
    >
      <TopicList
        loading={loading}
        data={recent_replies}
      />
    </Card>
  </div>
}

export default UserView
