/*
 * @Author: Lqf
 * @Date: 2021-12-04 17:03:27
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-07 21:06:16
 * @Description: 我添加了修改
 */

import { Layout } from 'antd'
import Nav from '../../../component/CNodeNav'
import { indexNavs } from '../../../assets/js/navs.config'
import qs from 'qs'
import TopicList from './TopicList'
import TopicPagination from './TopicPagination'
import { useSelector } from 'react-redux'

function IndexView() {
  const { loading } = useSelector(state => state.topics)
  return <>
    <Layout.Content className='page-content'>
      <Nav
        theme='light'
        data={indexNavs}
        getSelectKey={({ search }) => {
          const { tab = 'all' } = qs.parse(search.slice(1))
          return indexNavs.findIndex((nav) => {
            return tab === qs.parse(nav.path.slice(2)).tab
          })
        }}
      />
      <TopicList />
      {loading ? '' : <TopicPagination />}
    </Layout.Content>
    {/* <Layout.Sider>侧边栏</Layout.Sider> */}
  </>
}
export default IndexView
