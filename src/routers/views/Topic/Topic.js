/*
 * @Author: Lqf
 * @Date: 2021-12-06 21:10:35
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-07 22:06:04
 * @Description: 我添加了修改
 */

import { Alert } from "antd"
import { Fragment, useEffect } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useTopics } from "../../../store/actions.async"
import Details from "./Detail"
import Replies from "./Replies"

function TopicView() {
  const { id } = useParams()
  const getData = useTopics()
  const history = useHistory()
  let { loading, data, isError, error_msg } = useSelector(state => state.topic)
  useEffect(() => {
    getData(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return <div id="topic">
    {
      isError ? <Alert
        closable
        message={'请求出错'}
        type="errpr"
        description={
          <Fragment>
            <p>{error_msg}</p>
            <p>点击关闭按钮返回</p>
          </Fragment>
        }
        afterClose={() => {
          history.goBack()
        }}
      /> : (<Fragment>
        <Details data={data} loading={loading} />
        <Replies data={data.replies} loading={loading} />
      </Fragment>)
    }
  </div >
}
export default TopicView